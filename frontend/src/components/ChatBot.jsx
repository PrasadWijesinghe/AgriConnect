import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaXmark, FaPaperPlane } from 'react-icons/fa6';

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm AgriBot, your agricultural assistant. How can I help you today?",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const botMessage = {
        id: messages.length + 2,
        text: data.answer || "Sorry, I couldn't get a response. Please try again.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, there was an error connecting to the server. Please make sure the backend is running.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 h-16 w-16 rounded-full bg-green-600 text-white shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-300 hover:bg-green-700 hover:scale-110 hover:shadow-[0_12px_32px_rgba(22,163,74,0.5)] flex items-center justify-center z-50 ${isChatOpen ? 'hidden' : 'flex'}`}
        aria-label="Open chatbot"
      >
        <FaRobot className="text-2xl" />
      </button>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[550px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col z-50 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaRobot className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg m-0">AgriBot</h3>
                <p className="text-white/80 text-xs m-0">Your farming assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <FaXmark className="text-white" />
            </button>
          </div>

          
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <FaRobot className="text-green-600 text-sm" />
                    </div>
                  )}
                  <div
                    className={`rounded-[16px] px-4 py-3 shadow-sm max-w-[260px] ${
                      message.sender === 'user'
                        ? 'bg-green-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm m-0">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FaRobot className="text-green-600 text-sm" />
                  </div>
                  <div className="bg-white rounded-[16px] rounded-tl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500 text-sm disabled:bg-gray-100"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="h-[44px] w-[44px] rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors disabled:bg-gray-400"
              >
                <FaPaperPlane className="text-white text-sm" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
