import RecipeDetailPage from '@/components/recipe/RecipeDetailPage'

// Images sourced from cottercrunch.com — replace with licensed artwork before launch
const BASE = 'https://www.cottercrunch.com/wp-content/uploads/2017/03/No-Bake-Apricot-Oat-Protein-Bars-Nut-Free-Vegan-7'

// Cartoon SVG illustration — stacked oat bars with chocolate drizzle
function OatBarsCartoon() {
  return (
    <svg viewBox="0 0 220 210" width="240" height="230" aria-hidden="true" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}>
      {/* Shadow */}
      <ellipse cx="110" cy="196" rx="82" ry="10" fill="rgba(0,0,0,0.15)" />

      {/* Bottom bar */}
      <rect x="28" y="148" width="164" height="44" rx="8" fill="#C8A95A" />
      {/* Oat texture dots — bottom bar */}
      {[[40,160],[55,168],[70,156],[85,164],[100,158],[115,165],[130,157],[145,163],[155,170],[168,158],[48,174],[80,174],[110,172],[140,174],[160,174]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#A07830" opacity="0.6" />
      ))}
      {/* Apricot bits — bottom bar */}
      {[[60,162],[95,170],[135,160],[158,166]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="5" ry="4" fill="#FF8C42" opacity="0.85" />
      ))}

      {/* Middle bar */}
      <rect x="34" y="104" width="152" height="48" rx="8" fill="#D4B468" />
      {/* Oat texture dots — middle bar */}
      {[[46,116],[62,124],[78,113],[94,120],[108,115],[124,122],[138,114],[152,121],[164,116],[52,130],[82,132],[112,128],[142,130],[162,128]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#A88040" opacity="0.55" />
      ))}
      {/* Apricot bits — middle bar */}
      {[[68,118],[108,126],[148,116]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="5" ry="4" fill="#FF8C42" opacity="0.85" />
      ))}
      {/* Chocolate drizzle — middle bar */}
      <path d="M40 106 Q60 100 80 106 Q100 112 120 106 Q140 100 160 106 Q175 110 180 106" fill="none" stroke="#3D1F05" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 114 Q65 108 86 114 Q107 120 128 114 Q149 108 170 114" fill="none" stroke="#3D1F05" strokeWidth="3.5" strokeLinecap="round" />

      {/* Top bar (focal) */}
      <rect x="40" y="56" width="140" height="52" rx="8" fill="#E0C07A" />
      {/* Oat texture dots — top bar */}
      {[[52,68],[68,76],[84,65],[100,72],[114,67],[130,74],[144,66],[156,73],[165,80],[58,84],[88,86],[118,82],[148,84],[168,78]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#B09050" opacity="0.55" />
      ))}
      {/* Pepita seeds — top bar */}
      {[[75,70],[105,78],[133,68],[155,76]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="3" fill="#7CB87A" opacity="0.85" transform={`rotate(${i*40},${x},${y})`} />
      ))}
      {/* Apricot bits — top bar */}
      {[[60,80],[98,70],[140,80]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="4.5" fill="#FF8C42" opacity="0.9" />
      ))}
      {/* Chocolate drizzle — top bar (thicker, more prominent) */}
      <path d="M44 60 Q68 52 92 60 Q116 68 140 60 Q158 54 176 60" fill="none" stroke="#3D1F05" strokeWidth="5" strokeLinecap="round" />
      <path d="M48 70 Q72 62 96 70 Q120 78 144 70 Q162 64 174 70" fill="none" stroke="#3D1F05" strokeWidth="4" strokeLinecap="round" />
      {/* Chocolate gloss */}
      <path d="M56 59 Q72 55 88 59" fill="none" stroke="#6B3E1A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* Bar edge highlights */}
      <rect x="40" y="56" width="140" height="6" rx="4" fill="white" opacity="0.12" />
      <rect x="34" y="104" width="152" height="6" rx="4" fill="white" opacity="0.10" />
    </svg>
  )
}

