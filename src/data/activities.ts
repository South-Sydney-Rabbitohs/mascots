export type ActivityCategory =
  | 'colouring'
  | 'puzzle'
  | 'game'
  | 'printable'
  | 'healthy-eating'
  | 'video'

export interface Activity {
  id: string
  title: string
  description: string
  category: ActivityCategory
  image: string
  altText: string
  characterId?: string
  emoji: string
  ctaLabel: string
  ctaAction: 'download' | 'link' | 'alert'
  ctaHref?: string
  featured: boolean
  comingSoon: boolean
  tags: string[]
}

export const activities: Activity[] = [
  {
    id: 'colouring-jack',
    title: 'Colour In Jack!',
    description: 'Download and print your very own Jack Rabbit colouring sheet. Grab your pencils and go!',
    category: 'colouring',
    image: '',
    altText: 'Outline drawing of Jack Rabbit ready to colour in',
    characterId: 'jack',
    emoji: '🎨',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — activity PDFs not yet produced
    featured: true,
    comingSoon: true,
    tags: ['jack', 'colouring', 'printable'],
  },
  {
    id: 'jacks-favourite-food',
    title: "Jack's Favourite Food",
    description: 'What does a speedy rabbit eat to keep up with game day? Find out and try the recipe!',
    category: 'healthy-eating',
    image: '',
    altText: 'Cartoon of Jack Rabbit eating healthy food',
    characterId: 'jack',
    emoji: '🥕',
    ctaLabel: 'See the Recipe',
    ctaAction: 'alert',
    // TODO: Jetpack CMS integration for recipe content
    featured: true,
    comingSoon: true,
    tags: ['jack', 'food', 'healthy-eating'],
  },
  {
    id: 'scavenger-hunt',
    title: "Jack's Scavenger Hunt",
    description: 'Follow the clues through the park with Jack. Can you find all 10 hidden objects?',
    category: 'puzzle',
    image: '',
    altText: 'A colourful illustrated maze with Jack Rabbit at the start',
    characterId: 'jack',
    emoji: '🗺️',
    ctaLabel: 'Start the Hunt',
    ctaAction: 'alert',
    featured: true,
    comingSoon: true,
    tags: ['jack', 'maze', 'puzzle', 'printable'],
  },
  {
    id: 'spot-the-difference',
    title: 'Spot the Difference',
    description: 'Can you find all 7 differences between these two Burrow Bunnies pictures? Put your eyes to the test!',
    category: 'puzzle',
    image: '',
    altText: 'Two similar Burrow Bunnies illustrations side by side for a spot-the-difference activity',
    characterId: 'jack',
    emoji: '🔍',
    ctaLabel: 'Play Now',
    ctaAction: 'alert',
    featured: true,
    comingSoon: true,
    tags: ['puzzle', 'spot-the-difference', 'printable'],
  },
  {
    id: 'jigsaw-puzzle',
    title: 'Burrow Bunnies Jigsaw',
    description: 'Put the Burrow Bunnies back together in this fun online jigsaw puzzle. How fast can you do it?',
    category: 'game',
    image: '',
    altText: 'Jumbled jigsaw pieces of the Burrow Bunnies',
    emoji: '🧩',
    ctaLabel: 'Play Now',
    ctaAction: 'alert',
    featured: true,
    comingSoon: true,
    tags: ['puzzle', 'jigsaw', 'game'],
  },
  {
    id: 'footy-quiz',
    title: 'Rabbitohs Footy Quiz',
    description: 'How much do you know about the South Sydney Rabbitohs? Test your footy knowledge now!',
    category: 'game',
    image: '',
    altText: 'A quiz card with Rabbitohs colours and a question mark',
    emoji: '🏉',
    ctaLabel: 'Take the Quiz',
    ctaAction: 'alert',
    featured: false,
    comingSoon: true,
    tags: ['quiz', 'game', 'footy'],
  },
  {
    id: 'design-your-jersey',
    title: 'Design Your Jersey',
    description: 'Create your own Rabbitohs jersey! Pick your number, choose your colours and print it out.',
    category: 'game',
    image: '',
    altText: 'Blank Rabbitohs jersey template ready to colour and design',
    emoji: '👕',
    ctaLabel: 'Start Designing',
    ctaAction: 'alert',
    featured: false,
    comingSoon: true,
    tags: ['design', 'printable', 'jersey'],
  },
]

export function getActivitiesByCharacter(characterId: string): Activity[] {
  return activities.filter((a) => a.characterId === characterId)
}

export function getFeaturedActivities(): Activity[] {
  return activities.filter((a) => a.featured)
}
