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

const ruby = characters.find((c) => c.id === 'ruby')!

const rubyFacts = [
  { label: 'Name', value: 'Ruby' },
  { label: 'Family Status', value: 'Daughter' },
  { label: 'Appearance', value: 'Five foot tall, caramel fur, punchy pink glasses' },
  { label: 'Occupation', value: 'Rugby League player & big sister' },
  { label: 'Hero', value: 'Grandad Reggie' },
  { label: 'Dream', value: 'To wear the red and green for real one day' },
  { label: 'Special skill', value: 'Makes everyone around her feel stronger and more confident' },
  { label: 'Fun fact', value: 'Once passed instead of scoring the match-winning try — teammate got the glory!' },
  { label: 'Related characters', value: 'Jack, Scarlett, Oliver and Reggie' },
]

export default function RubyCharacterPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        {/* Park hero scene */}
        <ParkHero
          characterName={ruby.firstName}
          catchphrase="Hello! I'm Ruby."
          tagline="The big sister with quiet confidence, a great pass and a heart full of Red & Green!"
          imageSrc="/characters/ruby-header.png"
          imageAlt="Ruby standing confidently wearing her pink glasses and holding a football"
          accentColor={ruby.accentColor}
          bannerColor="#E56381"
        />

        {/* Bio */}
        <CharacterBio character={ruby} />

        {/* Clipboard Quick Facts */}
        <ClipboardFacts
          facts={rubyFacts}
          characterName={ruby.firstName}
          sectionBg="#FEC680"
          headingColor="#E46180"
          bodyColor="#1A1A1A"
          clipboardFrameColor="#E46180"
        />

        {/* Best Moments */}
        <BestMomentsSection moments={ruby.bestMoments} characterName={ruby.firstName} />

        {/* Activities */}
        <CharacterActivities characterId={ruby.id} characterName={ruby.firstName} />

        {/* Family */}
        <CharacterFamily relatedCharacterIds={ruby.relatedCharacters} currentCharacterName={ruby.firstName} />
      </main>
      <Footer />
    </>
  )
}
