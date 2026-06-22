import { useReducedMotion } from 'framer-motion'

interface ParkHeroProps {
  characterName: string
  characterSurname: string
  catchphrase: string
  tagline: string
  imageSrc: string
  imageAlt: string
  accentColor?: string
}

export default function ParkHero({
  characterName,
  characterSurname,
  catchphrase,
  tagline,
  imageSrc,
  imageAlt,
  accentColor = '#C8102E',
}: ParkHeroProps) {
  const shouldReduceMotion = useReducedMotion()
  const animate = !shouldReduceMotion

  // Character image — or dashed placeholder if artwork not yet supplied
  function CharacterImage({ className }: { className: string }) {
    if (imageSrc) {
      return (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={className}
          style={{ filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.28))' }}
        />
      )
    }
    return (
      <div
        className="flex flex-col items-center justify-center rounded-2xl"
        style={{
          width: 260,
          height: 380,
          background: 'rgba(255,255,255,0.55)',
          border: '2px dashed rgba(0,0,0,0.18)',
        }}
        role="img"
        aria-label={`${characterName} character artwork — placeholder`}
      >
        <span className="text-5xl mb-3">🐰</span>
        <p
          className="font-['Baloo_2',cursive] text-[#1A1A1A]/40 text-xs text-center px-4"
          style={{ lineHeight: 1.6 }}
        >
          {characterName} hero artwork
          <br />
          <code>public/characters/{characterName.toLowerCase()}-hero.png</code>
        </p>
      </div>
    )
  }

  return (
    <section
      aria-label={`${characterName} ${characterSurname} hero scene`}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '680px', backgroundColor: '#BFE9F7' }}
    >
      {/* === SKY === */}

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

      {/* === GROUND === */}
      {/* Dark green hill */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '38%', backgroundColor: '#0D4F2A', borderRadius: '80% 80% 0 0 / 40px 40px 0 0' }}
        aria-hidden="true"
      />
      {/* Grass strip */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '28%', backgroundColor: '#BFD76E', borderRadius: '60% 60% 0 0 / 30px 30px 0 0' }}
        aria-hidden="true"
      />

      {/* === MOBILE — character centred, text below === */}
      <div
        className="md:hidden absolute"
        style={{ bottom: '26%', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <CharacterImage className="h-[200px] w-auto" />
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
        <div
          className="font-['Baloo_2',cursive] font-extrabold mb-2"
          style={{ color: '#007A3D', fontSize: '1.75rem', lineHeight: 1, textShadow: '1px 1px 0 rgba(0,0,0,0.08)' }}
        >
          {characterSurname.toUpperCase()}
        </div>
        <p className="font-['Baloo_2',cursive] font-bold text-base text-[#1A1A1A] bg-white/70 px-2 py-1 rounded-lg">
          "{catchphrase}"
        </p>
      </div>

      {/* === DESKTOP — large character left, bold text upper-right (Duggee style) === */}

      {/* Character — top-anchored so head is always below the nav pill */}
      <div
        className="hidden md:block absolute"
        style={{ left: '2%', top: '14%', zIndex: 10 }}
      >
        <CharacterImage className="h-[380px] lg:h-[420px] xl:h-[460px] w-auto" />
      </div>

      {/* Text — vertically centred in the sky beside the character */}
      <div
        className="hidden md:flex absolute flex-col items-start text-left"
        style={{ right: '5%', top: '16%', zIndex: 10, maxWidth: '44%' }}
      >
        {/* First name — very large */}
        <div
          className="font-['Baloo_2',cursive] font-extrabold leading-none mb-1"
          style={{
            color: accentColor,
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            textShadow: '4px 4px 0 rgba(0,0,0,0.12)',
          }}
        >
          {characterName.toUpperCase()}
        </div>

        {/* Surname */}
        <div
          className="font-['Baloo_2',cursive] font-extrabold leading-none mb-6"
          style={{
            color: '#007A3D',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            textShadow: '3px 3px 0 rgba(0,0,0,0.1)',
          }}
        >
          {characterSurname.toUpperCase()}
        </div>

        {/* Catchphrase */}
        <p
          className="font-['Baloo_2',cursive] font-bold text-[#1A1A1A] bg-white/75 px-4 py-2 rounded-2xl mb-3"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
        >
          &ldquo;{catchphrase}&rdquo;
        </p>

        {/* Tagline */}
        <p
          className="font-['Nunito',sans-serif] text-[#1A1A1A]/80 bg-white/60 px-4 py-2 rounded-xl"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)' }}
        >
          {tagline}
        </p>
      </div>

      {/* Cloud drift animations */}
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
