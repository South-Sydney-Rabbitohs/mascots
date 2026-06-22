import { Link } from 'react-router-dom'

// TODO: Jetpack CMS integration — fetch recipe content dynamically

const recipes = [
  {
    emoji: '🧁',
    title: 'Anytime Muffins',
    description: 'High protein, packed with veg — perfect for breaky, lunchboxes or after-school snacks.',
    href: '/healthy-living/anytime-muffins',
    accentColor: '#C8102E',
  },
  {
    emoji: '🍫',
    title: 'Choc Snack Balls',
    description: 'A guilt-free chocolatey treat made with dates, coconut and cacao. No baking needed!',
    href: '/healthy-living/choc-snack-balls',
    accentColor: '#007A3D',
  },
  {
    emoji: '🌾',
    title: 'No-Bake Oat Bars',
    description: 'Mix, press, drizzle and chill. These chewy oat bars with dark chocolate are a winner.',
    href: '/healthy-living/no-bake-oat-bars',
    accentColor: '#007A3D',
  },
]

export default function HealthyEatingSection() {
  return (
    <section
      id="healthy-living"
      aria-labelledby="healthy-heading"
      className="py-16 px-4"
      style={{ backgroundColor: '#BFD76E' }}
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h2
            id="healthy-heading"
            className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl text-[#0D4F2A] mb-3"
          >
            Healthy Recipes
          </h2>
          <p className="font-['Nunito',sans-serif] text-[#0D4F2A]/80 text-base md:text-lg max-w-xl mx-auto">
            Try these easy, nutritious recipes the whole family will love!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.title}
              to={recipe.href}
              className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D]"
              aria-label={`View recipe: ${recipe.title}`}
            >
              <div className="text-4xl mb-3" role="img" aria-hidden="true">{recipe.emoji}</div>
              <h3
                className="font-['Baloo_2',cursive] font-bold text-xl mb-2"
                style={{ color: recipe.accentColor }}
              >
                {recipe.title}
              </h3>
              <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/70 text-sm leading-relaxed flex-1">
                {recipe.description}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1 font-['Baloo_2',cursive] font-bold text-sm group-hover:underline"
                style={{ color: recipe.accentColor }}
                aria-hidden="true"
              >
                Get Recipe <span>→</span>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
