// TODO: GA4 activity_click event on each CTA
import { useState, useRef, useEffect, useCallback } from 'react'
import { activities, type Activity } from '@/data/activities'

// ── Per-activity card themes ───────────────────────────────────────────────────

const THEMES: Record<string, { bg: string; accent: string }> = {
  'colouring-jack':       { bg: 'linear-gradient(150deg,#FF6B35 0%,#C8102E 100%)', accent: '#C8102E' },
  'jacks-favourite-food': { bg: 'linear-gradient(150deg,#56C45E 0%,#007A3D 100%)', accent: '#007A3D' },
  'scavenger-hunt':       { bg: 'linear-gradient(150deg,#FFD54F 0%,#F57F17 100%)', accent: '#E65100' },
  'spot-the-difference':  { bg: 'linear-gradient(150deg,#9575CD 0%,#51319C 100%)', accent: '#51319C' },
  'jigsaw-puzzle':        { bg: 'linear-gradient(150deg,#42A5F5 0%,#1565C0 100%)', accent: '#1565C0' },
  'footy-quiz':           { bg: 'linear-gradient(150deg,#C8102E 0%,#51319C 100%)', accent: '#51319C' },
  'design-your-jersey':   { bg: 'linear-gradient(150deg,#FF7043 0%,#C8102E 100%)', accent: '#C8102E' },
}
const DEFAULT_THEME = { bg: 'linear-gradient(150deg,#42A5F5 0%,#1565C0 100%)', accent: '#1565C0' }

// ── Card ──────────────────────────────────────────────────────────────────────

function ActivityCarouselCard({ activity }: { activity: Activity }) {
  const theme = THEMES[activity.id] ?? DEFAULT_THEME

  const handleCta = () => {
    if (activity.ctaAction === 'link' && activity.ctaHref) {
      window.open(activity.ctaHref, '_blank', 'noreferrer')
    } else {
      // TODO: GA4 activity_click event
      alert(`${activity.title} — coming soon! Check back soon for more Burrow Bunnies fun.`)
    }
  }

  return (
    <article className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white h-full">

      {/* ── Image / illustration panel ── */}
      <div className="relative flex items-center justify-center overflow-hidden" style={{ background: theme.bg, minHeight: 220 }}>
        {/* Decorative circles */}
        <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-10 -right-10" aria-hidden="true" />
        <div className="absolute w-24 h-24 rounded-full bg-white/10 -bottom-6 -left-6" aria-hidden="true" />
        <div className="absolute w-16 h-16 rounded-full bg-white/10 top-4 left-8" aria-hidden="true" />

        {/* Coming soon badge */}
        {activity.comingSoon && (
          <div className="absolute top-3 right-3 bg-white/90 font-['Baloo_2',cursive] font-bold text-[10px] uppercase tracking-widest text-[#C8102E] px-3 py-1 rounded-full shadow-sm">
            Coming Soon
          </div>
        )}

        {/* Large emoji */}
        <span
          className="relative z-10 select-none"
          style={{ fontSize: 96, lineHeight: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}
          role="img"
          aria-hidden="true"
        >
          {activity.emoji}
        </span>
      </div>

      {/* ── Content panel ── */}
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

// ── Section ───────────────────────────────────────────────────────────────────

const GAP = 20 // px between cards

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function ActivitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [offset, setOffset] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const isAnimating = useRef(false)

  const cards = activities
  const maxIndex = Math.max(0, cards.length - visibleCount)

  // Recalculate pixel offset from index + container width
  const calcOffset = useCallback((index: number, vCount: number) => {
    if (!trackRef.current) return 0
    const containerW = trackRef.current.offsetWidth
    const cardW = (containerW - GAP * (vCount - 1)) / vCount
    return index * (cardW + GAP)
  }, [])

  // Update visible count on resize
  useEffect(() => {
    const update = () => {
      const vCount = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
      setVisibleCount(vCount)
      setCurrentIndex((i) => {
        const safeIndex = Math.min(i, Math.max(0, cards.length - vCount))
        setOffset(calcOffset(safeIndex, vCount))
        return safeIndex
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [calcOffset, cards.length])

  const goTo = useCallback((index: number) => {
    if (isAnimating.current) return
    isAnimating.current = true
    setTimeout(() => { isAnimating.current = false }, 380)
    setCurrentIndex(index)
    setOffset(calcOffset(index, visibleCount))
  }, [calcOffset, visibleCount])

  const prev = () => goTo(Math.max(0, currentIndex - 1))
  const next = () => goTo(Math.min(maxIndex, currentIndex + 1))

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 48) {
      if (diff > 0) next()
      else prev()
    }
  }

  const cardWidthStyle = `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`

  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="py-16 px-4"
      style={{ backgroundColor: '#BFD76E' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
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

        {/* Carousel — flex row: [arrow] [track] [arrow] */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            aria-label="Previous activities"
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white"
            style={{ backgroundColor: '#51319C' }}
          >
            <ChevronLeft />
          </button>

          {/* Track — clips overflow, grows to fill remaining space */}
          <div
            ref={trackRef}
            className="flex-1 overflow-hidden min-w-0"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                gap: GAP,
                transform: `translateX(-${offset}px)`,
                transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                willChange: 'transform',
              }}
            >
              {cards.map((activity) => (
                <div
                  key={activity.id}
                  style={{ width: cardWidthStyle, flexShrink: 0, minWidth: 0 }}
                >
                  <ActivityCarouselCard activity={activity} />
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="Next activities"
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 disabled:opacity-35 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white"
            style={{ backgroundColor: '#51319C' }}
          >
            <ChevronRight />
          </button>

        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-8" role="tablist" aria-label="Carousel position">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to position ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4F2A]"
              style={{
                width: i === currentIndex ? 28 : 10,
                backgroundColor: i === currentIndex ? '#0D4F2A' : 'rgba(13,79,42,0.3)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
