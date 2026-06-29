import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui } from '@/i18n/translations'

// TODO: Jetpack CMS integration — fetch recipe content dynamically

const recipeHrefs = [
  { href: '/healthy-living/anytime-muffins', emoji: '🧁', accentColor: '#C8102E' },
  { href: '/healthy-living/choc-snack-balls', emoji: '🍫', accentColor: '#007A3D' },
  { href: '/healthy-living/no-bake-oat-bars', emoji: '🌾', accentColor: '#007A3D' },
]

export default function HealthyEatingSection() {
  const { lang } = useLanguage()
  const t = ui[lang].home
  const recipes = ui[lang].recipes

  return (
    <section
      id="healthy-living"
      aria-labelledby="healthy-heading"
      className="py-16 px-4"
      style={{ backgroundColor: '#B5DBB4' }}
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h2
            id="healthy-heading"
            className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl text-[#0D4F2A] mb-3"
          >
            {t.healthyRecipesHeading}
          </h2>
          <p className="font-['Nunito',sans-serif] text-[#0D4F2A]/80 text-base md:text-lg max-w-xl mx-auto">
            {t.healthyRecipesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe, i) => (
            <Link
              key={recipeHrefs[i].href}
              to={recipeHrefs[i].href}
              className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D]"
              aria-label={`${t.getRecipe}: ${recipe.title}`}
            >
              <div className="text-3xl mb-3" aria-hidden="true">{recipeHrefs[i].emoji}</div>
              <h3
                className="font-['Baloo_2',cursive] font-bold text-xl mb-2"
                style={{ color: recipeHrefs[i].accentColor }}
              >
                {recipe.title}
              </h3>
              <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/70 text-sm leading-relaxed flex-1">
                {recipe.description}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1 font-['Baloo_2',cursive] font-bold text-sm group-hover:underline"
                style={{ color: recipeHrefs[i].accentColor }}
                aria-hidden="true"
              >
                {t.getRecipe} <span>→</span>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
