import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

interface ParkHeroProps {
  characterName: string
  characterSurname?: string
  catchphrase: string
  tagline: string
  imageSrc: string
  imageAlt: string
  accentColor?: string
  /** When provided, switches to the solid-colour banner layout */
  bannerColor?: string
}

export default function ParkHero({
  characterName,
  catchphrase,
  tagline,
  imageSrc,
  imageAlt,
  accentColor = '#C8102E',
  bannerColor,
}: ParkHeroProps) {
  const shouldReduceMotion = useReducedMotion()
  const animate = !shouldReduceMotion

  // Sync body background to banner colour so the transparent 50px header spacer shows the right colour
  useEffect(() => {
    if (!bannerColor) return
    const prev = document.body.style.backgroundColor
    document.body.style.backgroundColor = bannerColor
    return () => { document.body.style.backgroundColor = prev }
  }, [bannerColor])

  // ─── shared character image ───────────────────────────────────────────────
  function CharacterImage({ className, style }: { className: string; style?: React.CSSProperties }) {
    if (imageSrc) {
      return <img src={imageSrc} alt={imageAlt} className={className} style={style} />
    }
    return (
      <div
        className={`${className} flex flex-col items-center justify-center rounded-2xl`}
        style={{ background: 'rgba(255,255,255,0.25)', border: '2px dashed rgba(255,255,255,0.35)' }}
        role="img"
        aria-label={`${characterName} character artwork — placeholder`}
      >
        <p className="font-['Baloo_2',cursive] text-white/50 text-xs text-center px-3" style={{ lineHeight: 1.6 }}>
          {characterName} artwork
          <br />
          <code>public/characters/{characterName.toLowerCase()}-header.png</code>
        </p>
      </div>
    )
  }

  // ─── BANNER MODE ──────────────────────────────────────────────────────────
  if (bannerColor) {
    // Cloud colour — white at low opacity for a soft mint effect
    const cloudStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
      position: 'absolute',
      backgroundColor: 'rgba(255,255,255,0.22)',
      borderRadius: 50,
      ...extra,
    })

    return (
      <section
        aria-label={`${characterName} hero banner`}
        className="relative w-full overflow-hidden"
        style={{ minHeight: 580, backgroundColor: bannerColor }}
      >
        {/* Clouds — half size, continuous multi-axis drift */}
        <div
          style={cloudStyle({
            width: 65, height: 26, top: '14%', left: '5%',
            boxShadow: '16px -5px 0 10px rgba(255,255,255,0.22), -11px 2px 0 8px rgba(255,255,255,0.22)',
            animation: animate ? 'cloudFloat1 18s ease-in-out infinite' : 'none',
          })}
          aria-hidden="true"
        />
        <div
          style={cloudStyle({
            width: 85, height: 30, top: '8%', left: '38%',
            boxShadow: '22px -6px 0 13px rgba(255,255,255,0.22), -16px 3px 0 10px rgba(255,255,255,0.22)',
            animation: animate ? 'cloudFloat2 24s ease-in-out infinite' : 'none',
          })}
          aria-hidden="true"
        />
        <div
          style={cloudStyle({
            width: 55, height: 22, top: '20%', right: '8%',
            boxShadow: '13px -5px 0 8px rgba(255,255,255,0.22), -10px 2px 0 6px rgba(255,255,255,0.22)',
            animation: animate ? 'cloudFloat3 28s ease-in-out infinite' : 'none',
          })}
          aria-hidden="true"
        />

        {/* PNG composition (contains text + character) — centred in the banner */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
          <CharacterImage
            className="h-full w-auto max-w-full"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <style>{`
          @keyframes cloudFloat1 {
            0%   { transform: translateX(0px) translateY(0px); }
            25%  { transform: translateX(28px) translateY(-7px); }
            50%  { transform: translateX(14px) translateY(5px); }
            75%  { transform: translateX(32px) translateY(-3px); }
            100% { transform: translateX(0px) translateY(0px); }
          }
          @keyframes cloudFloat2 {
            0%   { transform: translateX(0px) translateY(0px); }
            30%  { transform: translateX(-22px) translateY(6px); }
            55%  { transform: translateX(18px) translateY(-9px); }
            80%  { transform: translateX(-12px) translateY(4px); }
            100% { transform: translateX(0px) translateY(0px); }
          }
          @keyframes cloudFloat3 {
            0%   { transform: translateX(0px) translateY(0px); }
            35%  { transform: translateX(30px) translateY(5px); }
            60%  { transform: translateX(10px) translateY(-8px); }
            85%  { transform: translateX(24px) translateY(3px); }
            100% { transform: translateX(0px) translateY(0px); }
          }
        `}</style>
      </section>
    )
  }

  // ─── PARK MODE (default) ───────────────────────────────────────────────────

  function PhotoFrame({ size }: { size: 'sm' | 'lg' }) {
    const charW = size === 'lg' ? 'w-[210px] lg:w-[230px] xl:w-[255px]' : 'w-[140px]'
    return (
      <div
        style={{
          background: 'linear-gradient(145deg, #C8A96E 0%, #A0724A 30%, #7A5230 60%, #9B6A3E 100%)',
          borderRadius: 10,
          padding: size === 'lg' ? 14 : 9,
          boxShadow: '0 16px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.25)',
        }}
      >
        <div
          style={{
            borderRadius: 6,
            padding: size === 'lg' ? 3 : 2,
            background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.15) 100%)',
          }}
        >
          <div
            style={{
              background: '#FFFDF8',
              borderRadius: 4,
              padding: size === 'lg' ? 10 : 6,
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.18)',
            }}
          >
            <CharacterImage className={`${charW} h-auto block`} />
          </div>
        </div>
        <div
          style={{
            marginTop: size === 'lg' ? 10 : 6,
            textAlign: 'center',
            fontFamily: "'Baloo 2', cursive",
            fontWeight: 700,
            fontSize: size === 'lg' ? '0.65rem' : '0.5rem',
            letterSpacing: '0.14em',
            color: '#FFE9B0',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          THE RABBIT FAMILY
        </div>
      </div>
    )
  }

  return (
    <section
      aria-label={`${characterName} hero scene`}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '680px', backgroundColor: '#BFE9F7' }}
    >
      {/* Cloud 1 */}
      <div
        className="absolute top-12 left-[8%]"
        style={{
          width: 120, height: 50, borderRadius: 50,
          backgroundColor: 'white', opacity: 0.9,
          boxShadow: '30px -10px 0 20px white, -20px 5px 0 15px white',
          animation: animate ? 'cloudDrift1 18s ease-in-out infinite alternate' : 'none',
        }}
        aria-hidden="true"
      />
      {/* Cloud 2 */}
      <div
        className="absolute top-6 left-[40%]"
        style={{
          width: 160, height: 58, borderRadius: 50,
          backgroundColor: 'white', opacity: 0.85,
          boxShadow: '40px -12px 0 24px white, -30px 6px 0 18px white',
          animation: animate ? 'cloudDrift2 22s ease-in-out infinite alternate' : 'none',
        }}
        aria-hidden="true"
      />
      {/* Cloud 3 */}
      <div
        className="absolute top-16 right-[10%]"
        style={{
          width: 100, height: 44, borderRadius: 50,
          backgroundColor: 'white', opacity: 0.8,
          boxShadow: '24px -10px 0 16px white, -18px 5px 0 12px white',
          animation: animate ? 'cloudDrift1 25s ease-in-out infinite alternate-reverse' : 'none',
        }}
        aria-hidden="true"
      />

      {/* Dark green hill */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '38%', backgroundColor: '#0D4F2A', borderRadius: '80% 80% 0 0 / 40px 40px 0 0' }}
        aria-hidden="true"
      />
      {/* Grass strip */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '28%', backgroundColor: '#B5DBB4', borderRadius: '60% 60% 0 0 / 30px 30px 0 0' }}
        aria-hidden="true"
      />

      {/* Mobile — photo frame centred, text below */}
      <div
        className="md:hidden absolute"
        style={{ top: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <PhotoFrame size="sm" />
      </div>
      <div
        className="md:hidden absolute left-0 right-0 flex flex-col items-center text-center px-4"
        style={{ bottom: '2%', zIndex: 20 }}
      >
        <div
          className="font-['Baloo_2',cursive] font-extrabold"
          style={{ color: accentColor, fontSize: '2.5rem', lineHeight: 1, textShadow: '2px 2px 0 rgba(0,0,0,0.12)' }}
        >
          {characterName.toUpperCase()}
        </div>
        <p className="font-['Baloo_2',cursive] font-bold text-base text-[#1A1A1A] bg-white/70 px-2 py-1 rounded-lg">
          "{catchphrase}"
        </p>
      </div>

      {/* Desktop — photo frame right, bold text left */}
      <div
        className="hidden md:block absolute"
        style={{ right: '5%', top: '10%', zIndex: 10 }}
      >
        <PhotoFrame size="lg" />
      </div>
      <div
        className="hidden md:flex absolute flex-col items-start text-left"
        style={{ left: '5%', top: '10%', zIndex: 10, maxWidth: '44%' }}
      >
        <div
          className="font-['Baloo_2',cursive] font-extrabold leading-none mb-1"
          style={{ color: accentColor, fontSize: 'clamp(4rem, 8vw, 7rem)', textShadow: '4px 4px 0 rgba(0,0,0,0.12)' }}
        >
          {characterName.toUpperCase()}
        </div>
        <p
          className="font-['Baloo_2',cursive] font-bold text-[#1A1A1A] bg-white/75 px-4 py-2 rounded-2xl mb-3"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
        >
          &ldquo;{catchphrase}&rdquo;
        </p>
        <p
          className="font-['Nunito',sans-serif] text-[#1A1A1A]/80 bg-white/60 px-4 py-2 rounded-xl"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)' }}
        >
          {tagline}
        </p>
      </div>

      <style>{`
        @keyframes cloudDrift1 {
          0%   { transform: translateX(0px); }
          100% { transform: translateX(18px); }
        }
        @keyframes cloudDrift2 {
          0%   { transform: translateX(0px); }
          100% { transform: translateX(-14px); }
        }
      `}</style>
    </section>
  )
}
