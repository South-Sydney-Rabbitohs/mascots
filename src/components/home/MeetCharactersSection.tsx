import { motion } from 'framer-motion'
import { characters } from '@/data/characters'
import CharacterCard from '@/components/shared/CharacterCard'
import SectionHeading from '@/components/shared/SectionHeading'

export default function MeetCharactersSection() {
  return (
    <section
      id="characters"
      aria-labelledby="characters-heading"
      className="bg-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="characters-heading"
          color="purple"
          subtitle="Five bunnies. One big burrow. Endless adventures! Meet Reggie and the whole crew."
          className="mb-10"
        >
          Meet the Characters
        </SectionHeading>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          aria-label="Character cards"
        >
          {characters.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              variant="home"
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
