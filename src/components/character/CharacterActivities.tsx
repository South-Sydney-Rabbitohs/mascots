import { getActivitiesByCharacter } from '@/data/activities'
import ActivityCard from '@/components/shared/ActivityCard'
import SectionHeading from '@/components/shared/SectionHeading'

interface CharacterActivitiesProps {
  characterId: string
  characterName: string
}

export default function CharacterActivities({ characterId, characterName }: CharacterActivitiesProps) {
  const activities = getActivitiesByCharacter(characterId)

  if (activities.length === 0) return null

  return (
    <section
      aria-labelledby="char-activities-heading"
      className="bg-[#BFD76E] py-14 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="char-activities-heading"
          color="green"
          subtitle={`Things to do with ${characterName}!`}
          className="mb-10"
        >
          {characterName}'s Activities
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
