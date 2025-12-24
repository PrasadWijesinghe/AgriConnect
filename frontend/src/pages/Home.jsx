import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Grow Smarter Sell Better Earn More</h1>
        <p>AI-powered crop recommendations and real-time market intelligence for modern farmers</p>
        <button>Scroll to explore</button>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>12+</h3>
          <p>Crops Perfect for Your Region</p>
          <small>Based on your location & season</small>
        </div>
        <div className="stat-card">
          <h3>LKR 450/kg</h3>
          <p>Current Tomato Price in Colombo</p>
          <small>Live market data</small>
        </div>
        <div className="stat-card">
          <h3>LIVE 23</h3>
          <p>Active Harvest Requests</p>
          <small>5 new today</small>
        </div>
      </section>

      <section className="agribot">
        <h4>AgriBot <span className="online-badge">Online</span></h4>
        <div className="chat-bubble bot">Hello! How can I help you today?</div>
        <div className="chat-bubble user">What's the best time to plant tomatoes in Kandy?</div>
        <div className="chat-bubble bot">In Kandy, the best time to plant tomatoes is during the Yala season (April-September). The cooler climate is ideal for tomato cultivation.</div>
        <div className="chat-bubble user">What fertilizer should I use?</div>
        <div className="chat-bubble bot">AI-Powered Assistant</div>
      </section>

      <section className="assistant">
        <h2>Your 24/7 Agricultural Expert</h2>
        <p>Get instant answers to all your farming questions. Our AI chatbot provides expert guidance on crop cultivation, disease management, and best practices.</p>
        <ul className="feature-list">
          <li><span>🌱</span> Crop Techniques: Expert guidance on cultivation methods</li>
          <li><span>🛡️</span> Disease Detection: Identify and prevent crop diseases</li>
          <li><span>💧</span> Irrigation Advice: Optimize water usage for better yields</li>
          <li><span>🌿</span> Fertilizer Guidance: Get recommendations for soil nutrition</li>
        </ul>
        <button>Try AI Assistant</button>
      </section>

      <section className="selling">
        <h2>Choose Your Selling Strategy</h2>
        <p>Maximize your profits with flexible marketplace options</p>
        <div className="selling-cards">
          <div className="auction-card">
            <h3>HIGHEST BIDDER WINS</h3>
            <h4>Auction Your Harvest</h4>
            <ul>
              <li>Set your minimum price and let buyers compete</li>
              <li>Get the best possible price for your crops</li>
              <li>Transparent bidding process with real-time updates</li>
              <li>Secure payment upon auction completion</li>
            </ul>
            <Link to="/marketplaces">Start Auction</Link>
          </div>
          <div className="instant-sale-card">
            <h3>INSTANT SALE</h3>
            <h4>Sell at Best Market Price</h4>
            <h5>Live Market Prices (Tomatoes)</h5>
            <ul>
              <li>Colombo: LKR 450/kg</li>
              <li>Kandy: LKR 420/kg</li>
              <li>Galle: LKR 380/kg</li>
            </ul>
            <p>Compare prices across multiple markets</p>
            <p>Sell instantly at current market rates</p>
            <p>Real-time price updates every hour</p>
            <Link to="/marketplaces">View Markets</Link>
          </div>
        </div>
      </section>

      <section className="recommendations">
        <h2>Get Personalized Crop Recommendations</h2>
        <p>Our AI analyzes your location, climate, and planting season to suggest the most profitable crops for your farm</p>
        <ol className="steps-list">
          <li>Select Your Region: Choose your district or location (Kandy, Colombo, Galle...)</li>
          <li>Pick Planting Season: Select your preferred planting month (January, April, July...)</li>
          <li>Receive Smart Suggestions: Get AI-powered crop recommendations (Best crops for your conditions)</li>
        </ol>
        <button>Start Getting Recommendations</button>
      </section>

      <section className="inventory-preview">
        <h2>Track Every Harvest</h2>
        <p>Manage your inventory efficiently with our comprehensive tracking system. Monitor stock levels, active listings, and earnings all in one place.</p>
        <div className="stats">
          <div className="stat-card">
            <h3>2,450 kg</h3>
            <p>Total Stock</p>
          </div>
          <div className="stat-card">
            <h3>12</h3>
            <p>Active Listings</p>
          </div>
          <div className="stat-card">
            <h3>LKR 185,000</h3>
            <p>Revenue This Month</p>
          </div>
        </div>
        <Link to="/inventory">View Inventory</Link>
        <h3>Inventory Dashboard</h3>
        <ul>
          <li>Tomatoes: 850 kg In Stock</li>
          <li>Carrots: 620 kg Listed</li>
          <li>Cabbage: 480 kg In Stock</li>
          <li>Potatoes: 500 kg Listed</li>
        </ul>
      </section>

      <section className="testimonial">
        <blockquote>
          AgriConnect transformed my farming business. The AI recommendations helped me choose the right crops, and the marketplace feature allowed me to sell at the best prices. My income has increased by 40% in just three months!
        </blockquote>
        <p>Sunil Perera</p>
        <p>Farmer from Kandy</p>
        <p>Verified Farmer</p>
      </section>
    </main>
  );
}

export default Home;