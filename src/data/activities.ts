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
    image: '/activities/design-your-own-jersey-header.jpg',
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
    id: 'colour-in-jack',
    title: 'Colour in Jack',
    description: 'Grab your colours and bring Jack to life — cap backwards, aerodynamic. It\'s science!',
    category: 'colouring',
    image: '',
    altText: 'Outline drawing of Jack ready to colour in',
    characterId: 'jack',
    emoji: '🖍️',
    ctaLabel: 'Start Colouring',
    ctaAction: 'link',
    ctaHref: '/colouring',
    featured: false,
    comingSoon: false,
    tags: ['jack', 'colouring', 'printable'],
  },
  {
    id: 'which-one-sounds-like-you',
    title: 'Which one sounds like you?',
    description: 'Jack and Ruby have different ways of doing things. Circle the ones that sound most like you!',
    category: 'printable',
    image: '',
    altText: 'A printable activity sheet comparing Jack and Ruby\'s different styles',
    characterId: 'jack',
    emoji: '⭕',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: false,
    comingSoon: true,
    tags: ['jack', 'ruby', 'personality', 'printable'],
  },
  {
    id: 'help-jack-maze',
    title: 'Help Jack Get to the Footy Field!',
    description: "Jack has to make it to the footy field before kick-off. Can you help him find the way?",
    category: 'puzzle',
    image: '/activities/help-jack-maze-header.jpg',
    altText: 'Illustrated maze with Jack at the start, footy field at the end',
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
    id: 'colour-in-reggie',
    title: 'Colour in Reggie',
    description: 'Grab your red and green pencils and bring Grandpa Reggie to life!',
    category: 'colouring',
    image: '',
    altText: 'Outline drawing of Reggie ready to colour in',
    characterId: 'reggie',
    emoji: '🖍️',
    ctaLabel: 'Start Colouring',
    ctaAction: 'link',
    ctaHref: '/colouring',
    featured: false,
    comingSoon: false,
    tags: ['reggie', 'colouring', 'printable'],
  },
  {
    id: 'reggies-game-day-plate',
    title: "Reggie's Game Day Plate",
    description: "You've got to fuel up before the big game! Let's fill a plate together.",
    category: 'healthy-eating',
    image: '/activities/kitchen-header.jpg',
    altText: "Reggie with a plate ready to fill with healthy game day food",
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
    image: '/activities/bag-header.jpg',
    altText: 'An open sports bag ready to be packed with game day essentials',
    characterId: 'reggie',
    emoji: '🎒',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: true,
    comingSoon: true,
    tags: ['game-day', 'printable'],
  },
  {
    id: 'colour-in-ruby',
    title: 'Colour in Ruby',
    description: 'Grab your pinks and greens and bring Ruby to life — glasses and all!',
    category: 'colouring',
    image: '',
    altText: 'Outline drawing of Ruby ready to colour in',
    characterId: 'ruby',
    emoji: '🖍️',
    ctaLabel: 'Start Colouring',
    ctaAction: 'link',
    ctaHref: '/colouring',
    featured: false,
    comingSoon: false,
    tags: ['ruby', 'colouring', 'printable'],
  },
  {
    id: 'which-one-sounds-like-you-ruby',
    title: 'Which one sounds like you?',
    description: 'Jack and Ruby have different ways of doing things. Circle the ones that sound most like you!',
    category: 'printable',
    image: '',
    altText: 'A printable activity sheet comparing Jack and Ruby\'s different styles',
    characterId: 'ruby',
    emoji: '⭕',
    ctaLabel: 'Download PDF',
    ctaAction: 'alert',
    // TODO: PDF download — link needed
    featured: false,
    comingSoon: true,
    tags: ['ruby', 'jack', 'personality', 'printable'],
  },
  {
    id: 'rubys-team-of-the-day',
    title: "Ruby's Team of the Day",
    description: 'Join Ruby to make a team of people who make you feel good. Who is on your team?',
    category: 'printable',
    image: '/activities/ruby-team-header.jpg',
    altText: 'Ruby with blank cards to fill in your team of the day',
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
    image: '/activities/feeling-header.jpg',
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
    id: 'colour-in-scarlett',
    title: 'Colour in Scarlett',
    description: 'Grab your brightest colours and bring Scarlett to life — snazzy shoes and all!',
    category: 'colouring',
    image: '',
    altText: 'Outline drawing of Scarlett ready to colour in',
    characterId: 'scarlett',
    emoji: '🖍️',
    ctaLabel: 'Start Colouring',
    ctaAction: 'link',
    ctaHref: '/colouring',
    featured: false,
    comingSoon: false,
    tags: ['scarlett', 'colouring', 'printable'],
  },
  {
    id: 'scarletts-obstacle-course',
    title: "Scarlett's Backyard Obstacle Course",
    description: "Scarlett is the fastest of the lot. Try her five-move obstacle course anywhere you like!",
    category: 'game',
    image: '/activities/backyard-header.jpg',
    altText: 'Scarlett demonstrating obstacle course moves in the backyard',
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
    image: '/activities/Colour-in-header.jpg',
    altText: 'Colouring sheets of the Mascot Family characters',
    emoji: '🖍️',
    ctaLabel: 'Start Colouring',
    ctaAction: 'link',
    ctaHref: '/colouring',
    featured: true,
    comingSoon: false,
    tags: ['colouring', 'printable', 'characters'],
  },
  {
    id: 'colour-in-oliver',
    title: 'Colour in Oliver',
    description: 'Grab your browns and greens and bring Oliver to life — bucket hat and all!',
    category: 'colouring',
    image: '',
    altText: 'Outline drawing of Oliver ready to colour in',
    characterId: 'oliver',
    emoji: '🖍️',
    ctaLabel: 'Start Colouring',
    ctaAction: 'link',
    ctaHref: '/colouring',
    featured: false,
    comingSoon: false,
    tags: ['oliver', 'colouring', 'printable'],
  },
  {
    id: 'olivers-bedtime-wind-down',
    title: "Oliver's Bedtime Wind-Down",
    description: "Oliver knows that rest is just as important as running around. Try Oliver's bedtime wind-down routine tonight!",
    category: 'printable',
    image: '/activities/bedroom-header.jpg',
    altText: 'Oliver doing a calm bedtime stretching routine',
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
