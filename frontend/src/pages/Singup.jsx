import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCheck } from 'react-icons/fa6';
import assets from '../assets/assets';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('farmer');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!phone) newErrors.phone = 'Phone is required';
    if (phone && !/^[\d\s\-\+()]{10,}$/.test(phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!password) newErrors.password = 'Password is required';
    if (password && password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        const user = { name, email, phone, role };
        localStorage.setItem('agriUser', JSON.stringify(user));
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate('/login');
      } catch (error) {
        setErrors({ submit: 'Signup failed. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4 py-8 relative" style={{ backgroundImage: `url(${assets.bg_home})` }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
      
      <div className="max-w-md w-full bg-green-50/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative z-10 transform transition-all duration-300 hover:shadow-3xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 border-2 border-green-300 rounded-full mb-4 shadow-lg">
            <img src={assets.Logo} alt="AgriConnect Logo" className="h-16 w-16 object-contain" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent leading-snug">Join AgriConnect</h1>
          <p className="text-gray-600 mt-2 font-medium">Create your account today</p>
          <p className="text-gray-500 text-sm">Start connecting with farmers & buyers</p>
        </div>

        {errors.submit && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-800 mb-3">I am a</label>
            <div className="flex gap-3">
              {[
                { value: 'farmer', label: 'Farmer', emoji: '🚜' },
                { value: 'buyer', label: 'Buyer', emoji: '🛒' }
              ].map(option => (
                <label key={option.value} className="flex-1 relative cursor-pointer">
                  <input
                    type="radio"
                    value={option.value}
                    checked={role === option.value}
                    onChange={(e) => setRole(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-xl text-center border-2 transition-all duration-200 ${
                    role === option.value
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 bg-gray-50 hover:border-green-300'
                  }`}>
                    <span className="text-2xl block mb-1">{option.emoji}</span>
                    <span className="text-sm font-medium text-gray-700">{option.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                  errors.name
                    ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                    : 'border-gray-200 bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                }`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
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
            <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
            <div className="relative group">
              <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                  errors.phone
                    ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                    : 'border-gray-200 bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                }`}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
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
                placeholder="Min. 6 characters"
              />
            </div>
            <div className="mt-2 flex items-center gap-2">
              {password.length >= 6 ? (
                <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                  <FaCheck className="text-xs" /> Strong password
                </div>
              ) : password.length > 0 ? (
                <p className="text-gray-500 text-xs">At least 6 characters required</p>
              ) : null}
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
              required
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the <a href="#" className="text-green-600 font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 font-semibold hover:underline">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500">ALREADY REGISTERED?</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Link
          to="/login"
          className="w-full block text-center py-3 rounded-xl font-semibold text-green-600 border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-all duration-200"
        >
          Login to Your Account
        </Link>
      </div>
    </div>
  );
}