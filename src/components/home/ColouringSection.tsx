// TODO: Competition entry form + parental consent + file upload
// TODO: PDF download — colouring PDFs not yet produced
// TODO: GA4 activity_download event

const steps = [
  { emoji: '⬇️', label: 'Download', description: 'Grab your free colouring sheet below' },
  { emoji: '🖍️', label: 'Colour In', description: 'Use pencils, crayons or paint — go wild!' },
  { emoji: '📸', label: 'Snap a Photo', description: 'Take a pic of your finished artwork' },
  { emoji: '🏆', label: 'Enter to Win', description: 'Upload and enter the competition' },
]

// Shared button class so both buttons are identical in size and shape
const btnBase = [
  "inline-flex items-center justify-center",
  "font-['Baloo_2',cursive] font-bold text-lg",
  "px-10 py-4 min-h-[44px] rounded-xl",
  "w-full sm:w-auto sm:min-w-[220px]",
  "transition-colors duration-150 cursor-pointer",
  "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-offset-2",
].join(' ')

export default function ColouringSection() {
  function handleDownload() {
    // TODO: PDF download
    // TODO: GA4 activity_download event
    alert('Colouring sheets are coming very soon! Check back here.')
  }

  return (
    <section
      id="colouring"
      aria-labelledby="colouring-heading"
      className="bg-[#C8102E] py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading — no pencil emoji */}
        <div className="text-center mb-10">
          <h2
            id="colouring-heading"
            className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl text-white mb-4"
          >
            Colouring Competition!
          </h2>
          <p className="font-['Nunito',sans-serif] text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Colour your favourite Bunny with our fun range of printable colouring sheets. Grab your favourite pencils, crayons or textas and bring your favourite characters and scenes to life. Once you&apos;re done, you can submit them to win a Family Pass to the next Rabbitohs Home game — and don&apos;t forget to pin it to the fridge for all to admire.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/15 rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2" role="img" aria-hidden="true">{step.emoji}</div>
              <div className="font-['Baloo_2',cursive] font-bold text-[#FFD54F] text-sm mb-1">
                Step {i + 1}: {step.label}
              </div>
              <p className="font-['Nunito',sans-serif] text-white/80 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs — same size, no emojis, yellow + green */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleDownload}
            className={`${btnBase} bg-[#FFD54F] text-[#0D4F2A] hover:bg-yellow-300 focus-visible:ring-[#FFD54F]`}
          >
            Download Characters
          </button>
          <a
            href="https://www.campaignware.com/rabbitohs/rabbitohscolouringcompetition"
            target="_blank"
            rel="noreferrer"
            className={`${btnBase} bg-[#007A3D] text-white hover:bg-[#0D4F2A] focus-visible:ring-[#007A3D]`}
          >
            Enter the Competition
          </a>
        </div>

      </div>
    </section>
  )
}
