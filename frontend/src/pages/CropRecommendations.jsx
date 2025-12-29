import { Link } from 'react-router-dom'; 

function CropRecommendations() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="rounded-3xl bg-white px-8 py-12 shadow-xl ring-1 ring-gray-100 text-center">
        <p className="mb-4 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">AI Agronomy Toolkit</p>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Get Personalized Crop Recommendations</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Our AI analyzes your location, climate, and planting season to suggest the most profitable crops for your farm.</p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-green-50 p-6 shadow-lg ring-1 ring-gray-100">
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white text-lg font-bold">1</div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Select Your Region</h3>
          <p className="text-gray-600">Choose your district or location.</p>
          <p className="mt-3 text-sm text-gray-500">Examples: Kandy, Colombo, Galle...</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg ring-1 ring-gray-100">
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white text-lg font-bold">2</div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Pick Planting Season</h3>
          <p className="text-gray-600">Select your preferred planting month.</p>
          <p className="mt-3 text-sm text-gray-500">Examples: January, April, July...</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-emerald-50 p-6 shadow-lg ring-1 ring-gray-100">
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white text-lg font-bold">3</div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Receive Smart Suggestions</h3>
          <p className="text-gray-600">Get AI-powered crop recommendations tailored to your conditions.</p>
          <p className="mt-3 text-sm text-gray-500">Best crops for your soil and climate.</p>
        </div>
      </section>

      <section className="mt-12 flex justify-center">
        <Link
          to="/ai-chatbot"
          className="rounded-full bg-gradient-to-r from-green-600 to-teal-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          Start Getting Recommendations
        </Link>
      </section>
    </main>
  );
}

export default CropRecommendations;