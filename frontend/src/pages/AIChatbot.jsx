function AIChatbot() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Your 24/7 AI Agricultural Expert</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Get instant answers on crop cultivation, disease management, irrigation, fertilizers, and more.</p>
      </section>

      <section className="mt-12 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-green-600 font-semibold">AgriBot</p>
            <p className="text-xl font-bold text-gray-900">Live Chat Preview</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Online
          </span>
        </div>

        <div className="space-y-4">
          <div className="max-w-[80%] rounded-2xl bg-green-50 px-5 py-4 text-gray-800 shadow-sm">Hello! How can I help you today?</div>
          <div className="ml-auto max-w-[80%] rounded-2xl bg-blue-50 px-5 py-4 text-gray-800 shadow-sm">What's the best time to plant tomatoes in Kandy?</div>
          <div className="max-w-[80%] rounded-2xl bg-green-50 px-5 py-4 text-gray-800 shadow-sm">In Kandy, the best time is during the Yala season (April-September). The cooler climate is ideal.</div>
          <div className="ml-auto max-w-[80%] rounded-2xl bg-blue-50 px-5 py-4 text-gray-800 shadow-sm">What fertilizer should I use?</div>
          <div className="max-w-[80%] rounded-2xl bg-green-50 px-5 py-4 text-gray-800 shadow-sm">For tomatoes, use a balanced NPK fertilizer with higher potassium to boost flowering and fruiting.</div>
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <button className="rounded-full bg-gradient-to-r from-green-600 to-teal-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">Start Chatting Now</button>
      </div>
    </main>
  );
}

export default AIChatbot;