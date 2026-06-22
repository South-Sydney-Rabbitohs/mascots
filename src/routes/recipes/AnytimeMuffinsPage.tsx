import RecipeDetailPage from '@/components/recipe/RecipeDetailPage'

// Images sourced from eatwell101.com — replace with licensed artwork before launch
const BASE = 'https://www.eatwell101.com/wp-content/uploads/2024/02'

// Cartoon SVG illustration — savoury cheesy muffin
function MuffinCartoon() {
  return (
    <svg viewBox="0 0 200 220" width="220" height="240" aria-hidden="true" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}>
      {/* Muffin paper cup */}
      <path d="M60 150 L55 210 L145 210 L140 150 Z" fill="#C8102E" />
      {/* Vertical white stripes on cup */}
      {[70, 85, 100, 115, 130].map((x) => (
        <line key={x} x1={x} y1="152" x2={x - 4} y2="208" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
      ))}
      {/* Cup rim */}
      <rect x="52" y="146" width="96" height="10" rx="4" fill="#A00020" />

      {/* Muffin dome body */}
      <ellipse cx="100" cy="110" rx="55" ry="48" fill="#D4A96A" />
      {/* Dome highlight */}
      <ellipse cx="83" cy="88" rx="18" ry="12" fill="#E8C480" opacity="0.6" />

      {/* Crispy top crust */}
      <path d="M50 118 Q55 90 70 80 Q85 65 100 62 Q115 65 130 80 Q145 90 150 118 Z" fill="#C8842A" />
      {/* Top crust highlight */}
      <ellipse cx="88" cy="78" rx="14" ry="8" fill="#DDA040" opacity="0.5" />

      {/* Cheese specks */}
      <circle cx="88" cy="95" r="4" fill="#FFD54F" />
      <circle cx="106" cy="88" r="3.5" fill="#FFD54F" />
      <circle cx="118" cy="100" r="3" fill="#FFD54F" />
      <circle cx="80" cy="108" r="3" fill="#FFD54F" />

      {/* Zucchini green bits */}
      <ellipse cx="96" cy="72" rx="3" ry="5" fill="#4CAF50" />
      <ellipse cx="108" cy="75" rx="2.5" ry="4" fill="#388E3C" />
      <ellipse cx="85" cy="78" rx="2" ry="4" fill="#4CAF50" />

      {/* Steam curls */}
      <path d="M80 58 Q76 50 80 43 Q84 36 80 28" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M100 54 Q96 46 100 38 Q104 30 100 22" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M120 58 Q116 50 120 43 Q124 36 120 28" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

      {/* Parmesan sprinkle on top */}
      <circle cx="93" cy="67" r="2.5" fill="#FFF9C4" opacity="0.9" />
      <circle cx="105" cy="64" r="2" fill="#FFF9C4" opacity="0.9" />
      <circle cx="115" cy="70" r="2" fill="#FFF9C4" opacity="0.9" />
    </svg>
  )
}

