import { Link } from 'react-router-dom';

function Marketplaces() {
  return (
    <main className="marketplaces-page">
      <section className="marketplaces-hero">
        <h1>Marketplaces</h1>
        <p>Choose your selling strategy - auction your harvest or sell at real-time market prices</p>
        <button className="create-auction-btn">Create Auction</button>
      </section>

      <section className="marketplaces-tabs">
        <div className="tabs">
          <button className="tab active">Bidding Marketplace</button>
          <button className="tab">Real-Time Market</button>
        </div>
      </section>

      <section className="active-auctions">
        <h2>Active Auctions</h2>
        <div className="auctions-list">
          <div className="auction-item">
            <h3>Tomatoes</h3>
            <p className="time-left">2 hours left</p>
            <p><strong>Quantity:</strong> 500 kg</p>
            <p><strong>Min Price:</strong> LKR 400/kg</p>
            <p><strong>Current Bid:</strong> LKR 480/kg</p>
            <p><strong>Total Bids:</strong> 12</p>
            <p className="seller">Sunil Perera • Kandy</p>
            <button className="bid-btn">Place Bid</button>
          </div>

          <div className="auction-item">
            <h3>Carrots</h3>
            <p className="time-left">5 hours left</p>
            <p><strong>Quantity:</strong> 300 kg</p>
            <p><strong>Min Price:</strong> LKR 200/kg</p>
            <p><strong>Current Bid:</strong> LKR 250/kg</p>
            <p><strong>Total Bids:</strong> 8</p>
            <p className="seller">Nimal Silva • Colombo</p>
            <button className="bid-btn">Place Bid</button>
          </div>

          <div className="auction-item">
            <h3>Cabbage</h3>
            <p className="time-left">1 hour left</p>
            <p><strong>Quantity:</strong> 400 kg</p>
            <p><strong>Min Price:</strong> LKR 150/kg</p>
            <p><strong>Current Bid:</strong> LKR 180/kg</p>
            <p><strong>Total Bids:</strong> 15</p>
            <p className="seller">Kamala Fernando • Galle</p>
            <button className="bid-btn">Place Bid</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Marketplaces;