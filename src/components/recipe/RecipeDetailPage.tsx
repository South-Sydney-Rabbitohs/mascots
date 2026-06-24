import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/shared/SkipLink'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface IngredientGroup {
  title?: string
  items: string[]
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface RecipeDetailProps {
  title: string
  tagline: string
  makes: string
  accentColor?: string
  helperSectionColor?: string
  helperTagline: string
  introText: string[]
  perfectFor: string[]
  goodBecause: { icon: string; text: string }[]
  gallery: GalleryImage[]
  ingredientGroups: IngredientGroup[]
  method: string[]
  helperJobs: { icon: string; job: string }[]
  parentTips: { icon: string; tip: string }[]
  easySwaps: { icon: string; swap: string; forText: string }[]
  storage: { icon: string; title: string; text: string }[]
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function RecipeDetailPage({
  title,
  tagline,
  makes,
  accentColor = '#007A3D',
  helperSectionColor = '#0D4F2A',
  helperTagline,
  introText,
  perfectFor,
  goodBecause,
  gallery,
  ingredientGroups,
  method,
  helperJobs,
  parentTips,
  easySwaps,
  storage,
}: RecipeDetailProps) {
  useEffect(() => {
    const prev = document.body.style.backgroundColor
    document.body.style.backgroundColor = '#047442'
    return () => { document.body.style.backgroundColor = prev }
  }, [])

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">

        {/* ── Hero ── */}
        <section aria-labelledby="recipe-heading" className="px-6 py-12 md:py-16" style={{ backgroundColor: '#047442' }}>
          <div className="max-w-5xl mx-auto">
            <Link
              to="/#healthy-living"
              className="inline-flex items-center gap-1 font-['Nunito',sans-serif] font-bold text-white/80 text-sm mb-8 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <span aria-hidden="true">←</span> Back to Healthy Living
            </Link>
            <h1
              id="recipe-heading"
              className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-4"
            >
              {title}
            </h1>
            <p className="font-['Nunito',sans-serif] font-semibold text-white/80 text-base md:text-lg mb-6 leading-relaxed max-w-2xl">
              {tagline}
            </p>
            <span
              className="inline-block bg-white font-['Baloo_2',cursive] font-bold text-sm px-5 py-1.5 rounded-full"
              style={{ color: '#047442' }}
            >
              {makes}
            </span>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FFF7D7' }}>
          <div className="max-w-5xl mx-auto">

            <div className="max-w-2xl space-y-3 mb-10">
              {introText.map((para, i) => (
                <p key={i} className="font-['Nunito',sans-serif] text-[#1A1A1A]/80 text-base leading-relaxed">{para}</p>
              ))}
            </div>

            <div className="mb-10">
              <h2 className="font-['Baloo_2',cursive] font-extrabold text-2xl md:text-3xl text-[#0D4F2A] mb-4">
                A perfect option for
              </h2>
              <div className="flex flex-wrap gap-3">
                {perfectFor.map((item) => (
                  <span
                    key={item}
                    className="inline-block bg-white border-2 border-[#BFD76E] font-['Nunito',sans-serif] font-semibold text-[#0D4F2A] text-sm px-4 py-2 rounded-full shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-['Baloo_2',cursive] font-extrabold text-2xl md:text-3xl text-[#0D4F2A] mb-4">
                What makes them so good?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {goodBecause.map(({ icon, text }) => (
                  <div
                    key={text}
                    className="bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3 border border-[#BFD76E]/50"
                  >
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{icon}</span>
                    <span className="font-['Nunito',sans-serif] font-semibold text-[#1A1A1A] text-sm leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Photo Gallery ── */}
        {gallery.length > 1 && (
          <section aria-label="Recipe photos" className="py-10 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className={`grid gap-3 ${
                gallery.length === 2
                  ? 'grid-cols-2'
                  : gallery.length === 3
                  ? 'grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-2 md:grid-cols-4'
              }`}>
                {gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-2xl shadow object-cover aspect-square"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Ingredients + Method ── */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FFF7D7' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">

              <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="px-6 py-4" style={{ backgroundColor: accentColor }}>
                  <h2 className="font-['Baloo_2',cursive] font-bold text-white text-2xl">🧺 Ingredients</h2>
                </div>
                <div className="px-6 py-5 space-y-5">
                  {ingredientGroups.map((group, gi) => (
                    <div key={gi}>
                      {group.title && (
                        <p className="font-['Baloo_2',cursive] font-bold text-[#C8102E] text-xs uppercase tracking-widest mb-2">
                          — {group.title} —
                        </p>
                      )}
                      <ul className="space-y-1.5">
                        {group.items.map((item, ii) => (
                          <li key={ii} className="flex items-center gap-2.5 font-['Nunito',sans-serif] text-[#1A1A1A] text-sm leading-snug">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-['Baloo_2',cursive] font-bold text-[#0D4F2A] text-2xl mb-6">👨‍🍳 Method</h2>
                <ol className="relative space-y-5" aria-label="Method steps">
                  <div className="absolute left-4 top-8 bottom-2 w-0.5" style={{ backgroundColor: accentColor, opacity: 0.25 }} aria-hidden="true" />
                  {method.map((step, i) => (
                    <li key={i} className="relative flex items-start gap-5">
                      <span
                        className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-['Baloo_2',cursive] font-bold text-white text-sm leading-none"
                        style={{ backgroundColor: accentColor }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/80 text-sm leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </section>

        {/* ── Little Helper Jobs ── */}
        <section className="py-12 px-4" style={{ backgroundColor: helperSectionColor }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-['Baloo_2',cursive] font-extrabold text-3xl md:text-4xl text-white mb-2">🐣 Little Helper Jobs</h2>
              <p className="font-['Nunito',sans-serif] text-white/80 text-base max-w-xl mx-auto">{helperTagline}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {helperJobs.map(({ icon, job }) => (
                <div key={job} className="bg-white/15 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 border border-white/30">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">{icon}</span>
                  <span className="font-['Nunito',sans-serif] font-semibold text-white text-sm leading-snug">{job}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Parent Tips / Easy Swaps / Storage ── */}
        <section className="py-12 px-4" style={{ backgroundColor: '#FFF7D7' }}>
          <div className="max-w-5xl mx-auto space-y-12">

            <div>
              <h2 className="font-['Baloo_2',cursive] font-extrabold text-2xl md:text-3xl text-[#0D4F2A] mb-5">💡 Parent Tips</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {parentTips.map(({ icon, tip }) => (
                  <div key={tip} className="bg-white rounded-2xl px-5 py-4 shadow-sm flex items-start gap-4 border border-[#BFD76E]/50">
                    <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                    <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/80 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-['Baloo_2',cursive] font-extrabold text-2xl md:text-3xl text-[#0D4F2A] mb-5">🔄 Easy Swaps</h2>
              <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="divide-y divide-[#BFD76E]/40">
                  {easySwaps.map(({ icon, swap, forText }) => (
                    <div key={swap} className="flex items-center gap-4 px-6 py-4">
                      <span className="text-2xl flex-shrink-0" aria-hidden="true">{icon}</span>
                      <div>
                        <span className="font-['Baloo_2',cursive] font-bold text-sm" style={{ color: accentColor }}>{swap} </span>
                        <span className="font-['Nunito',sans-serif] text-[#1A1A1A]/70 text-sm">{forText}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-['Baloo_2',cursive] font-extrabold text-2xl md:text-3xl text-[#0D4F2A] mb-5">📦 Storage</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {storage.map(({ icon, title, text }) => (
                  <div key={title} className="bg-white rounded-2xl px-5 py-5 shadow-sm border border-[#BFD76E]/50 text-center">
                    <div className="text-4xl mb-3" aria-hidden="true">{icon}</div>
                    <h3 className="font-['Baloo_2',cursive] font-bold text-base mb-2" style={{ color: accentColor }}>{title}</h3>
                    <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/70 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
