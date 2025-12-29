import { Link } from 'react-router-dom';

function Marketplaces() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="rounded-3xl bg-white px-8 py-10 shadow-xl ring-1 ring-gray-100 text-center">
        <p className="mb-3 inline-flex rounded-full bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-green-700">Sell Smart</p>
        <h1 className="text-4xl font-extrabold text-gray-900">Marketplaces</h1>
        <p className="mt-3 text-lg text-gray-600">Choose your selling strategy - auction your harvest or sell at real-time market prices.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button className="rounded-full bg-gradient-to-r from-green-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">Create Auction</button>
          <Link to="/harvest-requests" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-50">View Requests</Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700">Bidding Marketplace</button>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 hover:bg-gray-50">Real-Time Market</button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Active Auctions</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="font-semibold text-green-700">Tomatoes</span>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">2 hours left</span>
            </div>
            <div className="mt-3 space-y-1 text-gray-700">
              <p><strong>Quantity:</strong> 500 kg</p>
              <p><strong>Min Price:</strong> LKR 400/kg</p>
              <p><strong>Current Bid:</strong> LKR 480/kg</p>
              <p><strong>Total Bids:</strong> 12</p>
              <p className="text-sm text-gray-500">Sunil Perera • Kandy</p>
            </div>
            <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Place Bid</button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="font-semibold text-green-700">Carrots</span>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">5 hours left</span>
            </div>
            <div className="mt-3 space-y-1 text-gray-700">
              <p><strong>Quantity:</strong> 300 kg</p>
              <p><strong>Min Price:</strong> LKR 200/kg</p>
              <p><strong>Current Bid:</strong> LKR 250/kg</p>
              <p><strong>Total Bids:</strong> 8</p>
              <p className="text-sm text-gray-500">Nimal Silva • Colombo</p>
            </div>
            <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Place Bid</button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="font-semibold text-green-700">Cabbage</span>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">1 hour left</span>
            </div>
            <div className="mt-3 space-y-1 text-gray-700">
              <p><strong>Quantity:</strong> 400 kg</p>
              <p><strong>Min Price:</strong> LKR 150/kg</p>
              <p><strong>Current Bid:</strong> LKR 180/kg</p>
              <p><strong>Total Bids:</strong> 15</p>
              <p className="text-sm text-gray-500">Kamala Fernando • Galle</p>
            </div>
            <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Place Bid</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Marketplaces;