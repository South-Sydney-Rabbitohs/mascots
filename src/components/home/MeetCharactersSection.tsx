import { motion } from 'framer-motion'
import { characters } from '@/data/characters'
import CharacterCard from '@/components/shared/CharacterCard'

export default function MeetCharactersSection() {
  return (
    <section
      id="characters"
      aria-label="Meet the Characters"
      className="py-16 px-4"
      style={{ backgroundColor: '#FFFAE5' }}
    >
      <div className="max-w-5xl mx-auto">
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
