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

const oliver = characters.find((c) => c.id === 'oliver')!

const oliverFacts = [
  { label: 'Name', value: 'Oliver' },
  { label: 'Family Status', value: 'Dad' },
  { label: 'Appearance', value: 'Six foot tall, cuddly brown fur, bucket hat' },
  { label: 'Occupation', value: 'Builder, boardgame champion & family man' },
  { label: 'Special skill', value: 'If it can be built, Oliver is your rabbit!' },
  { label: 'Hero', value: 'Scarlett and the whole Rabbit family' },
  { label: 'Dream', value: 'A perfect veggie garden and a Rabbitohs premiership' },
  { label: 'Fun fact', value: "Always says the right thing at the right time — even when he doesn't understand the game!" },
  { label: 'Related characters', value: 'Scarlett, Ruby, Jack and Reggie' },
]

export default function OliverCharacterPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        {/* Park hero scene */}
        <ParkHero
          characterName={oliver.firstName}
          catchphrase="Hey there guys, I'm Oliver."
          tagline="New to the Rabbitohs family — but heart and soul in the Burrow!"
          imageSrc="/characters/oliver-header.png"
          imageAlt="Oliver standing warmly in his South Sydney Rabbitohs kit"
          accentColor={oliver.accentColor}
          bannerColor="#372B29"
        />

        {/* Bio */}
        <CharacterBio character={oliver} />

        {/* Clipboard Quick Facts */}
        <ClipboardFacts
          facts={oliverFacts}
          characterName={oliver.firstName}
          sectionBg="#D1BABA"
          headingColor="#382B2A"
          bodyColor="#1A1A1A"
          clipboardFrameColor="#382B2A"
        />

        {/* Best Moments */}
        <BestMomentsSection moments={oliver.bestMoments} characterName={oliver.firstName} />

        {/* Activities */}
        <CharacterActivities characterId={oliver.id} characterName={oliver.firstName} />

        {/* Family */}
        <CharacterFamily relatedCharacterIds={oliver.relatedCharacters} currentCharacterName={oliver.firstName} />
      </main>
      <Footer />
    </>
  )
}
