import { clsx } from 'clsx'

type HeadingColor = 'purple' | 'red' | 'green' | 'hero-blue' | 'white'

interface SectionHeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  color?: HeadingColor
  align?: 'left' | 'center'
  subtitle?: string
  className?: string
  id?: string
}

const colorClasses: Record<HeadingColor, string> = {
  purple: 'text-[#51319C]',
  red: 'text-[#C8102E]',
  green: 'text-[#007A3D]',
  'hero-blue': 'text-[#1788DF]',
  white: 'text-white',
}

export default function SectionHeading({
  children,
  as: Tag = 'h2',
  color = 'purple',
  align = 'center',
  subtitle,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={clsx(align === 'center' ? 'text-center' : 'text-left', className)}>
      <Tag
        id={id}
        className={clsx(
          'font-["Baloo_2",cursive] font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight',
          colorClasses[color],
        )}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-[#1A1A1A]/70 font-['Nunito',sans-serif]">{subtitle}</p>
      )}
    </div>
  )
}
