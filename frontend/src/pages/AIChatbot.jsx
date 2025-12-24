function AIChatbot() {
  return (
    <main className="page">
      <h1>Your 24/7 AI Agricultural Expert</h1>
      <p>Get instant answers on crop cultivation, disease management, irrigation, fertilizers, and more.</p>
      
      <div className="agribot full">
        <h4>AgriBot <span>Online</span></h4>
        <p className="bot">Hello! How can I help you today?</p>
        <p className="user">What's the best time to plant tomatoes in Kandy?</p>
        <p className="bot">In Kandy, the best time is during the Yala season (April-September). The cooler climate is ideal.</p>
        <p className="user">What fertilizer should I use?</p>
        <p className="bot">For tomatoes, use a balanced NPK fertilizer with higher potassium...</p>
      </div>
      
      <button className="big-btn">Start Chatting Now</button>
    </main>
  );
}

export default AIChatbot;