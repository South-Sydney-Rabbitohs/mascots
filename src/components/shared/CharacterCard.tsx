import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Character } from '@/data/characters'
import CharacterPlaceholder from './CharacterPlaceholder'

interface CharacterCardProps {
  character: Character
  variant?: 'home' | 'family'
  index?: number
}

export default function CharacterCard({ character, variant = 'home', index = 0 }: CharacterCardProps) {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.08 } },
  }

  const cardContent = (
    <div
      className={`relative rounded-3xl overflow-hidden bg-white shadow-md group
        ${variant === 'home' ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-200' : ''}
        ${!character.available ? 'opacity-90' : ''}
      `}
    >
      {/* Image area */}
      <div
        className={`relative ${variant === 'home' ? 'h-52' : 'h-40'} w-full overflow-hidden`}
        style={{ backgroundColor: character.accentColor + '22' }}
      >
        {character.cardImage ? (
          <img
            src={character.cardImage}
            alt={`${character.firstName} ${character.lastName}`}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <CharacterPlaceholder
            name={character.firstName}
            className="w-full h-full"
            accentColor={character.accentColor}
          />
        )}

        {/* Coming soon badge */}
        {!character.available && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-[#FFD54F] text-[#C8102E] font-['Baloo_2',cursive] font-bold text-sm px-3 py-1 rounded-full">
              Coming Soon!
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="p-4">
        <div className="text-2xl mb-1">{character.emoji}</div>
        <h3 className="font-['Baloo_2',cursive] font-bold text-[#51319C] text-lg leading-tight">
          {character.firstName} {character.lastName}
        </h3>
        <p className="text-sm text-[#1A1A1A]/70 font-['Nunito',sans-serif] mt-1 line-clamp-2">
          {character.tagline}
        </p>

        {character.available && variant === 'family' && (
          <p className="mt-2 text-xs font-bold text-[#1788DF] font-['Baloo_2',cursive] uppercase tracking-wide">
            Learn More →
          </p>
        )}
        {character.available && variant === 'home' && (
          <p className="mt-2 text-xs font-bold text-[#1788DF] font-['Baloo_2',cursive] uppercase tracking-wide">
            Meet {character.firstName} →
          </p>
        )}
      </div>
    </div>
  )

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {character.available ? (
        <Link
          to={`/characters/${character.slug}`}
          className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D] rounded-3xl"
          aria-label={`Meet ${character.firstName} ${character.lastName}`}
        >
          {cardContent}
        </Link>
      ) : (
        <div aria-label={`${character.firstName} ${character.lastName} — coming soon`}>
          {cardContent}
        </div>
      )}
    </motion.div>
  )
}
