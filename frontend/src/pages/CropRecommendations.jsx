import ChatBot from '../components/ChatBot';
import { FaLocationDot, FaCalendarDays, FaWandMagicSparkles } from 'react-icons/fa6';

function CropRecommendations() {
  return (
    <main className="bg-gradient-to-br from-gray-50 to-green-50/30 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 mb-4">
            Crop Recommendations
          </span>
          <h1 className="text-5xl font-black text-gray-900 mb-4">Smart Crop Recommendations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get AI-powered suggestions for the most profitable crops based on your location and planting season
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-gray-100">
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* Location Dropdown */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                <FaLocationDot className="text-green-600" />
                Select Your Location
              </label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-700 bg-white transition-colors">
                <option value="">Choose your district...</option>
                <option value="colombo">Colombo</option>
                <option value="kandy">Kandy</option>
                <option value="galle">Galle</option>
                <option value="jaffna">Jaffna</option>
                <option value="anuradhapura">Anuradhapura</option>
                <option value="kurunegala">Kurunegala</option>
                <option value="matara">Matara</option>
                <option value="badulla">Badulla</option>
                <option value="nuwara-eliya">Nuwara Eliya</option>
              </select>
            </div>

            {/* Planting Month Dropdown */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                <FaCalendarDays className="text-green-600" />
                Select Planting Month
              </label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-700 bg-white transition-colors">
                <option value="">Choose planting month...</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-teal-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <FaWandMagicSparkles />
            Get Recommendations
          </button>
        </div>
      </div>

      <ChatBot />
    </main>
  );
}

export default CropRecommendations;