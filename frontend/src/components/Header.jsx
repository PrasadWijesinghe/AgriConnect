import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUser, FaArrowRightFromBracket } from 'react-icons/fa6';
import assets from '../assets/assets';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('agriUser');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('agriUser');
    setIsLoggedIn(false);
    setUser(null);
    setShowProfileMenu(false);
    navigate('/');
  };

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
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-green-700 font-semibold text-base shadow-md hover:bg-white/95 hover:shadow-lg transition-all duration-200"
              >
                <FaUser className="h-5 w-5" />
                <span className="capitalize">{user?.role}</span>
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="font-semibold text-gray-800">{user?.name}</p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                  >
                    <FaArrowRightFromBracket className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="px-6 py-2.5 rounded-full bg-white text-green-700 font-semibold text-base shadow-md hover:bg-white/95 hover:shadow-lg transition-all duration-200">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;