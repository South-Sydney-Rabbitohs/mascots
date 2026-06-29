import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Character } from '@/data/characters'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui, characterZh } from '@/i18n/translations'

interface CharacterCardProps {
  character: Character
  variant?: 'home' | 'family'
  index?: number
  compact?: boolean
}

export default function CharacterCard({ character, variant = 'home', index = 0, compact = false }: CharacterCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const { lang } = useLanguage()
  const t = ui[lang].character
  const zh = characterZh[character.id]
  const tagline = lang === 'zh' && zh ? zh.tagline : character.tagline

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.08 } },
  }

  // Home variant — character bust overflows above coloured card
  if (variant === 'home') {
    const inner = (
      <div className="relative" style={{ paddingTop: compact ? 50 : 90 }}>
        {/* Character image — overflows above card */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-10 pointer-events-none px-3">
          {character.cardImage ? (
            <img
              src={character.cardImage}
              alt={character.firstName}
              className={`${compact ? 'w-1/2' : 'w-full'} h-auto`}
              style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))' }}
            />
          ) : (
            <div
              className={`${compact ? 'w-1/2' : 'w-full'} rounded-2xl flex items-center justify-center`}
              style={{ aspectRatio: '192/231', backgroundColor: character.accentColor + '33', border: `2px dashed ${character.accentColor}66` }}
            >
              <span className="font-['Baloo_2',cursive] text-xs text-center px-2 opacity-50">{character.firstName}</span>
            </div>
          )}
        </div>

        {/* Coloured card body */}
        <div
          className="rounded-3xl px-4 pb-5"
          style={{ backgroundColor: character.accentColor, paddingTop: compact ? 105 : 130 }}
        >
          {!compact && (
            <h3 className="font-['Baloo_2',cursive] font-extrabold text-white text-xl leading-tight mb-1">
              {character.firstName}
            </h3>
          )}
          <p className="font-['Nunito',sans-serif] text-white/80 text-xs leading-relaxed mb-3 line-clamp-1">
            {tagline}
          </p>
          {character.available ? (
            <span className="font-['Baloo_2',cursive] font-bold text-white text-xs uppercase tracking-wider">
              {t.meetButton} {character.firstName} →
            </span>
          ) : (
            <span className="font-['Baloo_2',cursive] font-bold text-white/60 text-xs uppercase tracking-wider">
              {t.comingSoon}
            </span>
          )}
        </div>

        {/* Coming soon overlay */}
        {!character.available && (
          <div className="absolute inset-0 top-[90px] rounded-3xl bg-black/20 flex items-center justify-center">
            <span className="bg-[#FFD54F] text-[#C8102E] font-['Baloo_2',cursive] font-bold text-sm px-3 py-1 rounded-full">
              {t.comingSoonBadge}
            </span>
          </div>
        )}
      </div>
    )

    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {character.available ? (
          <Link
            to={`/characters/${character.slug}`}
            className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D] rounded-3xl transition-transform duration-200 hover:scale-[1.04]"
            aria-label={`${t.meetButton} ${character.firstName}`}
          >
            {inner}
          </Link>
        ) : (
          <div aria-label={`${character.firstName} — ${t.comingSoon}`}>{inner}</div>
        )}
      </motion.div>
    )
  }

  // Family variant
  const cardContent = (
    <div className="relative rounded-3xl overflow-hidden bg-white shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      <div
        className="relative h-40 w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: character.accentColor + '22' }}
      >
        {character.cardImage ? (
          <img src={character.cardImage} alt={character.firstName} className="h-full w-auto object-contain" />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: character.accentColor }}
          >
            <span className="font-['Baloo_2',cursive] font-bold text-white text-2xl">{character.firstName[0]}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-['Baloo_2',cursive] font-bold text-[#51319C] text-lg leading-tight">
          {character.firstName}
        </h3>
        <p className="text-sm text-[#1A1A1A]/70 font-['Nunito',sans-serif] mt-1 line-clamp-2">
          {tagline}
        </p>
        {character.available && (
          <p className="mt-2 text-xs font-bold text-[#1788DF] font-['Baloo_2',cursive] uppercase tracking-wide">
            {lang === 'zh' ? '了解更多 →' : 'Learn More →'}
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
          aria-label={`${t.meetButton} ${character.firstName}`}
        >
          {cardContent}
        </Link>
      ) : (
        <div aria-label={`${character.firstName} — ${t.comingSoon}`}>{cardContent}</div>
      )}
    </motion.div>
  )
}
