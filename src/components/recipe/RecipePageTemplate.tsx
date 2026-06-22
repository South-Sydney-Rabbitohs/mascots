import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/shared/SkipLink'

export interface IngredientGroup {
  title?: string
  items: string[]
}

export interface RecipePageTemplateProps {
  title: string
  tagline: string
  imageSlug: string   // e.g. "anytime-muffins" → public/recipes/anytime-muffins.png
  imageSrc?: string   // supply once artwork is ready
  subtitle?: string
  accentColor?: string
  ingredientGroups: IngredientGroup[]
  method: string[]
  makes?: string
}

export default function RecipePageTemplate({
  title,
  tagline,
  imageSlug,
  imageSrc,
  subtitle,
  accentColor = '#007A3D',
  ingredientGroups,
  method,
  makes,
}: RecipePageTemplateProps) {
  const shouldReduceMotion = useReducedMotion()
  const animate = !shouldReduceMotion

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          aria-labelledby="recipe-heading"
          className="relative w-full overflow-hidden"
          style={{ minHeight: '340px', backgroundColor: '#BFE9F7' }}
        >
          {/* Cloud 1 */}
          <div
            className="absolute top-10 left-[8%]"
            style={{
              width: 100, height: 42, borderRadius: 50,
              backgroundColor: 'white', opacity: 0.9,
              boxShadow: '24px -8px 0 16px white, -16px 4px 0 12px white',
              animation: animate ? 'cloudDrift1 18s ease-in-out infinite alternate' : 'none',
            }}
            aria-hidden="true"
          />
          {/* Cloud 2 */}
          <div
            className="absolute top-5 left-[40%]"
            style={{
              width: 140, height: 52, borderRadius: 50,
              backgroundColor: 'white', opacity: 0.85,
              boxShadow: '36px -10px 0 22px white, -26px 5px 0 16px white',
              animation: animate ? 'cloudDrift2 22s ease-in-out infinite alternate' : 'none',
            }}
            aria-hidden="true"
          />
          {/* Cloud 3 */}
          <div
            className="absolute top-14 right-[10%]"
            style={{
              width: 90, height: 38, borderRadius: 50,
              backgroundColor: 'white', opacity: 0.8,
              boxShadow: '20px -8px 0 14px white, -15px 4px 0 10px white',
              animation: animate ? 'cloudDrift1 25s ease-in-out infinite alternate-reverse' : 'none',
            }}
            aria-hidden="true"
          />

          {/* Dark green hill */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '35%', backgroundColor: '#0D4F2A', borderRadius: '80% 80% 0 0 / 40px 40px 0 0' }}
            aria-hidden="true"
          />
          {/* Grass strip */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '25%', backgroundColor: '#BFD76E', borderRadius: '60% 60% 0 0 / 30px 30px 0 0' }}
            aria-hidden="true"
          />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 pt-14 pb-28">
            {/* Recipe image or placeholder */}
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="w-56 h-56 object-cover rounded-2xl mb-5 shadow-lg"
                style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.25))' }}
              />
            ) : (
              <div
                className="w-56 h-56 rounded-2xl mb-5 flex flex-col items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  border: '2px dashed rgba(0,0,0,0.18)',
                }}
                role="img"
                aria-label={`${title} image — placeholder`}
              >
                <span className="text-4xl mb-2" aria-hidden="true">📷</span>
                <p
                  className="font-['Baloo_2',cursive] text-[#1A1A1A]/40 text-xs text-center px-4"
                  style={{ lineHeight: 1.6 }}
                >
                  {title}<br />
                  <code>public/recipes/{imageSlug}.png</code>
                </p>
              </div>
            )}
            <h1
              id="recipe-heading"
              className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-3"
              style={{ color: accentColor, textShadow: '3px 3px 0 rgba(0,0,0,0.1)' }}
            >
              {title}
            </h1>
            <p className="font-['Nunito',sans-serif] font-semibold text-[#0D4F2A] text-base md:text-lg max-w-xl bg-white/65 px-4 py-2 rounded-xl">
              {tagline}
            </p>
            {makes && (
              <span className="mt-3 inline-block text-white font-['Baloo_2',cursive] font-bold text-sm px-4 py-1 rounded-full" style={{ backgroundColor: accentColor }}>
                {makes}
              </span>
            )}
          </div>

          <style>{`
            @keyframes cloudDrift1 {
              0%   { transform: translateX(0px); }
              100% { transform: translateX(18px); }
            }
            @keyframes cloudDrift2 {
              0%   { transform: translateX(0px); }
              100% { transform: translateX(-14px); }
            }
          `}</style>
        </section>

        {/* ── Recipe body ── */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FFF7D7' }}>
          <div className="max-w-5xl mx-auto">

            {/* Back link */}
            <Link
              to="/#healthy-living"
              className="inline-flex items-center gap-1 font-['Nunito',sans-serif] font-bold text-[#007A3D] text-sm mb-8 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D] rounded"
            >
              <span aria-hidden="true">←</span> Back to Healthy Living
            </Link>

            {subtitle && (
              <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/70 text-base md:text-lg mb-10 max-w-2xl bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#BFD76E]/60">
                {subtitle}
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* Ingredients card */}
              <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="px-6 py-4" style={{ backgroundColor: '#007A3D' }}>
                  <h2 className="font-['Baloo_2',cursive] font-bold text-white text-2xl flex items-center gap-2">
                    <span aria-hidden="true">🧺</span> Ingredients
                  </h2>
                </div>
                <div className="px-6 py-5 space-y-5">
                  {ingredientGroups.map((group, gi) => (
                    <div key={gi}>
                      {group.title && (
                        <p className="font-['Baloo_2',cursive] font-bold text-[#C8102E] text-xs uppercase tracking-widest mb-3 mt-1">
                          — {group.title} —
                        </p>
                      )}
                      <ul className="space-y-2" aria-label={group.title ?? 'Ingredients'}>
                        {group.items.map((item, ii) => (
                          <li
                            key={ii}
                            className="flex items-start gap-3 font-['Nunito',sans-serif] text-[#1A1A1A] text-sm leading-snug"
                          >
                            <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full border-2 border-[#007A3D] flex items-center justify-center" aria-hidden="true">
                              <span className="w-2 h-2 rounded-full bg-[#BFD76E]" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Method */}
              <div>
                <h2 className="font-['Baloo_2',cursive] font-bold text-[#0D4F2A] text-2xl mb-5 flex items-center gap-2">
                  <span aria-hidden="true">👨‍🍳</span> Method
                </h2>
                <ol className="space-y-4" aria-label="Method steps">
                  {method.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-['Baloo_2',cursive] font-bold text-white text-sm leading-none"
                        style={{ backgroundColor: accentColor }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/80 text-sm leading-relaxed pt-1 bg-white rounded-2xl px-4 py-3 shadow-sm flex-1 border border-[#BFD76E]/40">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
