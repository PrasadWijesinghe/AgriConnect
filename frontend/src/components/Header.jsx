import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">🌿</span> AgriConnect
      </div>
      <nav>
        <ul>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/crop-recommendations" className={isActive('/crop-recommendations')}>Crop Recommendations</Link></li>
          <li><Link to="/marketplaces" className={isActive('/marketplaces')}>Marketplaces</Link></li>
          <li><Link to="/harvest-requests" className={isActive('/harvest-requests')}>Harvest Requests</Link></li>
          <li><Link to="/inventory" className={isActive('/inventory')}>Inventory</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;