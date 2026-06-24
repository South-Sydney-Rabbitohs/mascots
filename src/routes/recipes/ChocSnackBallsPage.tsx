import RecipeDetailPage from '@/components/recipe/RecipeDetailPage'

export default function ChocSnackBallsPage() {
  return (
    <RecipeDetailPage
      title="Choc Snack Balls"
      tagline="A guilt-free chocolatey treat — no baking required!"
      makes="Makes 12 balls"
      accentColor="#007A3D"
      helperSectionColor="#0D4F2A"
      helperTagline="Choc Snack Balls are one of the best recipes for getting kids involved — especially the rolling and coconut coating!"
      introText={[
        'A fun, chocolatey snack that kids can help make with their parents. These little snack balls are sweet, chewy and rolled in coconut — making them feel like a treat while still being made with simple, nourishing ingredients.',
        'They are perfect for lunchboxes, after-school snacks, weekend food prep or a quick bite when kids need a little energy boost.',
      ]}
      perfectFor={[
        '🍱 Lunchbox treats',
        '🎒 After school snacks',
        '🗓️ Weekend meal prep',
        '🍫 A healthier chocolate fix',
        '👶 Kids\' cooking activities',
        '🚗 Road trips or picnic snacks',
        '⚡ Quick energy bite before sport',
      ]}
      goodBecause={[
        { icon: '🌴', text: 'Naturally sweet from dates' },
        { icon: '🍫', text: 'Chocolatey without being too rich' },
        { icon: '🚫', text: 'No baking needed' },
        { icon: '🤲', text: 'Easy for kids to roll' },
        { icon: '🥄', text: 'Simple pantry ingredients' },
        { icon: '🧊', text: 'Great to keep in the fridge' },
        { icon: '🫐', text: 'Perfect bite-sized snack' },
      ]}
      gallery={[]}
      ingredientGroups={[{
        items: [
          '12 medjool dates, pitted',
          '⅓ cup coconut oil',
          '⅓ cup cacao or cocoa powder',
          '1 cup almond meal',
          '½ cup desiccated coconut',
          '1 tablespoon chia seeds',
          'Extra desiccated coconut, for rolling',
        ],
      }]}
      method={[
        'Place all ingredients into a food processor.',
        'Blend until the dates are thoroughly chopped and the mixture has a sticky, crumbly texture.',
        'Scoop out small amounts of the mixture and roll into approximately 12 even balls.',
        'Roll each ball in extra desiccated coconut until fully coated.',
        'Place the balls on a plate and pop them in the fridge until set.',
        'Store in the fridge and enjoy when you need a yummy snack!',
      ]}
      helperJobs={[
        { icon: '🌴', job: 'Count out the dates' },
        { icon: '🔌', job: 'Add ingredients to the food processor (with supervision)' },
        { icon: '🥄', job: 'Help scoop the mixture' },
        { icon: '🤲', job: 'Roll the mixture into balls' },
        { icon: '🥥', job: 'Coat each ball in coconut' },
        { icon: '🍽️', job: 'Place the finished snack balls on the plate' },
      ]}
      parentTips={[
        { icon: '💧', tip: 'If the mixture feels too dry, add a tiny splash of water or a little extra coconut oil.' },
        { icon: '❄️', tip: 'If the mixture feels too soft, pop it in the fridge for 10–15 minutes before rolling.' },
        { icon: '🤲', tip: 'Use damp hands when rolling to stop the mixture from sticking.' },
        { icon: '✌️', tip: 'Make a double batch and keep extras in the fridge for the whole week.' },
        { icon: '🧊', tip: 'For lunchboxes, pack with an ice brick so they stay firm and fresh.' },
      ]}
      easySwaps={[
        { icon: '🍫', swap: 'Use cocoa powder', forText: 'for a milder, more familiar chocolate flavour' },
        { icon: '🌑', swap: 'Use cacao powder', forText: 'for a richer, slightly more intense chocolate taste' },
        { icon: '🌱', swap: 'Swap chia seeds', forText: 'for flaxseed meal for the same fibre boost' },
        { icon: '🥜', swap: 'Add peanut butter', forText: 'or almond butter for a nutty, satisfying flavour' },
        { icon: '🍦', swap: 'Add vanilla', forText: 'a few drops for extra natural sweetness' },
        { icon: '🌾', swap: 'Roll in crushed seeds', forText: 'or crushed cereal instead of coconut for variety' },
      ]}
      storage={[
        { icon: '🧊', title: 'Fridge', text: 'Store in an airtight container for up to one week.' },
        { icon: '❄️', title: 'Freezer', text: 'Freeze in a freezer-safe container. Thaw in the fridge before eating.' },
        { icon: '🍱', title: 'Lunchboxes', text: 'Pack with an ice brick so they stay firm and fresh on the go.' },
      ]}
    />
  )
}
