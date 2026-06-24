import { useNavigate } from 'react-router-dom'
import type { Activity } from '@/data/activities'

export const ACTIVITY_THEMES: Record<string, { bg: string; accent: string }> = {
  'design-your-jersey':        { bg: 'linear-gradient(150deg,#FF7043 0%,#C8102E 100%)', accent: '#C8102E' },
  'help-jack-maze':            { bg: 'linear-gradient(150deg,#046F6A 0%,#024846 100%)', accent: '#046F6A' },
  'reggies-game-day-plate':    { bg: 'linear-gradient(150deg,#56C45E 0%,#007A3D 100%)', accent: '#007A3D' },
  'pack-your-bag':             { bg: 'linear-gradient(150deg,#FFD54F 0%,#F57F17 100%)', accent: '#E65100' },
  'rubys-team-of-the-day':     { bg: 'linear-gradient(150deg,#E56381 0%,#C8102E 100%)', accent: '#C8102E' },
  'how-are-you-feeling':       { bg: 'linear-gradient(150deg,#9575CD 0%,#51319C 100%)', accent: '#51319C' },
  'scarletts-obstacle-course': { bg: 'linear-gradient(150deg,#FA623E 0%,#C8102E 100%)', accent: '#C8102E' },
  'olivers-bedtime-wind-down': { bg: 'linear-gradient(150deg,#372B29 0%,#1A1A2E 100%)', accent: '#372B29' },
  'colour-in-characters':      { bg: 'linear-gradient(150deg,#FF6B9D 0%,#C8102E 50%,#FFD54F 100%)', accent: '#C8102E' },
  'colour-in-reggie':          { bg: 'linear-gradient(150deg,#56C45E 0%,#047442 100%)', accent: '#047442' },
  'colour-in-scarlett':        { bg: 'linear-gradient(150deg,#FF8A65 0%,#FA623E 100%)', accent: '#C8102E' },
}
const DEFAULT_THEME = { bg: 'linear-gradient(150deg,#42A5F5 0%,#1565C0 100%)', accent: '#1565C0' }

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
      alert(`${activity.title} — coming soon! Check back soon for more Burrow Bunnies fun.`)
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
        {activity.comingSoon && (
          <div className="absolute top-3 right-3 bg-white/90 font-['Baloo_2',cursive] font-bold text-[10px] uppercase tracking-widest text-[#C8102E] px-3 py-1 rounded-full shadow-sm">
            Coming Soon
          </div>
        )}
        <span
          className="relative z-10 select-none"
          style={{ fontSize: 96, lineHeight: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}
          role="img"
          aria-hidden="true"
        >
          {activity.emoji}
        </span>
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
