import RecipeDetailPage from '@/components/recipe/RecipeDetailPage'

export default function AnytimeMuffinsPage() {
  return (
    <RecipeDetailPage
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
      gallery={[]}
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
