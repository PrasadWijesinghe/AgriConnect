function Inventory() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="flex flex-col gap-3 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900">Inventory & Earnings</h1>
        <p className="text-gray-600">Manage your harvest inventory and track your earnings.</p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100">
          <h3 className="text-3xl font-extrabold text-green-600">2,450 kg</h3>
          <p className="text-sm font-semibold text-gray-600">Total Stock</p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100">
          <h3 className="text-3xl font-extrabold text-green-600">12</h3>
          <p className="text-sm font-semibold text-gray-600">Active Listings</p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100">
          <h3 className="text-3xl font-extrabold text-green-600">LKR 185,000</h3>
          <p className="text-sm font-semibold text-gray-600">Revenue This Month</p>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button className="rounded-full bg-gradient-to-r from-green-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">Add Item</button>
      </div>

      <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Current Inventory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-3 text-left">Crop</th>
                <th className="px-6 py-3 text-left">Quantity</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Harvest Date</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {[
                { crop: 'Tomatoes', qty: '850 kg', status: 'In Stock', location: 'Warehouse A', date: '2025-01-15' },
                { crop: 'Carrots', qty: '620 kg', status: 'Listed', location: 'Warehouse B', date: '2025-01-18' },
                { crop: 'Cabbage', qty: '480 kg', status: 'In Stock', location: 'Warehouse A', date: '2025-01-20' },
                { crop: 'Potatoes', qty: '500 kg', status: 'Listed', location: 'Warehouse C', date: '2025-01-12' },
                { crop: 'Green Beans', qty: '320 kg', status: 'In Stock', location: 'Warehouse B', date: '2025-01-22' },
                { crop: 'Bell Peppers', qty: '280 kg', status: 'Listed', location: 'Warehouse A', date: '2025-01-19' },
              ].map((row) => (
                <tr key={row.crop} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">{row.crop}</td>
                  <td className="px-6 py-4">{row.qty}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${row.status === 'Listed' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{row.location}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">
                    <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-50">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Inventory;