export default function AnytimeMuffinsPage() {
  return (
    <RecipeDetailPage
      foodCartoon={<MuffinCartoon />}
      title="Anytime Muffins"
      tagline="Breaky on the run, after-school snacks & lunchbox hero!"
      makes="Makes 8 muffins"
      accentColor="#C8102E"
      helperSectionColor="#C8102E"
      helperTagline="Crack eggs, sprinkle cheese and watch the muffins rise — great jobs for little helpers!"
      introText={[
        'A yummy little muffin packed with goodness, perfect for busy mornings, lunchboxes, after-school snacks or a quick bite before sport.',
        'These savoury muffins are soft, cheesy and full of flavour — a great option for kids who love finger food and parents who want something nourishing, filling and easy to prepare.',
        'They are also a fun recipe for children to help make. Little helpers can crack eggs, stir the mixture, sprinkle cheese on top and watch the muffins rise in the oven.',
      ]}
      perfectFor={[
        '🌅 Breakfast on the run',
        '🎒 After school snacks',
        '📦 Lunchboxes',
        '👨‍👩‍👧 Weekend baking with kids',
        '🏉 Pre or post training fuel',
        '🚗 Road trips and busy days',
      ]}
      goodBecause={[
        { icon: '💪', text: 'High in protein' },
        { icon: '😋', text: 'Full of flavour' },
        { icon: '🥦', text: 'Packed with hidden veg' },
        { icon: '👶', text: 'Easy for kids to help make' },
        { icon: '🌡️', text: 'Great warm or cold' },
        { icon: '🍱', text: 'Lunchbox friendly' },
        { icon: '🍳', text: 'Perfect for meal prep' },
      ]}
      gallery={[
        { src: `${BASE}/cheesy-zucchini-egg-muffins-recipe-easy-800x800.jpg`, alt: 'Golden cheesy zucchini egg muffins' },
        { src: `${BASE}/easy-Egg-Muffins-recipe.jpg`, alt: 'Easy egg muffins stacked on a board' },
        { src: `${BASE}/baked-egg-muffins.jpg`, alt: 'Baked egg muffins fresh from the oven' },
        { src: `${BASE}/zucchini-egg-muffins.jpg`, alt: 'Zucchini egg muffins close up' },
        { src: `${BASE}/baked-egg-muffins-in-a-plate.jpg`, alt: 'Baked muffins on a plate ready to serve' },
        { src: `${BASE}/egg-muffins.jpg`, alt: 'Egg muffins with vegetables' },
      ]}
      ingredientGroups={[{
        items: [
          '1 cup plain cottage cheese',
          '¾ cup parmesan cheese',
          '¼ cup flour',
          '1 cup almond meal',
          '1 teaspoon baking powder',
          '¼ cup water',
          '4 eggs, lightly beaten',
          '½ teaspoon salt',
          '½ red onion, diced',
          '1 zucchini, grated',
          '1 clove garlic, crushed',
          '¼ cup bacon, diced',
          'Optional: ⅓ cup freshly chopped herbs',
        ],
      }]}
      method={[
        "Preheat oven to 200°C. Line a muffin pan with eight medium-sized paper baking cups.",
        'Add all ingredients into a large bowl, except ¼ cup of the parmesan cheese. Mix well until everything is combined.',
        'Spoon the mixture into the muffin cups until they are about ¾ full.',
        'Sprinkle the remaining parmesan cheese and fresh herbs on top.',
        'Bake for 30–35 minutes, or until the muffins are set, risen and golden brown.',
        'Serve warm or at room temperature.',
      ]}
      helperJobs={[
        { icon: '🥚', job: 'Crack the eggs into a bowl' },
        { icon: '🧀', job: 'Sprinkle the cheese on top' },
        { icon: '🥄', job: 'Mix the ingredients together' },
        { icon: '🥒', job: 'Help grate the zucchini (with a grown-up)' },
        { icon: '🧁', job: 'Place the paper cups into the muffin tray' },
        { icon: '✏️', job: 'Name the muffins before they go in the oven' },
      ]}
      parentTips={[
        { icon: '💧', tip: 'Squeeze moisture out of the grated zucchini before adding — this helps the muffins hold their shape.' },
        { icon: '✌️', tip: 'Make a double batch and keep extras in the fridge for quick snacks during the week.' },
        { icon: '❄️', tip: 'Freeze individually and reheat gently in the oven or microwave when needed.' },
        { icon: '🌡️', tip: 'Let muffins cool completely before packing into lunchboxes.' },
      ]}
      easySwaps={[
        { icon: '🥓', swap: 'Swap bacon', forText: 'for ham, chicken, or leave it out for a vegetarian version' },
        { icon: '🌽', swap: 'Add corn', forText: 'for a touch of natural sweetness' },
        { icon: '🌿', swap: 'Add spinach', forText: 'for an extra serve of greens' },
        { icon: '🧀', swap: 'Use cheddar', forText: 'instead of parmesan for a milder, kid-friendly flavour' },
        { icon: '🌶️', swap: 'Add paprika', forText: 'for extra colour and a subtle warmth' },
      ]}
      storage={[
        { icon: '🧊', title: 'Fridge', text: 'Store in an airtight container for up to three days.' },
        { icon: '❄️', title: 'Freezer', text: 'Wrap individually and place in a freezer-safe container.' },
        { icon: '🔥', title: 'Reheating', text: 'Reheat gently in the oven or microwave, or pack cold into lunchboxes.' },
      ]}
    />
  )
}
