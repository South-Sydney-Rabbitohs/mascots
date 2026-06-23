import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/shared/SkipLink'

interface ColouringCard {
  id: string
  title: string
  description: string
  emoji: string
  bg: string
  accent: string
  characterId?: string
}

const CARDS: ColouringCard[] = [
  {
    id: 'colour-reggie',
    title: 'Colour in Reggie',
    description: 'Grab your red and green pencils and bring Grandpa Reggie to life!',
    emoji: '🖍️',
    bg: 'linear-gradient(150deg,#56C45E 0%,#007A3D 100%)',
    accent: '#007A3D',
    characterId: 'reggie',
  },
  {
    id: 'colour-scarlett',
    title: 'Colour in Scarlett',
    description: "Scarlett loves colour as much as she loves footy — show us what you've got!",
    emoji: '🖍️',
    bg: 'linear-gradient(150deg,#FA623E 0%,#C8102E 100%)',
    accent: '#C8102E',
    characterId: 'scarlett',
  },
  {
    id: 'colour-jack',
    title: 'Colour in Jack',
    description: 'Fast on the field, fast with the pencils — colour in Jack at full speed!',
    emoji: '🖍️',
    bg: 'linear-gradient(150deg,#046F6A 0%,#024846 100%)',
    accent: '#046F6A',
    characterId: 'jack',
  },
  {
    id: 'colour-ruby',
    title: 'Colour in Ruby',
    description: 'Calm, cool and full of heart — make Ruby shine in your favourite colours!',
    emoji: '🖍️',
    bg: 'linear-gradient(150deg,#E56381 0%,#C8102E 100%)',
    accent: '#C8102E',
    characterId: 'ruby',
  },
  {
    id: 'colour-oliver',
    title: 'Colour in Oliver',
    description: "Oliver's the youngest Rabbit and he's full of energy — colour him in!",
    emoji: '🖍️',
    bg: 'linear-gradient(150deg,#5C4B48 0%,#372B29 100%)',
    accent: '#372B29',
    characterId: 'oliver',
  },
  {
    id: 'colour-family',
    title: 'The Rabbit Family',
    description: 'All five Bunnies together! Can you colour in the whole Rabbit Family?',
    emoji: '🏠',
    bg: 'linear-gradient(150deg,#C8102E 0%,#51319C 100%)',
    accent: '#51319C',
  },
  {
    id: 'colour-game-day',
    title: 'Game Day at the Ground',
    description: "It's match day at the SCG! Colour in the scene and cheer the Rabbitohs home.",
    emoji: '🏟️',
    bg: 'linear-gradient(150deg,#FFD54F 0%,#F57F17 100%)',
    accent: '#E65100',
  },
  {
    id: 'colour-burrow',
    title: 'Welcome to the Burrow',
    description: "Step inside the Bunnies' home. Add your own colours to make it feel like yours!",
    emoji: '🐇',
    bg: 'linear-gradient(150deg,#9575CD 0%,#51319C 100%)',
    accent: '#51319C',
  },
  {
    id: 'colour-footy-heroes',
    title: 'Footy Heroes',
    description: "Reggie and Jack are on the field together. Can you colour in their big moment?",
    emoji: '🏉',
    bg: 'linear-gradient(150deg,#42A5F5 0%,#1565C0 100%)',
    accent: '#1565C0',
  },
]

function ColourCard({ card }: { card: ColouringCard }) {
  return (
    <article className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white h-full">
      <div className="relative flex items-center justify-center overflow-hidden" style={{ background: card.bg, minHeight: 220 }}>
        <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-10 -right-10" aria-hidden="true" />
        <div className="absolute w-24 h-24 rounded-full bg-white/10 -bottom-6 -left-6" aria-hidden="true" />
        <div className="absolute w-16 h-16 rounded-full bg-white/10 top-4 left-8" aria-hidden="true" />
        <div className="absolute top-3 right-3 bg-white/90 font-['Baloo_2',cursive] font-bold text-[10px] uppercase tracking-widest text-[#C8102E] px-3 py-1 rounded-full shadow-sm">
          Coming Soon
        </div>
        <span
          className="relative z-10 select-none"
          style={{ fontSize: 96, lineHeight: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}
          role="img"
          aria-hidden="true"
        >
          {card.emoji}
        </span>
      </div>
      <div className="flex flex-col items-center text-center px-6 py-6 flex-1">
        <h3
          className="font-['Baloo_2',cursive] font-extrabold text-base md:text-lg uppercase tracking-wide mb-2"
          style={{ color: card.accent }}
        >
          {card.title}
        </h3>
        <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/65 text-sm leading-relaxed mb-5 flex-1">
          {card.description}
        </p>
        <button
          onClick={() => alert(`${card.title} — colouring sheet coming soon! Check back soon for more Burrow Bunnies fun.`)}
          className="font-['Baloo_2',cursive] font-bold text-sm text-white px-7 py-2.5 rounded-full shadow-md hover:opacity-90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D]"
          style={{ backgroundColor: '#0D4F2A' }}
          aria-label={`Download PDF — ${card.title}`}
        >
          Download PDF
        </button>
      </div>
    </article>
  )
}

export default function ColourInPage() {
  useEffect(() => {
    const prev = document.body.style.backgroundColor
    document.body.style.backgroundColor = '#BFD76E'
    return () => { document.body.style.backgroundColor = prev }
  }, [])

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <section
          aria-labelledby="colouring-heading"
          className="py-16 px-4"
          style={{ backgroundColor: '#BFD76E' }}
        >
          <div className="max-w-5xl mx-auto">
            <Link
              to="/#activities"
              className="inline-flex items-center gap-2 font-['Baloo_2',cursive] font-semibold text-sm text-[#0D4F2A] mb-8 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D] rounded"
            >
              ← Back to Activities
            </Link>

            <div className="text-center mb-10">
              <h1
                id="colouring-heading"
                className="font-extrabold text-4xl md:text-5xl text-[#0D4F2A] mb-2"
              >
                Colour In!
              </h1>
              <p className="font-['Nunito',sans-serif] text-[#0D4F2A]/80 text-base md:text-lg">
                Download and print your favourite characters — then grab your pencils and get colouring!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CARDS.map((card) => (
                <ColourCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
