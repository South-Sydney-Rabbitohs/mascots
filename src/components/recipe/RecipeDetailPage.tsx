import { type ReactNode } from 'react'
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
  /** SVG / JSX cartoon illustration shown in the hero kitchen scene */
  foodCartoon: ReactNode
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

// ── Kitchen scene background ───────────────────────────────────────────────────
// Pure-CSS cartoon indoor kitchen — no images, scales to any size.

function KitchenScene({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#FFF3DC', minHeight: 380 }}
    >
      {/* ── Tiled backsplash wall ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-conic-gradient(#EDE3D1 0% 25%, #FFF8ED 0% 50%)',
          backgroundSize: '36px 36px',
          opacity: 0.55,
        }}
        aria-hidden="true"
      />

      {/* ── Overhead cabinets ── */}
      <div
        className="absolute top-0 left-0 right-0 h-14 flex gap-0.5"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-1 flex items-center justify-center"
            style={{ backgroundColor: '#C8A96E', borderBottom: '3px solid #A07840' }}
          >
            <div
              className="w-6 h-1.5 rounded-full"
              style={{ backgroundColor: '#A07840' }}
            />
          </div>
        ))}
      </div>

      {/* ── Window (back wall, top-right) ── */}
      <div
        className="absolute top-16 right-8 md:right-16 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden"
        style={{ border: '4px solid #A07840', backgroundColor: '#D0EEFF' }}
        aria-hidden="true"
      >
        {/* Sky */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#B3D9F5 0%,#E8F7FF 100%)' }} />
        {/* Window cross */}
        <div className="absolute inset-0 flex items-center"><div className="w-full h-0.5 bg-white/70" /></div>
        <div className="absolute inset-0 flex justify-center"><div className="h-full w-0.5 bg-white/70" /></div>
        {/* Little cloud */}
        <div className="absolute top-2 left-2 w-5 h-2 rounded-full bg-white/80" />
        {/* Curtain left */}
        <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: 'linear-gradient(90deg,#E8A87C,transparent)', borderRadius: '0 50% 50% 0' }} />
        {/* Curtain right */}
        <div className="absolute right-0 top-0 bottom-0 w-2" style={{ background: 'linear-gradient(270deg,#E8A87C,transparent)', borderRadius: '50% 0 0 50%' }} />
      </div>

      {/* ── Small shelf (left wall) ── */}
      <div className="absolute top-20 left-4 md:left-10" aria-hidden="true">
        <div className="w-20 h-2 rounded" style={{ backgroundColor: '#C8A96E', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} />
        {/* Jar on shelf */}
        <div className="absolute -top-6 left-1 w-5 h-6 rounded-sm" style={{ backgroundColor: '#A8D5B5', border: '1.5px solid #7AB590' }}>
          <div className="w-full h-2 rounded-t-sm" style={{ backgroundColor: '#7AB590' }} />
        </div>
        {/* Small pot on shelf */}
        <div className="absolute -top-5 left-9 w-7 h-5 rounded-sm" style={{ backgroundColor: '#C8102E', border: '1.5px solid #A00020' }}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-5 h-1.5 rounded-full" style={{ backgroundColor: '#A00020' }} />
        </div>
      </div>

      {/* ── Hanging utensils (right wall) ── */}
      <div className="absolute top-16 right-3 flex flex-col gap-2 items-center" aria-hidden="true">
        {/* Rail */}
        <div className="w-1 h-0.5 bg-[#A07840] w-6" />
        {/* Spoon */}
        <div className="w-1 h-8 bg-[#D4A96A] rounded-full relative">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4A96A]" />
        </div>
      </div>

      {/* ── Counter surface ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{ backgroundColor: '#E8D5A8', borderTop: '3px solid #C8A96E' }}
        aria-hidden="true"
      >
        {/* Counter front panel */}
        <div className="absolute bottom-0 left-0 right-0 h-10" style={{ backgroundColor: '#D4C090', borderTop: '2px solid #C8A96E' }} />
      </div>

      {/* ── Bowl on counter ── */}
      <div
        className="absolute bottom-9 left-6 md:left-14 w-12 h-6"
        style={{ backgroundColor: '#E8A87C', borderRadius: '0 0 50% 50%', border: '2px solid #C87840', borderTop: 'none' }}
        aria-hidden="true"
      />

      {/* ── Food illustration — centred, sits on counter ── */}
      <div className="relative z-10 flex items-end justify-center" style={{ paddingBottom: 64 }}>
        {children}
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function RecipeDetailPage({
  title,
  tagline,
  makes,
  accentColor = '#007A3D',
  helperSectionColor = '#0D4F2A',
  helperTagline,
  foodCartoon,
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
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">

        {/* ── Hero — kitchen split layout ── */}
        <section aria-labelledby="recipe-heading" className="w-full">
          <div className="flex flex-col md:flex-row" style={{ minHeight: 420 }}>

            {/* Left — cartoon kitchen + food illustration */}
            <div className="w-full md:w-1/2" style={{ minHeight: 300 }}>
              <KitchenScene>{foodCartoon}</KitchenScene>
            </div>

            {/* Right — title + info */}
            <div
              className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 py-10"
              style={{ backgroundColor: '#FFF8F0' }}
            >
              <Link
                to="/#healthy-living"
                className="inline-flex items-center gap-1 font-['Nunito',sans-serif] font-bold text-[#007A3D] text-sm mb-6 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D] rounded self-start"
              >
                <span aria-hidden="true">←</span> Back to Healthy Living
              </Link>
              <h1
                id="recipe-heading"
                className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
                style={{ color: accentColor }}
              >
                {title}
              </h1>
              <p className="font-['Nunito',sans-serif] font-semibold text-[#1A1A1A]/70 text-base md:text-lg mb-5 leading-relaxed">
                {tagline}
              </p>
              <span
                className="self-start inline-block text-white font-['Baloo_2',cursive] font-bold text-sm px-5 py-1.5 rounded-full"
                style={{ backgroundColor: accentColor }}
              >
                {makes}
              </span>
            </div>

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
