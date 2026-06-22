import RecipeDetailPage from '@/components/recipe/RecipeDetailPage'

// Images sourced from sidechef.com — replace with licensed artwork before launch
const SC = 'https://www.sidechef.com/recipe'

// Cartoon SVG illustration — chocolate coconut bliss balls on a plate
function ChocBallsCartoon() {
  return (
    <svg viewBox="0 0 220 200" width="240" height="220" aria-hidden="true" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}>
      {/* Plate */}
      <ellipse cx="110" cy="178" rx="88" ry="18" fill="#F0EAD6" stroke="#DDD0B0" strokeWidth="2" />
      <ellipse cx="110" cy="174" rx="88" ry="18" fill="#FAFAF5" stroke="#DDD0B0" strokeWidth="2" />
      {/* Plate rim highlight */}
      <ellipse cx="110" cy="174" rx="72" ry="13" fill="none" stroke="#EEE8D4" strokeWidth="2" />

      {/* Back-left ball */}
      <circle cx="75" cy="148" r="32" fill="#4E2A0A" />
      <circle cx="65" cy="138" r="10" fill="#6B3E1A" opacity="0.5" />
      {/* Coconut dots — back left ball */}
      {[[78,138],[60,150],[82,158],[70,132],[88,145],[63,162]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="white" opacity="0.85" />
      ))}

      {/* Back-right ball */}
      <circle cx="148" cy="145" r="31" fill="#5A3010" />
      <circle cx="138" cy="134" r="10" fill="#7A4A20" opacity="0.5" />
      {/* Coconut dots — back right ball */}
      {[[152,136],[138,148],[160,152],[145,132],[162,142],[136,158]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="white" opacity="0.85" />
      ))}

      {/* Front-centre ball (largest, focal) */}
      <circle cx="110" cy="138" r="38" fill="#3D1F05" />
      <circle cx="96" cy="122" r="13" fill="#5A3010" opacity="0.45" />
      {/* Coconut dots — front ball */}
      {[[115,122],[96,132],[128,138],[100,148],[122,152],[108,118],[136,126],[90,145],[120,162],[104,160]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="white" opacity="0.88" />
      ))}
      {/* Shine on front ball */}
      <ellipse cx="100" cy="120" rx="9" ry="6" fill="white" opacity="0.15" />

      {/* Scattered coconut flakes on plate */}
      {[[158,170],[68,172],[130,180],[88,176],[145,176]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="1.5" fill="white" opacity="0.6" transform={`rotate(${i*35},${x},${y})`} />
      ))}
    </svg>
  )
}

export default function ChocSnackBallsPage() {
  return (
    <RecipeDetailPage
      foodCartoon={<ChocBallsCartoon />}
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
      gallery={[
        { src: `${SC}/afc8151a-da0c-4d30-a566-cd61c38b0031.jpg?d=1408x1120`, alt: 'Chocolate coconut snack balls on a plate' },
        { src: `${SC}/c86004d3-c755-45bf-954f-981d4469cd85.jpg?d=1408x1120`, alt: 'Ingredients going into a food processor' },
        { src: `${SC}/9435fe45-e2b9-4e1a-9118-1be7826cdd43.jpg?d=1408x1120`, alt: 'Rolling mixture into balls by hand' },
        { src: `${SC}/e8ac7e8d-ac82-4400-807d-77d825de5f59.jpg?d=1408x1120`, alt: 'Balls being coated in desiccated coconut' },
      ]}
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
