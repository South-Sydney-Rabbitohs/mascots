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
  const { lang } = useLanguage()
  const zh = characterZh.ruby

  const catchphrase = lang === 'zh' ? zh.catchphrase : "Hello! I'm Ruby."
  const tagline = lang === 'zh' ? zh.heroBannerTagline : "The big sister with quiet confidence, a great pass and a heart full of Red & Green!"
  const facts = lang === 'zh' ? zh.facts : rubyFacts

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        {/* Park hero scene */}
        <ParkHero
          characterName={ruby.firstName}
          catchphrase={catchphrase}
          tagline={tagline}
          imageSrc="/characters/ruby-header.png"
          imageAlt="Ruby standing confidently wearing her pink glasses and holding a football"
          accentColor={ruby.accentColor}
          bannerColor="#E56381"
        />

        {/* Bio */}
        <CharacterBio character={ruby} />

        {/* Clipboard Quick Facts */}
        <ClipboardFacts
          facts={facts}
          characterName={ruby.firstName}
          sectionBg="#FEC680"
          headingColor="#E46180"
          bodyColor="#1A1A1A"
          clipboardFrameColor="#E46180"
        />

        {/* Best Moments */}
        <BestMomentsSection moments={ruby.bestMoments} characterName={ruby.firstName} characterId={ruby.id} />

        {/* Activities */}
        <CharacterActivities characterId={ruby.id} characterName={ruby.firstName} />

        {/* Family */}
        <CharacterFamily relatedCharacterIds={ruby.relatedCharacters} currentCharacterName={ruby.firstName} />
      </main>
      <Footer />
    </>
  )
}
