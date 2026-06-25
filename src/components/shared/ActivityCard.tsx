import { useNavigate } from 'react-router-dom'
import type { Activity } from '@/data/activities'
import { ACTIVITY_THEMES, DEFAULT_THEME } from './activityThemes'

interface ActivityCardProps {
  activity: Activity
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const navigate = useNavigate()
  const theme = ACTIVITY_THEMES[activity.id] ?? DEFAULT_THEME

  const handleCta = () => {
    if (activity.ctaAction === 'link' && activity.ctaHref) {
      if (activity.ctaHref.startsWith('/')) {
        navigate(activity.ctaHref)
      } else {
        window.open(activity.ctaHref, '_blank', 'noreferrer')
      }
    } else {
      alert(`${activity.title} — coming soon! Check back soon for more Mascot Family fun.`)
    }
  }

  return (
    <article className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white h-full">
      {/* Gradient image panel */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: theme.bg, minHeight: 220 }}
      >
        <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-10 -right-10" aria-hidden="true" />
        <div className="absolute w-24 h-24 rounded-full bg-white/10 -bottom-6 -left-6" aria-hidden="true" />
        <div className="absolute w-16 h-16 rounded-full bg-white/10 top-4 left-8" aria-hidden="true" />
        {activity.image ? (
          <img
            src={activity.image}
            alt={activity.altText}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span
            className="relative z-10 select-none"
            style={{ fontSize: 96, lineHeight: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}
            role="img"
            aria-hidden="true"
          >
            {activity.emoji}
          </span>
        )}
      </div>

      {/* Content panel */}
      <div className="flex flex-col items-center text-center px-6 py-6 flex-1">
        <h3
          className="font-['Baloo_2',cursive] font-extrabold text-base md:text-lg uppercase tracking-wide mb-2"
          style={{ color: theme.accent }}
        >
          {activity.title}
        </h3>
        <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/65 text-sm leading-relaxed mb-5 flex-1">
          {activity.description}
        </p>
        <button
          onClick={handleCta}
          className="font-['Baloo_2',cursive] font-bold text-sm text-white px-7 py-2.5 rounded-full shadow-md hover:opacity-90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D]"
          style={{ backgroundColor: '#0D4F2A' }}
          aria-label={`${activity.ctaLabel} — ${activity.title}`}
        >
          {activity.ctaLabel}
        </button>
      </div>
    </article>
  )
}
