import { useState } from 'react';
import { FaRobot, FaXmark, FaPaperPlane } from 'react-icons/fa6';

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

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

          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FaRobot className="text-green-600 text-sm" />
                </div>
                <div className="bg-white rounded-[16px] rounded-tl-none px-4 py-3 shadow-sm max-w-[260px]">
                  <p className="text-sm text-gray-800 m-0">Hello! 👋 I'm AgriBot, your agricultural assistant. How can I help you today?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500 text-sm"
              />
              <button className="h-[44px] w-[44px] rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors">
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
