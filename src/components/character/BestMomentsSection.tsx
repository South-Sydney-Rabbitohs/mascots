import type { Moment } from '@/data/characters'
import SectionHeading from '@/components/shared/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui, characterZh } from '@/i18n/translations'

interface BestMomentsSectionProps {
  moments: Moment[]
  characterName: string
  characterId: string
}

export default function BestMomentsSection({ moments, characterName, characterId }: BestMomentsSectionProps) {
  const { lang } = useLanguage()
  const t = ui[lang].character
  const zh = characterZh[characterId]

  const localizedMoments = lang === 'zh' && zh
    ? moments.map((m, i) => ({ ...m, ...(zh.bestMoments[i] ?? {}) }))
    : moments

  const heading = lang === 'zh'
    ? `${characterName}${t.bestMomentsHeadingSuffix}`
    : `${characterName}${t.bestMomentsHeadingSuffix}`

  const subtitle = lang === 'zh'
    ? `${characterName}${t.bestMomentsSubtitle1}${characterName}${t.bestMomentsSubtitle2}`
    : `${characterName}${t.bestMomentsSubtitle1} ${characterName}${t.bestMomentsSubtitle2}`

  return (
    <section
      aria-labelledby="moments-heading"
      className="bg-white py-14 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="moments-heading"
          color="purple"
          subtitle={subtitle}
          className="mb-10"
        >
          {heading}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localizedMoments.map((moment) => (
            <div
              key={moment.id}
              className="bg-[#FFF7D7] rounded-3xl overflow-hidden shadow-sm border-t-4 border-[#C8102E]"
            >
              {/* Image / placeholder */}
              <div className="h-36 bg-[#BFE9F7] flex items-center justify-center text-4xl">
                {moment.image ? (
                  <img
                    src={moment.image}
                    alt={moment.altText}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span role="img" aria-label={moment.altText}>🐰</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-['Baloo_2',cursive] font-bold text-[#C8102E] text-xl mb-2">
                  {moment.title}
                </h3>
                <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/70 text-sm leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
