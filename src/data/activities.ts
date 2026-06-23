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
    id: 'design-your-jersey',
    title: 'Design your own Jersey',
    description: 'Draw and colour in a jersey that represents you!',
    category: 'colouring',
    image: '',
    altText: 'Blank jersey template ready to colour and design',
    emoji: '👕',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['design', 'colouring', 'printable'],
  },
  {
    id: 'help-jack-maze',
    title: 'Help Jack Get to the Footy Field!',
    description: "Jack has to make it to the footy field before kick-off. Can you help him find the way?",
    category: 'puzzle',
    image: '',
    altText: 'Illustrated maze with Jack Rabbit at the start, footy field at the end',
    characterId: 'jack',
    emoji: '🗺️',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['jack', 'maze', 'puzzle', 'printable'],
  },
  {
    id: 'reggies-game-day-plate',
    title: "Reggie's Game Day Plate",
    description: "You've got to fuel up before the big game! Let's fill a plate together.",
    category: 'healthy-eating',
    image: '',
    altText: "Reggie Rabbit with a plate ready to fill with healthy game day food",
    characterId: 'reggie',
    emoji: '🍽️',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['reggie', 'healthy-eating', 'printable'],
  },
  {
    id: 'pack-your-bag',
    title: 'What would you pack in your game bag?',
    description: "It's game day! Let's pack our bags together!",
    category: 'game',
    image: '',
    altText: 'An open sports bag ready to be packed with game day essentials',
    emoji: '🎒',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['game-day', 'printable'],
  },
  {
    id: 'rubys-team-of-the-day',
    title: "Ruby's Team of the Day",
    description: 'Join Ruby to make a team of people who make you feel good. Who is on your team?',
    category: 'printable',
    image: '',
    altText: 'Ruby Rabbit with blank cards to fill in your team of the day',
    characterId: 'ruby',
    emoji: '⭐',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['ruby', 'wellbeing', 'printable'],
  },
  {
    id: 'how-are-you-feeling',
    title: 'How are you feeling today?',
    description: 'Everyone feels different things at different times, and that is completely okay. Colour in the feeling that matches how you feel.',
    category: 'colouring',
    image: '',
    altText: 'A page of illustrated faces with different emotions ready to colour in',
    emoji: '😊',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['emotions', 'wellbeing', 'colouring', 'printable'],
  },
  {
    id: 'scarletts-obstacle-course',
    title: "Scarlett's Backyard Obstacle Course",
    description: "Scarlett is the fastest of the lot. Try her five-move obstacle course anywhere you like!",
    category: 'game',
    image: '',
    altText: 'Scarlett Rabbit demonstrating obstacle course moves in the backyard',
    characterId: 'scarlett',
    emoji: '⚡',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['scarlett', 'active', 'printable'],
  },
  {
    id: 'colour-in-characters',
    title: 'Colour In All Your Favourite Characters!',
    description: 'Five characters, five colouring sheets — plus bonus scenes! Pick your favourite or do them all.',
    category: 'colouring',
    image: '',
    altText: 'Colouring sheets of the Burrow Bunnies characters',
    emoji: '🖍️',
    ctaLabel: 'Start Colouring',
    ctaAction: 'link',
    ctaHref: '/colouring',
    featured: true,
    comingSoon: false,
    tags: ['colouring', 'printable', 'characters'],
  },
  {
    id: 'olivers-bedtime-wind-down',
    title: "Oliver's Bedtime Wind-Down",
    description: "Oliver knows that rest is just as important as running around. Try Oliver's bedtime wind-down routine tonight!",
    category: 'printable',
    image: '',
    altText: 'Oliver Rabbit doing a calm bedtime stretching routine',
    characterId: 'oliver',
    emoji: '🌙',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['oliver', 'wellbeing', 'sleep', 'printable'],
  },
]

export function getActivitiesByCharacter(characterId: string): Activity[] {
  return activities.filter((a) => a.characterId === characterId)
}

export function getFeaturedActivities(): Activity[] {
  return activities.filter((a) => a.featured)
}
