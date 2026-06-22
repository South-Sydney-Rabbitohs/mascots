import { Link } from 'react-router-dom'

// TODO: Jetpack CMS integration — replace static links with dynamic content

export default function Footer() {
  return (
    <footer className="bg-[#0D4F2A] text-white py-12 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#C8102E] text-xl">🐰</span>
            </div>
            <div>
              <p className="font-['Baloo_2',cursive] font-bold text-white text-base leading-none">
                Burrow Bunnies
              </p>
              <p className="font-['Nunito',sans-serif] text-[#FFD54F] text-xs mt-0.5">
                South Sydney Rabbitohs
              </p>
            </div>
          </div>
          <p className="font-['Nunito',sans-serif] text-white/70 text-sm leading-relaxed">
            A family-safe digital experience brought to you by the South Sydney Rabbitohs.
            Glory glory to South Sydney!
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-['Baloo_2',cursive] font-bold text-[#FFD54F] text-base mb-3">
            Explore
          </h3>
          <ul className="space-y-2 font-['Nunito',sans-serif] text-sm text-white/80">
            <li><Link to="/" className="hover:text-[#FFD54F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD54F] rounded">Home</Link></li>
            <li><Link to="/characters/reggie" className="hover:text-[#FFD54F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD54F] rounded">Meet Reggie Rabbit</Link></li>
            <li><Link to="/characters/jack" className="hover:text-[#FFD54F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD54F] rounded">Meet Jack Rabbit</Link></li>
            <li><a href="/#activities" className="hover:text-[#FFD54F] transition-colors">Activities</a></li>
            <li><a href="/#colouring" className="hover:text-[#FFD54F] transition-colors">Colour In</a></li>
            <li><a href="/#healthy-living" className="hover:text-[#FFD54F] transition-colors">Healthy Living</a></li>
          </ul>
        </div>

        {/* Parents & Legal */}
        <div>
          <h3 className="font-['Baloo_2',cursive] font-bold text-[#FFD54F] text-base mb-3">
            Parents &amp; Guardians
          </h3>
          <ul className="space-y-2 font-['Nunito',sans-serif] text-sm text-white/80 mb-4">
            <li><a href="/#parents-zone" className="hover:text-[#FFD54F] transition-colors">Parents Zone</a></li>
            <li><a href="https://www.rabbitohs.com.au/privacy" className="hover:text-[#FFD54F] transition-colors">Privacy Policy</a></li>
            <li><a href="https://www.rabbitohs.com.au" className="hover:text-[#FFD54F] transition-colors">Rabbitohs.com.au</a></li>
          </ul>

          {/* Social placeholders */}
          <div className="flex gap-3" aria-label="Social media links">
            {[
              { label: 'Facebook', icon: '📘' },
              { label: 'Instagram', icon: '📷' },
              { label: 'TikTok', icon: '🎵' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={`Visit our ${s.label} page`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm"
              >
                <span role="img" aria-hidden="true">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/20 text-center">
        <p className="font-['Nunito',sans-serif] text-xs text-white/50">
          © {new Date().getFullYear()} South Sydney Football Club Ltd. All rights reserved.
          Burrow Bunnies is a family-safe digital experience.
          Content is suitable for children aged 6–14 and their families.
          No personal data is collected from children without parental consent.
        </p>
      </div>
    </footer>
  )
}
