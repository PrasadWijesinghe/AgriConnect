function HarvestRequests() {
  return (
    <main className="harvest-requests-page">
      <section className="harvest-hero">
        <h1>Harvest Requests</h1>
        <p>Browse buyer requests and respond with your available harvest</p>
        
        <div className="filters">
          <button className="filter-btn active">All Requests</button>
          <button className="filter-btn">Urgent</button>
          <button className="filter-btn">Open</button>
          <span className="request-count">6 requests available</span>
        </div>
      </section>

      <section className="requests-list">
        <div className="request-card">
          <span className="status open">OPEN</span>
          <h3>Tomatoes</h3>
          <p className="buyer">Green Valley Supermarket</p>
          <p><strong>Quantity:</strong> 1000 kg</p>
          <p><strong>Price Range:</strong> LKR 400-450/kg</p>
          <p><strong>Location:</strong> Colombo</p>
          <p><strong>Deadline:</strong> 3 days</p>
          <p className="requirements"><strong>Requirements:</strong> Grade A quality, organic preferred</p>
          <button className="respond-btn">Respond to Request</button>
        </div>

        <div className="request-card">
          <span className="status open">OPEN</span>
          <h3>Carrots</h3>
          <p className="buyer">Fresh Foods Ltd</p>
          <p><strong>Quantity:</strong> 500 kg</p>
          <p><strong>Price Range:</strong> LKR 250-280/kg</p>
          <p><strong>Location:</strong> Kandy</p>
          <p><strong>Deadline:</strong> 5 days</p>
          <p className="requirements"><strong>Requirements:</strong> Medium to large size, fresh harvest</p>
          <button className="respond-btn">Respond to Request</button>
        </div>

        <div className="request-card">
          <span className="status urgent">URGENT</span>
          <h3>Cabbage</h3>
          <p className="buyer">Organic Market Co</p>
          <p><strong>Quantity:</strong> 800 kg</p>
          <p><strong>Price Range:</strong> LKR 170-200/kg</p>
          <p><strong>Location:</strong> Galle</p>
          <p><strong>Deadline:</strong> 2 days</p>
          <p className="requirements"><strong>Requirements:</strong> Certified organic, no pesticides</p>
          <button className="respond-btn">Respond to Request</button>
        </div>

        <div className="request-card">
          <span className="status open">OPEN</span>
          <h3>Potatoes</h3>
          <p className="buyer">Hotel Paradise</p>
          <p><strong>Quantity:</strong> 600 kg</p>
          <p><strong>Price Range:</strong> LKR 300-330/kg</p>
          <p><strong>Location:</strong> Colombo</p>
          <p><strong>Deadline:</strong> 7 days</p>
          <p className="requirements"><strong>Requirements:</strong> Uniform size, clean and dry</p>
          <button className="respond-btn">Respond to Request</button>
        </div>

        <div className="request-card">
          <span className="status open">OPEN</span>
          <h3>Green Beans</h3>
          <p className="buyer">City Grocers</p>
          <p><strong>Quantity:</strong> 300 kg</p>
          <p><strong>Price Range:</strong> LKR 180-220/kg</p>
          <p><strong>Location:</strong> Kandy</p>
          <p><strong>Deadline:</strong> 4 days</p>
          <p className="requirements"><strong>Requirements:</strong> Fresh, tender beans, no damage</p>
          <button className="respond-btn">Respond to Request</button>
        </div>

        <div className="request-card">
          <span className="status urgent">URGENT</span>
          <h3>Bell Peppers</h3>
          <p className="buyer">Export Foods Inc</p>
          <p><strong>Quantity:</strong> 400 kg</p>
          <p><strong>Price Range:</strong> LKR 350-400/kg</p>
          <p><strong>Location:</strong> Colombo</p>
          <p><strong>Deadline:</strong> 1 day</p>
          <p className="requirements"><strong>Requirements:</strong> Export quality, mixed colors</p>
          <button className="respond-btn">Respond to Request</button>
        </div>
      </section>
    </main>
  );
}

export default HarvestRequests;