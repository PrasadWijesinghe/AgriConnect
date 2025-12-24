function Inventory() {
  return (
    <main className="page inventory-page">
      <h1>Inventory & Earnings</h1>
      <p>Manage your harvest inventory and track your earnings</p>
      
      <div className="stats">
        <div className="stat-card"><h3>2,450 kg</h3><p>Total Stock</p></div>
        <div className="stat-card"><h3>12</h3><p>Active Listings</p></div>
        <div className="stat-card"><h3>LKR 185,000</h3><p>Revenue This Month</p></div>
      </div>
      
      <button>Add Item</button>
      
      <h2>Current Inventory</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Location</th>
            <th>Harvest Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tomatoes</td>
            <td>850 kg</td>
            <td>In Stock</td>
            <td>Warehouse A</td>
            <td>2025-01-15</td>
            <td><button>Manage</button></td>
          </tr>
          <tr>
            <td>Carrots</td>
            <td>620 kg</td>
            <td>Listed</td>
            <td>Warehouse B</td>
            <td>2025-01-18</td>
            <td><button>Manage</button></td>
          </tr>
          <tr>
            <td>Cabbage</td>
            <td>480 kg</td>
            <td>In Stock</td>
            <td>Warehouse A</td>
            <td>2025-01-20</td>
            <td><button>Manage</button></td>
          </tr>
          <tr>
            <td>Potatoes</td>
            <td>500 kg</td>
            <td>Listed</td>
            <td>Warehouse C</td>
            <td>2025-01-12</td>
            <td><button>Manage</button></td>
          </tr>
          <tr>
            <td>Green Beans</td>
            <td>320 kg</td>
            <td>In Stock</td>
            <td>Warehouse B</td>
            <td>2025-01-22</td>
            <td><button>Manage</button></td>
          </tr>
          <tr>
            <td>Bell Peppers</td>
            <td>280 kg</td>
            <td>Listed</td>
            <td>Warehouse A</td>
            <td>2025-01-19</td>
            <td><button>Manage</button></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Inventory;