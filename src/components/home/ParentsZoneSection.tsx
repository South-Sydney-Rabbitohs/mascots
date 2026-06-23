// TODO: parental consent flow — age gate and data collection consent
// TODO: Age gate for competition entry

const resources = [
  {
    emoji: '📋',
    title: 'Competition Rules',
    description:
      'Read the full terms and conditions for the Burrow Bunnies colouring competition before entering.',
    ctaLabel: 'View Rules',
  },
  {
    emoji: '📚',
    title: 'Activity Guide',
    description:
      'Download our Parents Activity Guide — a companion for completing all activities with your child.',
    ctaLabel: 'Download Guide',
  },
  {
    emoji: '✉️',
    title: 'Contact Us',
    description:
      "Questions, concerns or feedback? We'd love to hear from you. Reach our family team here.",
    ctaLabel: 'Get in Touch',
  },
]

export default function ParentsZoneSection() {
  function handleResource(title: string) {
    alert(`${title} — coming soon! This content is being finalised for parents.`)
  }

  return (
    <section
      id="parents-zone"
      aria-labelledby="parents-heading"
      className="bg-[#0D4F2A] py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="parents-heading"
            className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl text-white mb-3"
          >
            Parents Zone
          </h2>
          <p className="font-['Nunito',sans-serif] text-white/70 text-base md:text-lg max-w-xl mx-auto">
            Everything you need to know as a parent or guardian.
            All content on this site is family-safe, ad-free and South Sydney Rabbitohs approved.
          </p>
        </div>

        {/* Safe content notice */}
        <div className="bg-white/10 rounded-2xl p-4 text-center mb-8 border border-white/20">
          <p className="font-['Nunito',sans-serif] text-white/80 text-sm">
            🔒 <strong className="text-white">Family-safe guarantee:</strong> No advertising. No data collection from children. No external links without parent review. All activities are supervised and age-appropriate for 6–14 year olds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.title} className="bg-white/10 rounded-3xl p-6 border border-white/20 flex flex-col">
              <h3 className="font-['Baloo_2',cursive] font-bold text-[#FFD54F] text-xl mb-2">
                {resource.title}
              </h3>
              <p className="font-['Nunito',sans-serif] text-white/70 text-sm leading-relaxed mb-4 flex-1">
                {resource.description}
              </p>
              <button
                onClick={() => handleResource(resource.title)}
                className="inline-flex items-center justify-center font-['Baloo_2',cursive] font-bold text-sm text-[#0D4F2A] bg-[#FFD54F] hover:bg-yellow-300 px-4 py-2 rounded-xl min-h-[44px] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white"
              >
                {resource.ctaLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
