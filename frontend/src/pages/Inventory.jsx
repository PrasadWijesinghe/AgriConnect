import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

function Inventory() {
  const makeId = () => {
    try {
      // Most modern browsers
      return crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    } catch {
      return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }
  };

  const readUserFromStorage = () => {
    try {
      const token = localStorage.getItem('authToken');
      const rawUser = localStorage.getItem('agriUser');
      if (!token || !rawUser) return null;
      return JSON.parse(rawUser);
    } catch {
      return null;
    }
  };

  const [user, setUser] = useState(() => readUserFromStorage());

  useEffect(() => {
    const sync = () => setUser(readUserFromStorage());

    sync();
    window.addEventListener('agri-auth-changed', sync);
    window.addEventListener('storage', sync);
    window.addEventListener('focus', sync);
    window.addEventListener('pageshow', sync);

    return () => {
      window.removeEventListener('agri-auth-changed', sync);
      window.removeEventListener('storage', sync);
      window.removeEventListener('focus', sync);
      window.removeEventListener('pageshow', sync);
    };
  }, []);

  const storageKey = user?._id ? `agriInventory:${user._id}` : null;

  const [items, setItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ crop: '', qty: '', status: 'In Stock', date: '', pricePerKg: '' });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    // Ensure inventory UI/data always matches the currently logged-in user.
    let cancelled = false;

    const run = () => {
      if (cancelled) return;

      if (!user || user.role !== 'farmer' || !storageKey) {
        setItems([]);
        setIsFormOpen(false);
        setEditingId(null);
        setFormError('');
        return;
      }

      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            setItems(parsed);
            return;
          }
        }

        // First-time seed for this farmer
        setItems([
          { id: makeId(), crop: 'Tomatoes', qty: '850 kg', status: 'In Stock', date: '2025-01-15' },
          { id: makeId(), crop: 'Carrots', qty: '620 kg', status: 'Listed', date: '2025-01-18' },
          { id: makeId(), crop: 'Cabbage', qty: '480 kg', status: 'In Stock', date: '2025-01-20' },
        ]);
      } catch {
        setItems([]);
      }
    };

    queueMicrotask(run);

    return () => {
      cancelled = true;
    };
  }, [storageKey, user]);

  const parseKg = (qtyText) => {
    if (!qtyText) return 0;
    const match = String(qtyText).match(/\d+(?:\.\d+)?/);
    if (!match) return 0;
    const value = Number(match[0]);
    return Number.isFinite(value) ? value : 0;
  };

  const totalStockKg = useMemo(() => items.reduce((sum, it) => sum + parseKg(it.qty), 0), [items]);
  const activeListings = useMemo(() => items.filter((it) => it.status === 'Listed').length, [items]);
  const revenueThisMonth = useMemo(() => {
    return items
      .filter((it) => it.status === 'Listed')
      .reduce((sum, it) => {
        const kg = parseKg(it.qty);
        const price = Number(it.pricePerKg) || 0;
        return sum + kg * price;
      }, 0);
  }, [items]);

  const formatNumber = (value) => new Intl.NumberFormat('en-US').format(value);
  const formatLkr = (value) => `LKR ${new Intl.NumberFormat('en-US').format(Math.round(value))}`;

  useEffect(() => {
    if (!user || user.role !== 'farmer' || !storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {
      // ignore storage failures
    }
  }, [items, storageKey, user]);

  // Logged-out guide (must be after hooks)
  if (!user) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="rounded-3xl bg-white px-8 py-10 shadow-xl ring-1 ring-gray-100">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-600">Inventory</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900">Show Your Inventory</h1>
          <p className="mt-3 text-gray-600">Sign in as a farmer to add, edit, and delete your inventory items.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { title: 'Step 1', text: 'Sign in to your farmer account' },
              { title: 'Step 2', text: 'Add your harvest items (crop, qty, date)' },
              { title: 'Step 3', text: 'List items with a price if needed' },
              { title: 'Step 4', text: 'Track stock, listings, and earnings' },
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
              Sign In to Show Inventory
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const openAdd = () => {
    setFormError('');
    setEditingId(null);
    setForm({ crop: '', qty: '', status: 'In Stock', date: '', pricePerKg: '' });
    setIsFormOpen(true);
  };

  const openEdit = (item) => {
    setFormError('');
    setEditingId(item.id);
    setForm({
      crop: item.crop,
      qty: item.qty,
      status: item.status,
      date: item.date,
      pricePerKg: item.pricePerKg ?? '',
    });
    setIsFormOpen(true);
  };

  const saveItem = () => {
    setFormError('');

    const crop = form.crop.trim();
    const qty = form.qty.trim();
    const date = form.date;
    const status = form.status;
    const pricePerKg = form.pricePerKg === '' ? '' : Number(form.pricePerKg);

    if (!crop) return setFormError('Crop is required');
    if (!qty) return setFormError('Quantity is required');
    if (!date) return setFormError('Harvest date is required');
    if (form.pricePerKg !== '' && !Number.isFinite(pricePerKg)) return setFormError('Price must be a number');

    if (editingId) {
      setItems((prev) =>
        prev.map((it) => (it.id === editingId ? { ...it, crop, qty, status, date, pricePerKg } : it))
      );
    } else {
      const id = makeId();
      setItems((prev) => [{ id, crop, qty, status, date, pricePerKg }, ...prev]);
    }

    setIsFormOpen(false);
    setEditingId(null);
  };

  const deleteItem = (id) => {
    if (!window.confirm('Delete this item?')) return;
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  // If logged-in user is a buyer, show a simple access message
  if (user && user.role !== 'farmer') {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl bg-white p-10 shadow-xl ring-1 ring-gray-100 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Inventory is for Farmers</h1>
          <p className="mt-3 text-gray-600">Your account is a buyer account, so you can’t access inventory management.</p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="rounded-full bg-linear-to-r from-green-600 to-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="flex flex-col gap-3 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900">Inventory & Earnings</h1>
        <p className="text-gray-600">Manage your harvest inventory and track your earnings.</p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100">
          <h3 className="text-3xl font-extrabold text-green-600">{formatNumber(totalStockKg)} kg</h3>
          <p className="text-sm font-semibold text-gray-600">Total Stock</p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100">
          <h3 className="text-3xl font-extrabold text-green-600">{activeListings}</h3>
          <p className="text-sm font-semibold text-gray-600">Active Listings</p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100">
          <h3 className="text-3xl font-extrabold text-green-600">{formatLkr(revenueThisMonth)}</h3>
          <p className="text-sm font-semibold text-gray-600">Revenue This Month</p>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button
          onClick={openAdd}
          className="rounded-full bg-linear-to-r from-green-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Add Item
        </button>
      </div>

      {isFormOpen && (
        <section className="mt-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-gray-900">{editingId ? 'Edit Item' : 'Add Item'}</h2>
            <p className="text-sm text-gray-600">Only visible to your farmer account.</p>
          </div>

          {formError && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {formError}
            </div>
          )}

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Crop</label>
              <input
                value={form.crop}
                onChange={(e) => setForm((p) => ({ ...p, crop: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="e.g., Tomatoes"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
              <input
                value={form.qty}
                onChange={(e) => setForm((p) => ({ ...p, qty: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="e.g., 200 kg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price (LKR/kg)</label>
              <input
                type="number"
                min="0"
                step="1"
                value={form.pricePerKg}
                onChange={(e) => setForm((p) => ({ ...p, pricePerKg: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="optional"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option>In Stock</option>
                <option>Listed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Harvest Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => {
                setIsFormOpen(false);
                setEditingId(null);
                setFormError('');
              }}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={saveItem}
              className="rounded-full bg-linear-to-r from-green-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Save
            </button>
          </div>
        </section>
      )}

      <section id="inventory-table" className="mt-6 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
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
                <th className="px-6 py-3 text-left">Harvest Date</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {items.length === 0 ? (
                <tr>
                  <td className="px-6 py-10 text-center text-gray-500" colSpan={5}>
                    No items yet. Click “Add Item” to create one.
                  </td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.crop}</td>
                    <td className="px-6 py-4">{row.qty}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          row.status === 'Listed' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{row.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(row)}
                          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-50"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteItem(row.id)}
                          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-red-600 ring-1 ring-red-200 transition hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => document.getElementById('inventory-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
        >
          Show Your Inventory
        </button>
      </div>
    </main>
  );
}

export default Inventory;