import { clsx } from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'pill' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }
type AsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type ButtonProps = AsButton | AsAnchor

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#FFD54F] text-[#C8102E] hover:bg-yellow-300 font-bold',
  secondary: 'bg-[#C8102E] text-white hover:bg-[#a30e26] font-bold',
  pill: 'bg-[#FFD54F] text-[#C8102E] hover:bg-yellow-300 font-bold rounded-full px-5',
  ghost: 'bg-transparent border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-bold',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 min-h-[44px]',
  md: 'text-base px-6 py-3 min-h-[44px]',
  lg: 'text-lg px-8 py-4 min-h-[44px]',
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', fullWidth = false, className, children } = props

  const classes = clsx(
    'inline-flex items-center justify-center rounded-xl font-["Baloo_2",cursive] cursor-pointer',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007A3D] focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  )

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, fullWidth: _fw, ...anchorRest } = props
    return (
      <a className={classes} {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  const { as: _as, variant: _v, size: _s, fullWidth: _fw, ...buttonRest } = props as AsButton
  return (
    <button className={classes} {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
