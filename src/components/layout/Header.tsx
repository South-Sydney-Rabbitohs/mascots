import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'
import RabbitIcon from '@/components/shared/RabbitIcon'

const navLinks = [
  { label: 'Characters', href: '/#characters' },
  { label: 'Activities', href: '/#activities' },
  { label: 'Colour In', href: '/colouring' },
  { label: 'Healthy Living', href: '/#healthy-living' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const menuVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : -8, transition: { duration: 0.15 } },
  }

  return (
    <header className="sticky top-0 z-40" role="banner">
      {/* 50px transparent gap — reveals sky/cloud background above the nav pill */}
      <div className="h-[50px]" aria-hidden="true" />

      {/* Nav pill — 70% wide, centred */}
      <div className="flex justify-center px-4">
        <div
          className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl h-16 flex items-center justify-between px-6 gap-4"
          style={{ width: '70%' }}
        >
          {/* Logo — overflows the pill above and below intentionally */}
          <Link
            to="/"
            className="relative z-10 flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white rounded-lg"
            aria-label="Burrow Bunnies — Home"
            onClick={() => setMenuOpen(false)}
          >
            <RabbitIcon className="h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={clsx(
                  'font-["Baloo_2",cursive] font-semibold text-sm text-[#1A1A1A] px-3 py-2 rounded-lg',
                  'hover:bg-black/10 transition-colors duration-150 min-h-[44px] flex items-center',
                  'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D]',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger only */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 rounded-lg text-[#1A1A1A] hover:bg-black/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D]"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown — aligned to the pill */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-label="Mobile navigation"
            className="md:hidden flex justify-center px-4 mt-2"
          >
            <div
              className="bg-white/70 backdrop-blur-md border border-white/60 shadow-lg rounded-xl py-3 px-4"
              style={{ width: '70%' }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-['Baloo_2',cursive] font-semibold text-[#1A1A1A] py-3 border-b border-black/10 hover:text-[#C8102E] transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
