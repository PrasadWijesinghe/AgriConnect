import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarDays, FaLocationDot, FaWandMagicSparkles, FaLayerGroup, FaChartLine, FaBell } from 'react-icons/fa6';
import assets from '../assets/assets';

function Home() {
  return (
    <main>
      <section className="text-center py-20 px-[5%] bg-gradient-to-br from-black/40 to-blue-500/25 text-white flex flex-col justify-center items-center min-h-[80vh] relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${assets.bg_home})` }}>
        
        <h1 className="text-7xl font-black mb-8 drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)] tracking-wide leading-tight">Grow Smarter<br/>Sell Better<br/>Earn More</h1>
        <p className="text-3xl mb-12 drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)] font-medium max-w-[700px]">AI-powered crop recommendations and real-time market intelligence for modern farmers</p>
        <div className="flex gap-8 justify-center flex-wrap mb-12">
          <Link to="/crop-recommendations" className="inline-block py-5 px-11 rounded-full font-bold no-underline transition-all duration-[400ms] text-lg tracking-wide border-0 cursor-pointer bg-gradient-to-br from-green-600 to-teal-500 text-white shadow-[0_10px_25px_rgba(40,167,69,0.35)] hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(40,167,69,0.45)]">Get Crop Recommendations →</Link>
          <Link to="/marketplaces" className="inline-block py-5 px-11 rounded-full font-bold no-underline transition-all duration-[400ms] text-lg tracking-wide border-0 cursor-pointer bg-white/15 text-white border-2 border-white/50 shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:bg-white/25 hover:border-white/80 hover:-translate-y-2">Explore Marketplace</Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="m-0 text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Scroll to explore</p>
          <span className="text-2xl font-bold">↓</span>
        </div>
      </section>

      
      <section className="relative isolate overflow-hidden bg-[#fef6e8] px-[5%] py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="mx-auto w-full max-w-[380px] flex-shrink-0 lg:mx-0">
            <div className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-4 ring-black/5 overflow-hidden rotate-[-2deg]">
              <img src={assets.phone_sc} alt="AgriBot chat preview" className="h-auto w-full object-cover" />
            </div>
          </div>

          <div className="w-full space-y-6 text-left">
            <span className="inline-flex items-center gap-3 rounded-full bg-green-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-green-800 shadow-sm">AI-Powered Assistant</span>
            <h2 className="font-black text-4xl leading-tight text-[#0f172a] sm:text-5xl">Your 24/7 Agricultural Expert</h2>
            <p className="max-w-2xl text-lg text-gray-700">Get instant answers to all your farming questions. Our AI chatbot provides expert guidance on crop cultivation, disease management, and best practices.</p>

            <div className="grid gap-5 sm:grid-cols-2">
              {[{
                icon: '🌱', title: 'Crop Techniques', desc: 'Expert guidance on cultivation methods',
              }, {
                icon: '🛡️', title: 'Disease Detection', desc: 'Identify and prevent crop diseases',
              }, {
                icon: '💧', title: 'Irrigation Advice', desc: 'Optimize water usage for better yields',
              }, {
                icon: '🥼', title: 'Fertilizer Guidance', desc: 'Recommendations for soil nutrition',
              }].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-[0_8px_25px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl">
              <span className="text-xl">▶</span>
              Try AI Assistant
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] text-center">
        <h2 className="text-5xl text-blue-500 mb-10 font-extrabold tracking-wide">Choose Your Selling Strategy</h2>
        <p className="text-xl mb-8">Maximize your profits with flexible marketplace options</p>
        <div className="flex gap-14 justify-center flex-wrap my-10">
          <div className="bg-white py-14 px-12 rounded-[22px] shadow-[0_12px_35px_rgba(0,0,0,0.12)] w-[45%] min-w-[400px] text-left border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(0,0,0,0.15)]">
            <h3 className="text-yellow-500 text-xl uppercase tracking-wide mb-2">HIGHEST BIDDER WINS</h3>
            <h4 className="text-3xl mb-6">Auction Your Harvest</h4>
            <ul className="my-6 space-y-4">
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Set your minimum price and let buyers compete</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Get the best possible price for your crops</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Transparent bidding process with real-time updates</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Secure payment upon auction completion</span></li>
            </ul>
            <Link to="/marketplaces" className="inline-block bg-gradient-to-br from-green-600 to-teal-500 text-white py-4 px-12 rounded-full font-bold no-underline mt-8 transition-all duration-[400ms] shadow-[0_8px_20px_rgba(40,167,69,0.35)] border-0 cursor-pointer tracking-wide hover:bg-gradient-to-br hover:from-green-700 hover:to-teal-600 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(40,167,69,0.45)]">Start Auction</Link>
          </div>
          <div className="bg-white py-14 px-12 rounded-[22px] shadow-[0_12px_35px_rgba(0,0,0,0.12)] w-[45%] min-w-[400px] text-left border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(0,0,0,0.15)]">
            <h3 className="text-yellow-500 text-xl uppercase tracking-wide mb-2">INSTANT SALE</h3>
            <h4 className="text-3xl mb-6">Sell at Best Market Price</h4>
            <h5 className="text-xl font-semibold mb-4">Live Market Prices (Tomatoes)</h5>
            <ul className="my-6 space-y-4">
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Colombo: LKR 450/kg</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Kandy: LKR 420/kg</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Galle: LKR 380/kg</span></li>
            </ul>
            <p className="my-2">Compare prices across multiple markets</p>
            <p className="my-2">Sell instantly at current market rates</p>
            <p className="my-2">Real-time price updates every hour</p>
            <Link to="/marketplaces" className="inline-block bg-gradient-to-br from-green-600 to-teal-500 text-white py-4 px-12 rounded-full font-bold no-underline mt-8 transition-all duration-[400ms] shadow-[0_8px_20px_rgba(40,167,69,0.35)] border-0 cursor-pointer tracking-wide hover:bg-gradient-to-br hover:from-green-700 hover:to-teal-600 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(40,167,69,0.45)]">View Markets</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] text-center">
        <h2 className="mb-4 text-5xl font-black leading-tight text-[#0f172a]">Get Personalized Crop Recommendations</h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">Our AI analyzes your location, climate, and planting season to suggest the most profitable crops for your farm</p>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Select Your Region',
              desc: 'Choose your district or location',
              hint: 'Kandy, Colombo, Galle...',
              icon: <FaLocationDot className="text-3xl" />,
            },
            {
              title: 'Pick Planting Season',
              desc: 'Select your preferred planting month',
              hint: 'January, April, July...',
              icon: <FaCalendarDays className="text-3xl" />,
            },
            {
              title: 'Receive Smart Suggestions',
              desc: 'Get AI-powered crop recommendations',
              hint: 'Best crops for your conditions',
              icon: <FaWandMagicSparkles className="text-3xl" />,
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[26px] bg-[#eefaf2] p-8 text-center shadow-[0_12px_30px_rgba(0,0,0,0.06)] ring-1 ring-[#d8f3e3]"
            >
              <span className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-bold text-green-700 shadow">{idx + 1}</span>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-green-500 to-green-600 text-white shadow-[0_10px_25px_rgba(16,185,129,0.35)]">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
              <div className="w-full">
                <div className="mx-auto inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-inner ring-1 ring-[#d8f3e3]">
                  {item.hint}
                </div>
              </div>
              {idx < 2 && (
                <span className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-2xl text-green-500 lg:block">
                  <FaArrowRight />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/crop-recommendations"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Start Getting Recommendations
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="py-16 px-[5%] bg-gradient-to-r from-[#f4fbf6] to-[#eef7ff]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="relative rounded-[28px] bg-white/60 shadow-[0_18px_60px_rgba(0,0,0,0.12)] overflow-hidden ring-1 ring-green-50">
            <img src={assets.image1} alt="Greenhouse inventory tracking" className="h-full w-full object-cover" />

    

          
          </div>

          <div className="space-y-5">
            <h2 className="text-5xl font-black leading-tight text-[#0f172a]">Track Every Harvest</h2>
            <p className="text-lg text-gray-700 max-w-xl">Take complete control of your agricultural inventory with powerful analytics, real-time tracking, and intelligent insights that help you maximize profits.</p>

            {[{
              title: 'Real-Time Tracking',
              desc: 'Monitor your inventory levels instantly across all storage locations with live updates.',
              icon: <FaLayerGroup />,
              tint: 'from-green-500 to-emerald-500',
            },{
              title: 'Multi-Location',
              desc: 'Manage inventory across multiple farms and storage facilities seamlessly',
              icon: <FaLocationDot />,
              tint: 'from-blue-500 to-purple-500',
            },
            , {
              title: 'Smart Analytics',
              desc: 'Get powerful insights on your best-performing crops and revenue trends.',
              icon: <FaChartLine />,
              tint: 'from-amber-500 to-orange-500',
            }, {
              title: 'Auto Alerts',
              desc: 'Receive instant notifications when stock runs low or market prices peak.',
              icon: <FaBell />,
              tint: 'from-red-500 to-indigo-500',
            }].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-[18px] bg-white/80 px-5 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.tint} text-white text-xl`}>
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="m-0 text-lg font-semibold text-gray-900">{item.title}</p>
                  <p className="m-0 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-16">
        <div className="mx-auto max-w-5xl rounded-[26px] bg-gradient-to-r from-emerald-500 to-teal-500 px-10 py-14 text-center text-white shadow-[0_22px_55px_rgba(0,0,0,0.18)]">
          <h3 className="text-4xl font-black mb-4">Ready to Optimize Your Inventory?</h3>
          <p className="text-lg opacity-90 mb-10">Join thousands of farmers who are already maximizing their profits with smart inventory management.</p>
          <Link to="/inventory" className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-lg font-semibold text-emerald-600 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
            Start Managing Inventory
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="max-w-[900px] my-16 mx-auto p-12 bg-gradient-to-br from-green-50 to-green-100 rounded-[22px] shadow-[0_12px_35px_rgba(40,167,69,0.15)] text-2xl italic text-left border-l-[5px] border-green-600">
        <blockquote>
          AgriConnect transformed my farming business. The AI recommendations helped me choose the right crops, and the marketplace feature allowed me to sell at the best prices. My income has increased by 40% in just three months!
        </blockquote>
        <p className="text-right not-italic font-semibold mt-6">Sunil Perera</p>
        <p className="text-right not-italic font-semibold mt-6">Farmer from Kandy</p>
        <p className="text-right not-italic font-semibold mt-6">Verified Farmer</p>
      </section>
    </main>
  );
}

export default Home;