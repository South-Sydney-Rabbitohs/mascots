import { motion } from 'framer-motion'
import type { Character } from '@/data/characters'
import { characters } from '@/data/characters'
import SectionHeading from '@/components/shared/SectionHeading'
import CharacterCard from '@/components/shared/CharacterCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui } from '@/i18n/translations'

interface CharacterFamilyProps {
  relatedCharacterIds: string[]
  currentCharacterName: string
}

export default function CharacterFamily({ relatedCharacterIds, currentCharacterName }: CharacterFamilyProps) {
  const familyMembers = relatedCharacterIds
    .map((id) => characters.find((c) => c.id === id))
    .filter((c): c is Character => c !== undefined)

  const { lang } = useLanguage()
  const t = ui[lang].character

  const heading = lang === 'zh'
    ? `${currentCharacterName}${t.familyHeadingSuffix}`
    : `${currentCharacterName}${t.familyHeadingSuffix}`

  const subtitle = lang === 'zh'
    ? `${t.familySubtitlePrefix}${currentCharacterName}${t.familySubtitleSuffix}`
    : `${t.familySubtitlePrefix} ${currentCharacterName}${t.familySubtitleSuffix}`

  return (
    <section
      aria-labelledby="family-heading"
      className="py-14 px-4"
      style={{ backgroundColor: '#FFFAE5' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="family-heading"
          color="red"
          subtitle={subtitle}
          className="mb-10"
        >
          {heading}
        </SectionHeading>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          aria-label="Family member cards"
        >
          {familyMembers.map((member, index) => (
            <CharacterCard
              key={member.id}
              character={member}
              variant="home"
              index={index}
              compact
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
