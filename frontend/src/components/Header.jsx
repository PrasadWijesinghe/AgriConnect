import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const navLinkClass = (path) => {
    const active = location.pathname === path;
    return [
      'px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200',
      active
        ? 'bg-white text-green-700 shadow-md'
        : 'text-white/80 hover:text-white hover:bg-white/10',
    ].join(' ');
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-700 to-teal-600 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-bold tracking-wide">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl">🌿</span>
          <span>AgriConnect</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-2">
            <li><Link to="/" className={navLinkClass('/')}>Home</Link></li>
            <li><Link to="/crop-recommendations" className={navLinkClass('/crop-recommendations')}>Crop Recommendations</Link></li>
            <li><Link to="/marketplaces" className={navLinkClass('/marketplaces')}>Marketplaces</Link></li>
            <li><Link to="/harvest-requests" className={navLinkClass('/harvest-requests')}>Harvest Requests</Link></li>
            <li><Link to="/inventory" className={navLinkClass('/inventory')}>Inventory</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;