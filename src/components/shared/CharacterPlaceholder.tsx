interface CharacterPlaceholderProps {
  name: string
  className?: string
  accentColor?: string
}

export default function CharacterPlaceholder({ name, className = '', accentColor = '#C8102E' }: CharacterPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl ${className}`}
      style={{ backgroundColor: accentColor }}
      aria-hidden="true"
    >
      <span className="text-white font-['Baloo_2',cursive] font-bold text-2xl opacity-80">{name}</span>
    </div>
  )
}