export default function NoBakeOatBarsPage() {
  return (
    <RecipeDetailPage
      foodCartoon={<OatBarsCartoon />}
      title="No-Bake Oat Bars"
      tagline="With Dark Chocolate Drizzle — mix, press, chill and enjoy!"
      makes="Makes 10 bars"
      accentColor="#007A3D"
      helperSectionColor="#51319C"
      helperTagline="Pressing the mixture into the tray and drizzling the chocolate are the best bits — perfect little helper jobs!"
      introText={[
        'A chewy, crunchy and naturally sweet snack bar that kids can help make with their parents. These oat bars are packed with simple ingredients, topped with a little dark chocolate drizzle, and set in the fridge with no oven needed.',
        'They are perfect for lunchboxes, after-school snacks, weekend food prep or a quick grab-and-go bite before sport, dance, school or play.',
      ]}
      perfectFor={[
        '🍱 Lunchbox snacks',
        '🎒 After school snacks',
        '🌅 Breakfast on the go',
        '🗓️ Weekend food prep',
        '🚗 Road trips or picnic snacks',
        '⚡ Pre sport energy bites',
        '🍫 A healthier sweet treat',
      ]}
      goodBecause={[
        { icon: '🚫', text: 'No baking needed' },
        { icon: '🌴', text: 'Naturally sweet from dates & apricots' },
        { icon: '🌾', text: 'Oats for longer lasting energy' },
        { icon: '👶', text: 'Easy for kids to help make' },
        { icon: '🍫', text: 'Crunchy, chewy and chocolatey' },
        { icon: '🍳', text: 'Great for meal prep' },
        { icon: '❄️', text: 'Perfect for fridge or freezer' },
      ]}
      gallery={[
        { src: `${BASE}.jpg`, alt: 'No-bake oat bars with dark chocolate drizzle' },
        { src: `${BASE}-700x923.jpg`, alt: 'Apricot oat bars stacked close up' },
        { src: `${BASE}-777x1024.jpg`, alt: 'Oat bars with chocolate drizzle detail' },
      ]}
      ingredientGroups={[
        {
          title: 'Oat Bars',
          items: [
            '1 heaped cup dates, shelf-stable or fresh',
            '¼ cup maple syrup or honey',
            '¼ cup peanut butter or nut-free crunchy spread',
            '½ cup pepitas, finely chopped',
            '½ cup dried apricots, finely chopped',
            '1½ cups rolled oats',
          ],
        },
        {
          title: 'Dark Chocolate Drizzle',
          items: [
            '80g dark chocolate, chopped',
            '1 teaspoon coconut oil (optional, for a smoother drizzle)',
          ],
        },
      ]}
      method={[
        'Place the dates in a food processor and blend until small pieces remain and the mixture forms a sticky, dough-like texture.',
        'In a large mixing bowl, combine the rolled oats, pepitas, dried apricots and processed dates.',
        'Warm the maple syrup or honey and peanut butter in a small saucepan over low heat until smooth and well combined.',
        'Pour the warm peanut butter mixture over the oat mixture and stir thoroughly. Break up the dates as you mix so they are evenly spread through the bars.',
        'Transfer the mixture to a small baking dish lined with baking paper.',
        'Press the mixture down firmly until it is flat and even. The firmer you press, the better the bars will hold together.',
        'Cover and refrigerate or freeze for 15–20 minutes, or until firm.',
        'Melt the dark chocolate and coconut oil (if using) in a heatproof bowl over simmering water or in the microwave in 20-second bursts, stirring until smooth.',
        'Remove the chilled slice from the pan and drizzle the melted chocolate over the top.',
        'Return to the fridge for 10 minutes, or until the chocolate has set.',
        'Cut into 10 even bars.',
        'Store in an airtight container in the fridge for up to one week, or in the freezer for longer.',
      ]}
      helperJobs={[
        { icon: '🌾', job: 'Add the oats to the mixing bowl' },
        { icon: '📏', job: 'Help measure the pepitas and dried apricots' },
        { icon: '🥄', job: 'Stir the mixture with a big spoon' },
        { icon: '✋', job: 'Press the mixture firmly into the tray' },
        { icon: '🍫', job: 'Drizzle the chocolate with help from an adult' },
        { icon: '🔢', job: 'Count the bars once they are cut' },
      ]}
      parentTips={[
        { icon: '🔪', tip: 'Chop the apricots and pepitas finely so the bars hold together better.' },
        { icon: '✋', tip: 'Press the mixture very firmly into the tray before chilling — this helps stop the bars from crumbling.' },
        { icon: '📄', tip: 'Use baking paper with extra overhang so you can easily lift the slice out of the tray.' },
        { icon: '🥜', tip: 'For a lunchbox-friendly option, use a nut-free spread instead of peanut butter.' },
        { icon: '📐', tip: 'Cut into smaller squares for younger kids or bigger bars for older kids.' },
      ]}
      easySwaps={[
        { icon: '🌻', swap: 'Swap peanut butter', forText: 'for sunflower seed butter or another nut-free spread' },
        { icon: '🍯', swap: 'Use honey', forText: 'for a softer, sweeter flavour' },
        { icon: '🍁', swap: 'Use maple syrup', forText: 'for a plant-based option' },
        { icon: '🍒', swap: 'Swap dried apricots', forText: 'for raisins, cranberries or dried apple' },
        { icon: '🌶️', swap: 'Add cinnamon', forText: 'a sprinkle for extra warmth and depth' },
        { icon: '🍫', swap: 'Skip the chocolate drizzle', forText: 'for a simpler everyday snack' },
      ]}
      storage={[
        { icon: '🧊', title: 'Fridge', text: 'Store in an airtight container for up to one week.' },
        { icon: '❄️', title: 'Freezer', text: 'Freeze in a sealed container with baking paper between layers.' },
        { icon: '🍱', title: 'Lunchboxes', text: 'Pack cold with an ice brick to keep them firm and fresh.' },
      ]}
    />
  )
}
