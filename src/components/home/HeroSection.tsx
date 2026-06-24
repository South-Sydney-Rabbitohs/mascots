import { useEffect } from 'react'

export default function HeroSection() {
  useEffect(() => {
    const prev = document.body.style.backgroundColor
    document.body.style.backgroundColor = '#E3FCE2'
    return () => { document.body.style.backgroundColor = prev }
  }, [])

  return (
    <section
      aria-label="Meet the Rabbit Family"
      className="relative overflow-hidden md:min-h-[520px]"
      style={{ backgroundColor: '#E3FCE2' }}
    >
      {/* ── Field background image — bottom 50% of section ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '50%',
          backgroundImage: 'url(/hero-field-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* ── Fade overlay: #E3FCE2 at top → transparent ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #E3FCE2 0%, #E3FCE2 12%, rgba(227,252,226,0.7) 35%, transparent 62%)',
        }}
        aria-hidden="true"
      />

      {/* ── Family PNG ── */}
      <div className="relative z-10 flex justify-center items-end md:min-h-[520px]">
        <img
          src="/meet-the-family.png"
          alt="Meet the Rabbit Family — Reggie, Scarlett, Jack, Ruby and Oliver standing together"
          className="w-full"
          style={{ maxWidth: 860 }}
        />
      </div>
    </section>
  )
}
