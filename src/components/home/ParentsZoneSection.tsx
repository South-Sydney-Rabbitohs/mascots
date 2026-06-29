// TODO: parental consent flow — age gate and data collection consent
import { useLanguage } from '@/contexts/LanguageContext'
import { ui } from '@/i18n/translations'

export default function ParentsZoneSection() {
  const { lang } = useLanguage()
  const t = ui[lang].home

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
            {t.parentsZoneHeading}
          </h2>
          <p className="font-['Nunito',sans-serif] text-white/70 text-base md:text-lg max-w-xl mx-auto">
            {t.parentsZoneSubtitle}
          </p>
        </div>

        {/* Safe content notice */}
        <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/20">
          <p className="font-['Nunito',sans-serif] text-white/80 text-sm">
            <strong className="text-white">{t.parentsZoneSafe}</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
