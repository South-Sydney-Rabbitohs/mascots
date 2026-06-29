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
import { useLanguage } from '@/contexts/LanguageContext'
import { characterZh } from '@/i18n/translations'

const jack = characters.find((c) => c.id === 'jack')!

const jackFacts = [
  { label: 'Name', value: 'Jack' },
  { label: 'Family Status', value: 'Son' },
  { label: 'Appearance', value: 'Dark and light brown fur, sporty sneakers, backwards cap' },
  { label: 'Occupation', value: 'Adventure expert in training' },
  { label: 'Hero', value: 'Grandad Reggie' },
  { label: 'Dream', value: 'To be a player, coach and mascot — all at once!' },
  { label: 'Fun fact', value: 'Knows "Glory Glory to South Sydney" backwards!' },
  { label: 'Related characters', value: 'Ruby, Scarlett, Reggie and Oliver' },
]

export default function JackCharacterPage() {
  const { lang } = useLanguage()
  const zh = characterZh.jack

  const catchphrase = lang === 'zh' ? zh.catchphrase : "HEY HEY! I'm Jack!"
  const tagline = lang === 'zh' ? zh.heroBannerTagline : "Fastest bunny in the Burrow — cap backwards, aerodynamic. It's science!"
  const facts = lang === 'zh' ? zh.facts : jackFacts

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        {/* Park hero scene */}
        <ParkHero
          characterName={jack.firstName}
          catchphrase={catchphrase}
          tagline={tagline}
          imageSrc="/characters/jack-header.png"
          imageAlt="Jack standing confidently with his backwards cap"
          accentColor={jack.accentColor}
          bannerColor="#046F6A"
        />

        {/* Bio */}
        <CharacterBio character={jack} />

        {/* Clipboard Quick Facts */}
        <ClipboardFacts
          facts={facts}
          characterName={jack.firstName}
          sectionBg="#F3D8B5"
          headingColor="#046F6A"
          bodyColor="#1A1A1A"
          clipboardFrameColor="#046F6A"
        />

        {/* Best Moments */}
        <BestMomentsSection moments={jack.bestMoments} characterName={jack.firstName} characterId={jack.id} />

        {/* Activities */}
        <CharacterActivities characterId={jack.id} characterName={jack.firstName} />

        {/* Family */}
        <CharacterFamily relatedCharacterIds={jack.relatedCharacters} currentCharacterName={jack.firstName} />
      </main>
      <Footer />
    </>
  )
}
