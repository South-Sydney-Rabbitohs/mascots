import { characters } from '@/data/characters'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/shared/SkipLink'
import ParkHero from '@/components/character/ParkHero'
import CharacterBio from '@/components/character/CharacterBio'
import ClipboardFacts from '@/components/character/ClipboardFacts'
import BestMomentsSection from '@/components/character/BestMomentsSection'
import CharacterActivities from '@/components/character/CharacterActivities'
import CharacterFamily from '@/components/character/CharacterFamily'

const reggie = characters.find((c) => c.id === 'reggie')!

const reggieFacts = [
  { label: 'Full name', value: 'Reggie Rabbit' },
  { label: 'Life stage', value: 'Grandfather' },
  { label: 'Appearance', value: 'White rabbit, five foot eight, big long ears & soft pink paws' },
  { label: 'Lives', value: 'With the Burrow Bunnies in Redfern' },
  { label: 'Occupation', value: 'Head Cheerleader, Chief Hugger & Grandfather-in-Chief' },
  { label: 'Loves', value: 'Running the Rabbitohs out, fans, Red & Green and carrot juice' },
  { label: 'Dream', value: 'A Premiership for the grandkids' },
  { label: 'Fun fact', value: 'Rabbitoh since 1968 — before colour television!' },
  { label: 'Related characters', value: 'Jack, Ruby, Scarlett and Oliver Rabbit' },
]

export default function ReggieCharacterPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        {/* Park hero scene */}
        <ParkHero
          characterName={reggie.firstName}
          characterSurname={reggie.lastName}
          catchphrase="G'day, I'm Reggie Rabbit."
          tagline="The original Burrow Bunny. Head Cheerleader, Chief Hugger & Grandfather-in-Chief of the Rabbitohs!"
          imageSrc={reggie.heroImage}
          imageAlt="Reggie Rabbit standing proudly in his South Sydney Rabbitohs scarf"
          accentColor={reggie.accentColor}
        />

        {/* Bio */}
        <CharacterBio character={reggie} />

        {/* Clipboard Quick Facts */}
        <ClipboardFacts facts={reggieFacts} characterName={reggie.firstName} />

        {/* Best Moments */}
        <BestMomentsSection moments={reggie.bestMoments} characterName={reggie.firstName} />

        {/* Activities */}
        <CharacterActivities characterId={reggie.id} characterName={reggie.firstName} />

        {/* Family */}
        <CharacterFamily relatedCharacterIds={reggie.relatedCharacters} currentCharacterName={reggie.firstName} />
      </main>
      <Footer />
    </>
  )
}
