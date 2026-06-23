export interface Moment {
  id: string
  title: string
  description: string
  image: string
  altText: string
}

export interface Character {
  id: string
  slug: string
  firstName: string
  lastName: string
  catchphrase: string
  tagline: string
  bio: string[]
  species: string
  lives: string
  occupation: string
  hero: string
  dream: string
  relatedCharacters: string[]
  accentColor: string
  cardImage: string
  heroImage: string
  thumbImage: string
  bestMoments: Moment[]
  activityIds: string[]
  available: boolean
  emoji: string
}

export const characters: Character[] = [
  // Order: Reggie, Scarlett, Jack, Ruby, Oliver
  {
    id: 'reggie',
    slug: 'reggie',
    firstName: 'Reggie',
    lastName: 'Rabbit',
    catchphrase: 'South Sydney forever!',
    tagline: 'The original Burrow Bunny — South Sydney legend, proud Poppy, and the one who started it all.',
    bio: [
      "You might have seen me around the grounds for a while now. I'm the white rabbit with a big smile and an even bigger heart for this Club. I've been a Rabbitoh since 1968, which is a very long time in rabbit years (don't ask). I've been on the sidelines for some of our greatest victories and our most heartbreaking losses, but my love for this Club has never waned. I'm Head Cheerleader, Chief Hugger, the Boss of High-Fives and Grandfather-in-Chief of the Rabbitohs.",
      "I met my beautiful Rosa at the old tuck shop down the road, and together we raised our wonderful daughter, Scarlett. Scarlett gave me two of the best things I've ever had, my grandkids, Ruby and Jack. And then there's Oliver, my son-in-law, who has grown a passion for our Club.",
      "My advice to you, young Rabbitoh? Back yourself. Love your team. Drink your carrot juice. And never, ever boo South Sydney. Up the Rabbitohs!",
    ],
    species: 'Rabbit',
    lives: 'With the Burrow Bunnies in Redfern',
    occupation: "Head Cheerleader, Chief Hugger, Boss of High-Fives & Grandfather-in-Chief",
    hero: 'The South Sydney Rabbitohs',
    dream: 'A Premiership for the grandkids',
    relatedCharacters: ['scarlett', 'jack', 'ruby', 'oliver'],
    accentColor: '#057543',
    cardImage: '/characters/reggie-card.svg',
    heroImage: '/characters/reggie-hero.svg',
    thumbImage: '',
    bestMoments: [
      {
        id: 'reggie-moment-og',
        title: 'Rabbitoh Since 1968',
        description: "Reggie has been a Rabbitoh since before colour television. Through every victory and every heartbreak, his love for the Club has never waned — not even once.",
        image: '',
        altText: 'Reggie Rabbit proudly wearing his South Sydney Rabbitohs scarf at a packed stadium',
      },
      {
        id: 'reggie-moment-selfie',
        title: 'The Ultimate Selfie',
        description: "The ultimate selfie shooter. No matter where Reggie is at the ground, every snap with him is the best snap of the day. Guaranteed.",
        image: '',
        altText: 'Reggie Rabbit taking a selfie with fans at a Rabbitohs game',
      },
      {
        id: 'reggie-moment-roll',
        title: 'The Reggie Roll',
        description: "When the team needs firing up, Reggie breaks out his legendary move — the Reggie Roll. It gets the crowd going every single time. Science cannot explain it.",
        image: '',
        altText: 'Reggie Rabbit doing his famous Reggie Roll to fire up the South Sydney crowd',
      },
    ],
    activityIds: [],
    available: true,
    emoji: '🏆',
  },
  {
    id: 'scarlett',
    slug: 'scarlett',
    firstName: 'Scarlett',
    lastName: 'Rabbit',
    catchphrase: "Hi, I'm Scarlett — but you can call me Scar.",
    tagline: "Fastest in the family, loudest in the stand — Reggie's daughter through and through!",
    bio: [
      "I'm Reggie's daughter, and yes, I'm every bit as competitive as he is. Actually, maybe more. I've played Rugby League my whole life, captained every side I've ever been in, and I reckon if they had let rabbits into the NRL in the '90s, I'd have a premiership ring of my own by now.",
      "These days I coach Ruby's junior team on Saturday mornings (don't worry, I'm very calm from the sideline, ask anyone). My boy, Jack, thinks I'm the loudest mum at the Rabbitohs games though. He might be right! But when you love something like your kids, your team and your Club, then you go hard. That's just how we're built in this family.",
      "I'll see you at the footy, Rabbitohs. Bring your voice because I will definitely bring mine!",
    ],
    species: 'Rabbit',
    lives: 'With the Burrow Bunnies',
    occupation: "Rugby League coach & Reggie's daughter",
    hero: 'Reggie Rabbit (her dad)',
    dream: 'A premiership ring of her own',
    relatedCharacters: ['reggie', 'jack', 'ruby', 'oliver'],
    accentColor: '#FA623E',
    cardImage: '/characters/scarlett-card.svg',
    heroImage: '',
    thumbImage: '',
    bestMoments: [
      {
        id: 'scarlett-moment-ballgirl',
        title: 'Ball Girl Beginnings',
        description: "Before she was a mum, Scarlett was the ball girl when Grandad Reggie first ran the team out. She's been part of the Rabbitohs story from the very start!",
        image: '',
        altText: 'Young Scarlett Rabbit as ball girl alongside Grandad Reggie at a Rabbitohs game',
      },
      {
        id: 'scarlett-moment-coach',
        title: 'Sideline Coach',
        description: "Scarlett coaches Ruby's junior team every Saturday. She's very calm on the sideline. Just ask anyone!",
        image: '',
        altText: "Scarlett Rabbit coaching Ruby's junior footy team from the sideline",
      },
      {
        id: 'scarlett-moment-loud',
        title: 'Loudest in the Stand',
        description: "If you can hear one voice above all others at a Rabbitohs game, it's Scarlett. When you love your team this much, you go hard.",
        image: '',
        altText: 'Scarlett Rabbit cheering loudly in the stands at a South Sydney Rabbitohs game',
      },
    ],
    activityIds: [],
    available: true,
    emoji: '🏉',
  },
  {
    id: 'jack',
    slug: 'jack',
    firstName: 'Jack',
    lastName: 'Rabbit',
    catchphrase: "HEY HEY! I'm Jack!",
    tagline: "Fastest bunny in the Burrow — cap backwards, aerodynamic. It's science!",
    bio: [
      "I'm Ruby's little brother, and Grandad Reggie's grandson and I am the BEST at… wait, what were we talking about? Oh yeah, ME! I like running, jumping, climbing, talking, skateboarding, surfing, skydiving, and… did I mention running… FAST. My cap goes backwards because it's faster that way. Aerodynamic or something like that. It's a scientific fact!",
      "My absolute number one hero in the whole wide world is my Grandad Reggie. I want to be just like him when I grow up. Maybe a player, maybe a coach, maybe the mascot, maybe all three AT ONCE! Is that allowed? I'll ask Mum and Dad. Actually I just go straight to the OG Rabbit - Grandad Reggie. He'll say YES FOR SURE! I reckon if anyone can do it, then I can do it!",
      "If you see me at the games, give me a high-five. Or a low-five. Or a running-past-you-so-fast-you-didn't-even-see-me-five. I love a selfie too. Any snap with me in it is a good-lookin', cookin' snap! I might be hard to catch sometimes though - Glory glory to South Sydneeeeeeey!",
    ],
    species: 'Rabbit',
    lives: 'With the Burrow Bunnies',
    occupation: 'Adventure expert in training',
    hero: 'Grandad Reggie',
    dream: 'To be a player, coach and mascot — all at once!',
    relatedCharacters: ['reggie', 'scarlett', 'ruby', 'oliver'],
    accentColor: '#046F6A',
    cardImage: '/characters/jack-card.svg',
    heroImage: '',
    thumbImage: '',
    bestMoments: [
      {
        id: 'jack-moment-backwards',
        title: 'The Backwards Singer',
        description: "Jack is the only Rabbit who knows \"Glory Glory to South Sydney\" backwards. Ask him sometime — it's genuinely impressive.",
        image: '',
        altText: 'Jack Rabbit singing with a huge grin on his face',
      },
      {
        id: 'jack-moment-speed',
        title: 'Full Speed Jack',
        description: "No one has EVER caught Jack when he's going full speed. Not once. Not ever. (Mum doesn't count.)",
        image: '',
        altText: 'Jack Rabbit running at top speed down the field',
      },
      {
        id: 'jack-moment-highfive',
        title: 'High-Five Champion',
        description: "High-five, low-five, running-past-you-so-fast-you-didn't-see-him-five. Jack has a five for every occasion.",
        image: '',
        altText: 'Jack Rabbit leaping to give an enthusiastic high-five to a fan',
      },
    ],
    activityIds: ['colouring-jack', 'jacks-favourite-food', 'scavenger-hunt', 'spot-the-difference'],
    available: true,
    emoji: '⚡',
  },
  {
    id: 'ruby',
    slug: 'ruby',
    firstName: 'Ruby',
    lastName: 'Rabbit',
    catchphrase: "Hello! I'm Ruby.",
    tagline: "The big sister with quiet confidence, a great pass and a heart full of Red & Green!",
    bio: [
      "I'm the big sister in our family, and I love Rugby League. I play for my local side in Rabbitohs territory and my mum's the coach. She's a bit loud, but she means well - haha. My favourite thing on the field isn't scoring tries. It's the pass before the try, y'know the one that lets my teammate be the try-scoring hero. But I don't mind pulling off a big tackle to change the momentum of the game! When my friends are happy, I'm happy. That's how it works.",
      "I like reading, braiding my hair two braids, and helping my little brother Jack when he gets himself into a muddle (which is… often). Grandad Reggie says I've got quiet confidence. I don't really know what that means, but I think it means I don't have to shout to be brave. One day, I want to wear the red and green for real. But until then, I've put my hand up to help my family entertain you all. I'll see you super stars in the stands! Go the Rabbitohs!",
    ],
    species: 'Rabbit',
    lives: 'With the Burrow Bunnies',
    occupation: 'Rugby League player & big sister',
    hero: 'Grandad Reggie',
    dream: 'To wear the red and green for real one day',
    relatedCharacters: ['reggie', 'scarlett', 'jack', 'oliver'],
    accentColor: '#E56381',
    cardImage: '/characters/ruby-card.svg',
    heroImage: '',
    thumbImage: '',
    bestMoments: [
      {
        id: 'ruby-moment-pass',
        title: 'The Selfless Pass',
        description: "Ruby could have scored the match-winning try. Instead, she passed to her teammate so she could be the hero. That's just how Ruby plays.",
        image: '',
        altText: 'Ruby Rabbit passing the ball to her teammate with a big smile',
      },
      {
        id: 'ruby-moment-confidence',
        title: 'Quiet Confidence',
        description: "Grandad Reggie says Ruby doesn't have to shout to be brave. She just walks onto the field and makes things happen.",
        image: '',
        altText: 'Ruby Rabbit standing tall and confident on the footy field',
      },
      {
        id: 'ruby-moment-tackle',
        title: 'The Big Tackle',
        description: "When the game is on the line, Ruby puts her body on the line. Momentum changed. Game saved. Just another day for Ruby.",
        image: '',
        altText: 'Ruby Rabbit making a big tackle to change the momentum of the game',
      },
    ],
    activityIds: [],
    available: true,
    emoji: '⭐',
  },
  {
    id: 'oliver',
    slug: 'oliver',
    firstName: 'Oliver',
    lastName: 'Rabbit',
    catchphrase: "Hey there guys, I'm Oliver.",
    tagline: "New to the Rabbitohs family — but heart and soul in the Burrow!",
    bio: [
      "I'm Scarlett's husband, Ruby and Jack's dad, and I'm relatively new to the Rabbitohs family. I grew up on the quiet side of town, preferring to play board games and go on bushwalks. A rollerblading kind of rabbit, if I'm honest. But then I met Scarlett, and she says footy is like a slow-cooked stew: everyone brings an ingredient, and if the flavours work, magic happens. I liked that one, so I wrote it down. Through my love of her, my kids Ruby and Jack, and seeing the passion my father-in-law Reggie has for the Rabbitohs, how could I not become one of the Rabbitohs family myself!",
      "I build things with my paws. Bunk beds, veggie gardens, the occasional wobbly bookshelf. If you ever see me at the games and I look like I'm daydreaming, I probably am, but I'll be right there cheering on the team alongside you all. Come and say hello. I would love to meet you!",
    ],
    species: 'Rabbit',
    lives: 'With the Burrow Bunnies',
    occupation: 'Builder, boardgame champion & family man',
    hero: 'Scarlett and the whole Rabbit family',
    dream: 'A perfect veggie garden and a Rabbitohs premiership',
    relatedCharacters: ['reggie', 'scarlett', 'jack', 'ruby'],
    accentColor: '#372B29',
    cardImage: '/characters/oliver-card.svg',
    heroImage: '',
    thumbImage: '',
    bestMoments: [
      {
        id: 'oliver-moment-wisdom',
        title: 'Words of Wisdom',
        description: "Even when Oliver has no idea what's happening in the game, he always manages to say exactly the right thing at exactly the right moment.",
        image: '',
        altText: 'Oliver Rabbit looking thoughtful while watching a Rabbitohs game',
      },
      {
        id: 'oliver-moment-stew',
        title: 'The Stew Speech',
        description: "'Footy is like a slow-cooked stew,' Oliver told the family. 'If the flavours work, magic happens.' Everyone stopped and wrote it down.",
        image: '',
        altText: 'Oliver Rabbit sharing his famous stew wisdom with the Rabbit family',
      },
      {
        id: 'oliver-moment-builder',
        title: 'Builder Dad',
        description: "Bunk beds, veggie gardens, the occasional wobbly bookshelf. If it needs building, Oliver is your rabbit. Nothing too big or too small.",
        image: '',
        altText: 'Oliver Rabbit proudly showing off something he built with his paws',
      },
    ],
    activityIds: [],
    available: true,
    emoji: '🔨',
  },
]

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id)
}
