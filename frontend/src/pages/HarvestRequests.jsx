import { useMemo } from 'react';
import { Link } from 'react-router-dom';

function HarvestRequests() {
  const user = useMemo(() => {
    try {
      const token = localStorage.getItem('authToken');
      const rawUser = localStorage.getItem('agriUser');
      if (!token || !rawUser) return null;
      return JSON.parse(rawUser);
    } catch {
      return null;
    }
  }, []);

  if (!user) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="rounded-3xl bg-white px-8 py-10 shadow-xl ring-1 ring-gray-100">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-600">Marketplace</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900">Get Your Requests</h1>
          <p className="mt-3 text-gray-600">Sign in to view buyer harvest requests and respond with your available harvest.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { title: 'Step 1', text: 'Sign in to your account' },
              { title: 'Step 2', text: 'Browse open and urgent requests' },
              { title: 'Step 3', text: 'Respond with your quantity & price' },
              { title: 'Step 4', text: 'Confirm delivery and complete the deal' },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-100">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{s.title}</p>
                <p className="mt-2 text-sm font-semibold text-gray-800">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/login"
              className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
            >
              Sign In to Get Requests
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="rounded-3xl bg-white px-8 py-10 shadow-xl ring-1 ring-gray-100">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">Marketplace</p>
            <h1 className="text-4xl font-extrabold text-gray-900">Harvest Requests</h1>
            <p className="text-gray-600">Browse buyer requests and respond with your available harvest.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700">All Requests</button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 hover:bg-gray-50">Urgent</button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 hover:bg-gray-50">Open</button>
            <span className="ml-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">6 requests available</span>
          </div>
        </div>
      </section>

      <section id="requests" className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">OPEN</span>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">Tomatoes</h3>
          <p className="text-sm font-semibold text-gray-500">Green Valley Supermarket</p>
          <div className="mt-3 space-y-1 text-gray-700">
            <p><strong>Quantity:</strong> 1000 kg</p>
            <p><strong>Price Range:</strong> LKR 400-450/kg</p>
            <p><strong>Location:</strong> Colombo</p>
            <p><strong>Deadline:</strong> 3 days</p>
            <p className="text-sm text-gray-600"><strong>Requirements:</strong> Grade A quality, organic preferred</p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Respond to Request</button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">OPEN</span>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">Carrots</h3>
          <p className="text-sm font-semibold text-gray-500">Fresh Foods Ltd</p>
          <div className="mt-3 space-y-1 text-gray-700">
            <p><strong>Quantity:</strong> 500 kg</p>
            <p><strong>Price Range:</strong> LKR 250-280/kg</p>
            <p><strong>Location:</strong> Kandy</p>
            <p><strong>Deadline:</strong> 5 days</p>
            <p className="text-sm text-gray-600"><strong>Requirements:</strong> Medium to large size, fresh harvest</p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Respond to Request</button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
          <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">URGENT</span>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">Cabbage</h3>
          <p className="text-sm font-semibold text-gray-500">Organic Market Co</p>
          <div className="mt-3 space-y-1 text-gray-700">
            <p><strong>Quantity:</strong> 800 kg</p>
            <p><strong>Price Range:</strong> LKR 170-200/kg</p>
            <p><strong>Location:</strong> Galle</p>
            <p><strong>Deadline:</strong> 2 days</p>
            <p className="text-sm text-gray-600"><strong>Requirements:</strong> Certified organic, no pesticides</p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Respond to Request</button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">OPEN</span>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">Potatoes</h3>
          <p className="text-sm font-semibold text-gray-500">Hotel Paradise</p>
          <div className="mt-3 space-y-1 text-gray-700">
            <p><strong>Quantity:</strong> 600 kg</p>
            <p><strong>Price Range:</strong> LKR 300-330/kg</p>
            <p><strong>Location:</strong> Colombo</p>
            <p><strong>Deadline:</strong> 7 days</p>
            <p className="text-sm text-gray-600"><strong>Requirements:</strong> Uniform size, clean and dry</p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Respond to Request</button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">OPEN</span>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">Green Beans</h3>
          <p className="text-sm font-semibold text-gray-500">City Grocers</p>
          <div className="mt-3 space-y-1 text-gray-700">
            <p><strong>Quantity:</strong> 300 kg</p>
            <p><strong>Price Range:</strong> LKR 180-220/kg</p>
            <p><strong>Location:</strong> Kandy</p>
            <p><strong>Deadline:</strong> 4 days</p>
            <p className="text-sm text-gray-600"><strong>Requirements:</strong> Fresh, tender beans, no damage</p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Respond to Request</button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
          <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">URGENT</span>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">Bell Peppers</h3>
          <p className="text-sm font-semibold text-gray-500">Export Foods Inc</p>
          <div className="mt-3 space-y-1 text-gray-700">
            <p><strong>Quantity:</strong> 400 kg</p>
            <p><strong>Price Range:</strong> LKR 350-400/kg</p>
            <p><strong>Location:</strong> Colombo</p>
            <p><strong>Deadline:</strong> 1 day</p>
            <p className="text-sm text-gray-600"><strong>Requirements:</strong> Export quality, mixed colors</p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700">Respond to Request</button>
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => document.getElementById('requests')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
        >
          Get Requests
        </button>
      </div>
    </main>
  );
}

export default HarvestRequests;