import Button from '@/components/shared/Button'

// TODO: GA4 hero_cta_click event

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-[#BFE9F7] overflow-hidden"
    >
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #BFE9F7 0%, #FFF7D7 100%)' }}
        aria-hidden="true"
      />

      {/* Grass strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ backgroundColor: '#BFD76E', borderRadius: '60% 60% 0 0 / 30px 30px 0 0' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-16 pb-28 text-center">
        {/* Super label */}
        <div className="inline-block bg-[#C8102E] text-white font-['Baloo_2',cursive] font-bold text-sm px-4 py-1 rounded-full mb-4">
          South Sydney Rabbitohs
        </div>

        <h1 id="hero-heading" className="mb-4">
          <img
            src="/burrow-bunnies-logo.svg"
            alt="Burrow Bunnies"
            className="mx-auto w-full max-w-[280px] md:max-w-sm lg:max-w-md drop-shadow-lg"
          />
        </h1>

        <p className="font-['Nunito',sans-serif] text-lg md:text-xl text-[#1A1A1A]/70 max-w-xl mx-auto mb-8">
          Fun, games and footy with South Sydney's favourite bunnies!
          Meet the characters, do the activities and join the crew.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Button
            as="a"
            href="/#characters"
            variant="secondary"
            size="lg"
            aria-label="Meet all the Burrow Bunnies characters"
          >
            🐰 Meet the Gang
          </Button>
          <Button
            as="a"
            href="/#activities"
            variant="primary"
            size="lg"
            aria-label="Explore all activities"
          >
            🎯 Get Activities
          </Button>
        </div>

        {/* Character lineup artwork — TODO: supply final PNG at public/hero-lineup.png */}
        {/* Drop the file in and this placeholder disappears automatically */}
        <img
          src="/hero-lineup.png"
          alt="The Burrow Bunnies — Jack, Oliver, Reggie, Ruby and Scarlett lined up together"
          className="mx-auto w-full max-w-2xl"
          width={640}
          height={220}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
            if (fallback) fallback.removeAttribute('hidden')
          }}
        />
        {/* Fallback shown until real PNG is supplied */}
        <div
          hidden
          className="mx-auto flex flex-col items-center justify-center rounded-2xl"
          style={{ maxWidth: 640, height: 220, background: 'rgba(0,0,0,0.06)', border: '2px dashed rgba(0,0,0,0.15)' }}
          role="img"
          aria-label="Hero lineup artwork — The Burrow Bunnies"
        >
          <span className="text-4xl mb-2">🐰</span>
          <p className="font-['Baloo_2',cursive] text-[#1A1A1A]/40 text-sm">
            Hero lineup artwork (supply <code>public/hero-lineup.png</code>)
          </p>
        </div>
      </div>
    </section>
  )
}
