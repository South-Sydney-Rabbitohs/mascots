// TODO: parental consent flow — age gate and data collection consent

export default function ParentsZoneSection() {
  return (
    <section
      id="parents-zone"
      aria-labelledby="parents-heading"
      className="py-16 px-4"
      style={{ backgroundColor: '#000000' }}
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
        <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/20">
          <p className="font-['Nunito',sans-serif] text-white/80 text-sm">
            🔒 <strong className="text-white">Family-safe guarantee:</strong> No advertising. No data collection from children. No external links without parent review. All activities are supervised and age-appropriate for 6–14 year olds.
          </p>
        </div>
      </div>
    </section>
  )
}
