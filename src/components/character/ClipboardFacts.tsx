interface ClipboardFact {
  label: string
  value: string
}

interface ClipboardFactsProps {
  facts: ClipboardFact[]
  characterName: string
  sectionBg?: string
  headingColor?: string
  bodyColor?: string
  clipboardFrameColor?: string
}

export default function ClipboardFacts({
  facts,
  characterName,
  sectionBg = '#BFE9F7',
  headingColor = '#51319C',
  bodyColor = 'rgba(26,26,26,0.7)',
  clipboardFrameColor = '#8B5E3C',
}: ClipboardFactsProps) {
  return (
    <section
      aria-labelledby="clipboard-heading"
      className="py-14 px-4"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Clipboard */}
        <div
          className="relative w-full max-w-xs md:max-w-sm flex-shrink-0 md:-rotate-2"
        >
          {/* Clipboard backing */}
          <div
            className="rounded-2xl shadow-2xl pt-10 pb-6 px-6"
            style={{ backgroundColor: clipboardFrameColor }}
          >
            {/* Clip */}
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 w-14 h-10 rounded-b-xl shadow-md"
              style={{
                background: 'linear-gradient(180deg, #FFB300 0%, #FF8F00 100%)',
                border: '3px solid #E65100',
              }}
              aria-hidden="true"
            />
            {/* Clip hole */}
            <div
              className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full border-2 border-[#E65100]"
              style={{ backgroundColor: clipboardFrameColor }}
              aria-hidden="true"
            />

            {/* Paper */}
            <div
              className="rounded-xl p-5 relative overflow-hidden"
              style={{
                backgroundColor: 'white',
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 26px, #e3f2fd 26px, #e3f2fd 27px)',
                backgroundSize: '100% 27px',
              }}
            >
              <h2
                id="clipboard-heading"
                className="font-['Baloo_2',cursive] font-extrabold text-xl text-[#C8102E] mb-4 text-center"
              >
                {characterName} Quick Facts
              </h2>
              <dl className="space-y-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <dt className="font-['Baloo_2',cursive] font-bold text-[#C8102E] text-xs uppercase tracking-wide">
                      {fact.label}
                    </dt>
                    <dd className="font-['Nunito',sans-serif] text-[#1A1A1A] text-sm font-semibold">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Decorative text beside clipboard */}
        <div className="text-center md:text-left">
          <p className="font-['Baloo_2',cursive] font-extrabold text-3xl md:text-4xl mb-3" style={{ color: headingColor }}>
            Get to know {characterName}!
          </p>
          <p className="font-['Nunito',sans-serif] text-base md:text-lg max-w-sm" style={{ color: bodyColor }}>
            Every great Burrow Bunnies member has a fact sheet. Here are {characterName}'s most important facts — straight from the clipboard!
          </p>
        </div>
      </div>
    </section>
  )
}
