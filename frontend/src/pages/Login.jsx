import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa6';
import assets from '../assets/assets';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('farmer');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const syncAuthFromStorage = () => {
    try {
      const token = localStorage.getItem('authToken');
      const rawUser = localStorage.getItem('agriUser');
      if (!token || !rawUser) {
        setLoggedInUser(null);
        return;
      }

      const parsedUser = JSON.parse(rawUser);
      if (parsedUser && typeof parsedUser === 'object') {
        setLoggedInUser(parsedUser);
      } else {
        setLoggedInUser(null);
      }
    } catch {
      setLoggedInUser(null);
    }
  };

  useEffect(() => {
    syncAuthFromStorage();

    const onFocus = () => syncAuthFromStorage();
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') syncAuthFromStorage();
    };
    // Handles browser back/forward cache restores (Safari/Chrome)
    const onPageShow = () => syncAuthFromStorage();

    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pageshow', onPageShow);

    return () => {
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pageshow', onPageShow);
    };
    // location.key changes on navigation, ensuring re-sync when returning to /login
  }, [location.key]);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include',
        });

        if (!response.ok) {
          const errorData = await response.json();
          setErrors({ submit: errorData.message || 'Login failed. Please try again.' });
          return;
        }

        const data = await response.json();
        
        // Store token and user info
        localStorage.setItem('authToken', data.token);
        const userToStore = {
          _id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
        };
        localStorage.setItem('agriUser', JSON.stringify(userToStore));
        setLoggedInUser(userToStore);
        window.dispatchEvent(new Event('agri-auth-changed'));
        setErrors({});
        setEmail('');
        setPassword('');
        navigate('/');
      } catch {
        setErrors({ submit: 'Login failed. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('agriUser');
    setLoggedInUser(null);
    setEmail('');
    setPassword('');
    setErrors({});
    window.dispatchEvent(new Event('agri-auth-changed'));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4 py-12 relative"
      style={{ backgroundImage: `url(${assets.bg_home})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>

      <div className="max-w-md w-full bg-green-50/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 relative z-10 transform transition-all duration-300 hover:shadow-3xl my-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 border-2 border-green-300 rounded-full mb-4 shadow-lg">
            <img src={assets.Logo} alt="AgriConnect Logo" className="h-16 w-16 object-contain" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent leading-snug">
            AgriConnect
          </h1>
          <p className="text-gray-600 mt-2 font-medium">Welcome Back</p>
          <p className="text-gray-500 text-sm">Where Farmers Meet Buyers</p>
        </div>

        {errors.submit && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
            {errors.submit}
          </div>
        )}

        {!loggedInUser ? (
          <>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-800 mb-3">I am a</label>
                <div className="flex gap-3">
                  {[
                    { value: 'farmer', label: 'Farmer', emoji: '🚜' },
                    { value: 'buyer', label: 'Buyer', emoji: '🛒' },
                  ].map((option) => (
                    <label key={option.value} className="flex-1 relative cursor-pointer">
                      <input
                        type="radio"
                        value={option.value}
                        checked={role === option.value}
                        onChange={(e) => setRole(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-3 rounded-xl text-center border-2 transition-all duration-200 ${
                          role === option.value
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 bg-gray-50 hover:border-green-300'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{option.emoji}</span>
                        <span className="text-sm font-medium text-gray-700">{option.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      errors.email
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                        : 'border-gray-200 bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Password</label>
                <div className="relative group">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: '' });
                    }}
                    className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      errors.password
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                        : 'border-gray-200 bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                    }`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-xs font-medium text-green-600 hover:text-green-700 transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="flex items-center gap-3 my-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-xs text-gray-500">NEW USER?</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <Link
              to="/signup"
              className="w-full block text-center py-3 rounded-xl font-semibold text-green-600 border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-all duration-200"
            >
              Create an Account
            </Link>
          </>
        ) : (
          <div className="mt-2 rounded-2xl border-2 border-green-200 bg-green-50 p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                <FaUser className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">Profile</p>
                <p className="text-sm text-gray-700 mt-1 truncate">{loggedInUser.name || 'User'}</p>
                <p className="text-xs text-gray-600 truncate">{loggedInUser.email}</p>
                <p className="text-xs text-gray-600 mt-1">
                  Role: <span className="font-medium text-gray-700">{loggedInUser.role}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                type="button"
                onClick={() => navigate('/harvest-requests')}
                className="py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="py-3 rounded-xl font-semibold text-green-700 border-2 border-green-200 bg-white hover:bg-green-100 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}