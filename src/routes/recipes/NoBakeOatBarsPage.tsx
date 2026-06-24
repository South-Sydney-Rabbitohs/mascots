import RecipeDetailPage from '@/components/recipe/RecipeDetailPage'

export default function NoBakeOatBarsPage() {
  return (
    <RecipeDetailPage
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
      gallery={[]}
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
