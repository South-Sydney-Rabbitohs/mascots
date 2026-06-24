// Visual theme (gradient background + accent colour) for each activity card,
// keyed by activity id. Kept in its own module so ActivityCard.tsx exports
// only a component (satisfies react-refresh/only-export-components, which does
// not waive non-primitive constant exports).

export const ACTIVITY_THEMES: Record<string, { bg: string; accent: string }> = {
  'design-your-jersey':        { bg: 'linear-gradient(150deg,#FF7043 0%,#C8102E 100%)', accent: '#C8102E' },
  'help-jack-maze':            { bg: 'linear-gradient(150deg,#046F6A 0%,#024846 100%)', accent: '#046F6A' },
  'reggies-game-day-plate':    { bg: 'linear-gradient(150deg,#56C45E 0%,#007A3D 100%)', accent: '#007A3D' },
  'pack-your-bag':             { bg: 'linear-gradient(150deg,#FFD54F 0%,#F57F17 100%)', accent: '#E65100' },
  'rubys-team-of-the-day':     { bg: 'linear-gradient(150deg,#E56381 0%,#C8102E 100%)', accent: '#C8102E' },
  'how-are-you-feeling':       { bg: 'linear-gradient(150deg,#9575CD 0%,#51319C 100%)', accent: '#51319C' },
  'scarletts-obstacle-course': { bg: 'linear-gradient(150deg,#FA623E 0%,#C8102E 100%)', accent: '#C8102E' },
  'olivers-bedtime-wind-down': { bg: 'linear-gradient(150deg,#372B29 0%,#1A1A2E 100%)', accent: '#372B29' },
  'colour-in-characters':      { bg: 'linear-gradient(150deg,#FF6B9D 0%,#C8102E 50%,#FFD54F 100%)', accent: '#C8102E' },
  'colour-in-reggie':          { bg: 'linear-gradient(150deg,#56C45E 0%,#047442 100%)', accent: '#047442' },
  'colour-in-scarlett':        { bg: 'linear-gradient(150deg,#FF8A65 0%,#FA623E 100%)', accent: '#C8102E' },
  'colour-in-jack':                { bg: 'linear-gradient(150deg,#4DB6AC 0%,#046F6A 100%)', accent: '#046F6A' },
  'which-one-sounds-like-you':     { bg: 'linear-gradient(150deg,#4DB6AC 0%,#024846 100%)', accent: '#024846' },
  'colour-in-ruby':                { bg: 'linear-gradient(150deg,#F48FB1 0%,#E46180 100%)', accent: '#E46180' },
  'colour-in-oliver':              { bg: 'linear-gradient(150deg,#7B5E58 0%,#382B2A 100%)', accent: '#382B2A' },
  'which-one-sounds-like-you-ruby':{ bg: 'linear-gradient(150deg,#F48FB1 0%,#C8102E 100%)', accent: '#C8102E' },
}

export const DEFAULT_THEME = { bg: 'linear-gradient(150deg,#42A5F5 0%,#1565C0 100%)', accent: '#1565C0' }
