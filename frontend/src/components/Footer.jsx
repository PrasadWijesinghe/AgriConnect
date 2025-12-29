import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {
  const links = {
    Platform: ['Crop Recommendations', 'AI Chatbot', 'Marketplaces', 'Harvest Requests', 'Inventory'],
    Resources: ['Help Center', 'Tutorials', 'Market Reports', 'Blog'],
    Community: ['Success Stories', 'Forums', 'Events', 'Partners'],
  };

  return (
    <footer className="mt-16 bg-[#16a34a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl">🌿</span>
              <span>AgriConnect</span>
            </div>
            <p className="text-sm text-white/90">
              Empowering farmers with technology to grow smarter, sell better, and earn more.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="space-y-3">
              <h3 className="text-base font-semibold">{title}</h3>
              <ul className="space-y-2 text-sm text-white/90">
                {items.map((item) => (
                  <li key={item} className="cursor-pointer transition hover:text-white">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/90">
          <div className="flex items-center gap-4">
            <span>© 2025 AgriConnect. All rights reserved.</span>
            <div className="flex items-center gap-3 text-lg">
              <a aria-label="Facebook" className="transition hover:text-white" href="#"><FaFacebookF /></a>
              <a aria-label="X" className="transition hover:text-white" href="#"><FaXTwitter /></a>
              <a aria-label="Instagram" className="transition hover:text-white" href="#"><FaInstagram /></a>
              <a aria-label="YouTube" className="transition hover:text-white" href="#"><FaYoutube /></a>
            </div>
          </div>
          <span className="text-white/90">Powered by Readdy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;