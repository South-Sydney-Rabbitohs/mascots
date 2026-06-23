import { motion } from 'framer-motion'
import type { Character } from '@/data/characters'
import { characters } from '@/data/characters'
import SectionHeading from '@/components/shared/SectionHeading'
import CharacterCard from '@/components/shared/CharacterCard'

interface CharacterFamilyProps {
  relatedCharacterIds: string[]
  currentCharacterName: string
}

export default function CharacterFamily({ relatedCharacterIds, currentCharacterName }: CharacterFamilyProps) {
  const familyMembers = relatedCharacterIds
    .map((id) => characters.find((c) => c.id === id))
    .filter((c): c is Character => c !== undefined)

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
          subtitle={`Meet the rest of ${currentCharacterName}'s family.`}
          className="mb-10"
        >
          {currentCharacterName}'s Family
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
