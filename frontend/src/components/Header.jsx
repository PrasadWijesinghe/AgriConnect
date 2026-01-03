import { Link, useLocation } from 'react-router-dom';
import assets from '../assets/assets';

function Header() {
  const location = useLocation();

  const navLinkClass = (path) => {
    const active = location.pathname === path;
    return [
      'px-5 py-2.5 rounded-full text-base font-semibold transition-colors duration-200',
      active
        ? 'bg-white text-green-700 shadow-md'
        : 'text-white/90 hover:text-white hover:bg-white/10',
    ].join(' ');
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-700 to-teal-600 text-white shadow-lg">
      <div className="flex items-center justify-between px-[7%] py-5">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-wide">
          <img src={assets.Logo} alt="AgriConnect Logo" className="h-12 w-12 object-contain" />
          <span>AgriConnect</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-3">
              <li><Link to="/" className={navLinkClass('/')}>Home</Link></li>
              <li><Link to="/crop-recommendations" className={navLinkClass('/crop-recommendations')}>Crop Recommendations</Link></li>
              <li><Link to="/marketplaces" className={navLinkClass('/marketplaces')}>Marketplaces</Link></li>
              <li><Link to="/harvest-requests" className={navLinkClass('/harvest-requests')}>Harvest Requests</Link></li>
              <li><Link to="/inventory" className={navLinkClass('/inventory')}>Inventory</Link></li>
            </ul>
          </nav>
          <Link to="/login" className="px-6 py-2.5 rounded-full bg-white text-green-700 font-semibold text-base shadow-md hover:bg-white/95 hover:shadow-lg transition-all duration-200">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;