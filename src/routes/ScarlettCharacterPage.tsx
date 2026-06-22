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

const scarlett = characters.find((c) => c.id === 'scarlett')!

const scarlettFacts = [
  { label: 'Full name', value: 'Scarlett Rabbit' },
  { label: 'Life stage', value: 'Mum' },
  { label: 'Appearance', value: 'Five foot nine, white and brown fur, snazzy shoes, bouncy beanie' },
  { label: 'Lives', value: 'With the Burrow Bunnies' },
  { label: 'Occupation', value: "Rugby League coach & Reggie's daughter" },
  { label: 'Special skill', value: 'Fastest in the family' },
  { label: 'Hero', value: 'Reggie Rabbit (her dad)' },
  { label: 'Dream', value: 'A premiership ring of her own' },
  { label: 'Fun fact', value: 'Used to be ball girl when Reggie first ran the team out!' },
  { label: 'Related characters', value: 'Oliver, Ruby, Jack and Reggie Rabbit' },
]

export default function ScarlettCharacterPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        {/* Park hero scene */}
        <ParkHero
          characterName={scarlett.firstName}
          characterSurname={scarlett.lastName}
          catchphrase="Hi, I'm Scarlett — but you can call me Scar."
          tagline="Fastest in the family, loudest in the stand — Reggie's daughter through and through!"
          imageSrc={scarlett.heroImage}
          imageAlt="Scarlett Rabbit on the park grass in her snazzy shoes and bouncy beanie"
          accentColor={scarlett.accentColor}
        />

        {/* Bio */}
        <CharacterBio character={scarlett} />

        {/* Clipboard Quick Facts */}
        <ClipboardFacts facts={scarlettFacts} characterName={scarlett.firstName} />

        {/* Best Moments */}
        <BestMomentsSection moments={scarlett.bestMoments} characterName={scarlett.firstName} />

        {/* Activities */}
        <CharacterActivities characterId={scarlett.id} characterName={scarlett.firstName} />

        {/* Family */}
        <CharacterFamily relatedCharacterIds={scarlett.relatedCharacters} currentCharacterName={scarlett.firstName} />
      </main>
      <Footer />
    </>
  )
}
