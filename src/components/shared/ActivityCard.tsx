import type { Activity } from '@/data/activities'
import Button from './Button'

interface ActivityCardProps {
  activity: Activity
  variant?: 'grid' | 'character'
}

export default function ActivityCard({ activity, variant = 'grid' }: ActivityCardProps) {
  function handleCta() {
    // TODO: GA4 activity_download event
    // TODO: PDF download — activity PDFs not yet produced
    alert('Coming soon! This activity will be available very soon.')
  }

  return (
    <div
      className={`bg-white rounded-3xl shadow-md overflow-hidden flex flex-col
        ${variant === 'character' ? 'text-left' : 'text-center'}
      `}
    >
      {/* Image / emoji area */}
      <div className="bg-[#BFE9F7] flex items-center justify-center h-32 text-5xl">
        {activity.image ? (
          <img
            src={activity.image}
            alt={activity.altText}
            className="h-full w-full object-cover"
          />
        ) : (
          <span role="img" aria-label={activity.title}>{activity.emoji}</span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-['Baloo_2',cursive] font-bold text-[#51319C] text-lg leading-tight mb-1">
          {activity.title}
        </h3>
        <p className="text-sm text-[#1A1A1A]/70 font-['Nunito',sans-serif] mb-3 flex-1">
          {activity.description}
        </p>
        {activity.comingSoon && (
          <span className="inline-block mb-2 text-xs font-bold text-[#007A3D] font-['Baloo_2',cursive] uppercase tracking-wide">
            Coming Soon
          </span>
        )}
        <Button
          variant="primary"
          size="sm"
          onClick={handleCta}
          fullWidth={variant === 'character'}
          aria-label={`${activity.ctaLabel} — ${activity.title}`}
        >
          {activity.ctaLabel}
        </Button>
      </div>
    </div>
  )
}
