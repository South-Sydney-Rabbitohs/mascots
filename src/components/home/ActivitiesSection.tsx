// TODO: GA4 activity_click event on each CTA
import { getFeaturedActivities } from '@/data/activities'
import ActivityCard from '@/components/shared/ActivityCard'

export default function ActivitiesSection() {
  const featured = getFeaturedActivities()

  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="py-16 px-4"
      style={{ backgroundColor: '#BFD76E' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="activities-heading"
            className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl text-[#0D4F2A] mb-2"
          >
            Activities
          </h2>
          <p className="font-['Nunito',sans-serif] text-[#0D4F2A]/80 text-base md:text-lg">
            Puzzles, colouring, quizzes and more — all free, all fun!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  )
}
