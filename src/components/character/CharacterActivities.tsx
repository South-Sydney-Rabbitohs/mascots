import { getActivitiesByCharacter } from '@/data/activities'
import ActivityCard from '@/components/shared/ActivityCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui } from '@/i18n/translations'

interface CharacterActivitiesProps {
  characterId: string
  characterName: string
}

export default function CharacterActivities({ characterId, characterName }: CharacterActivitiesProps) {
  const activities = getActivitiesByCharacter(characterId)
  const { lang } = useLanguage()
  const t = ui[lang].character

  if (activities.length === 0) return null

  const heading = lang === 'zh'
    ? `${characterName}${t.activitiesHeadingSuffix}`
    : `${characterName}${t.activitiesHeadingSuffix}`

  const subtitle = lang === 'zh'
    ? `${t.activitiesSubtitlePrefix}${characterName}一起做！`
    : `${t.activitiesSubtitlePrefix} ${characterName}!`

  return (
    <section
      aria-labelledby="char-activities-heading"
      className="bg-[#B5DBB4] py-14 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="char-activities-heading"
          color="green"
          subtitle={subtitle}
          className="mb-10"
        >
          {heading}
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  )
}
