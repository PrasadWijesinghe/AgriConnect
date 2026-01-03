from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

# Load env
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


pdf_file = "crop_info.pdf"
loader = PyPDFLoader(pdf_file)
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=200)
chunks = splitter.split_documents(docs)

embeddings = OpenAIEmbeddings(openai_api_key=api_key)
db = FAISS.from_documents(chunks, embeddings)
retriever = db.as_retriever()

llm = ChatOpenAI(model="gpt-4o-mini", openai_api_key=api_key)

# Request model
class Query(BaseModel):
    question: str

@app.post("/ask")
def ask_chat(query: Query):
    relevant_docs = retriever._get_relevant_documents(query.question, run_manager=None)
    if not relevant_docs:
        return {"answer": "Sorry, I could not find relevant information in the PDF."}
    
    context = "\n".join([d.page_content for d in relevant_docs])
    prompt = f"Use the following context to answer the question:\n\n{context}\n\nQuestion: {query.question}"
    response = llm.invoke(prompt)
    
    return {"answer": response.content}
