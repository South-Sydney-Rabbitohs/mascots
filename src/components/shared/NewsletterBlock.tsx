import { useState } from 'react'
import Button from './Button'

interface NewsletterBlockProps {
  heading?: string
  subheading?: string
}

export default function NewsletterBlock({
  heading = 'Join the Burrow Bunnies!',
  subheading = 'Get the latest activities, competitions and news delivered to your inbox.',
}: NewsletterBlockProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')

    // TODO: Braze newsletter_signup event
    // window.braze?.logCustomEvent('newsletter_signup', { email })
    // TODO: parental consent checkbox (COPPA / Australian Privacy Act)
    alert('Thanks for signing up! The Burrow Bunnies newsletter is coming soon.')
    setEmail('')
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-[#FFF7D7] py-16 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4" role="img" aria-label="Envelope">✉️</div>
        <h2
          id="newsletter-heading"
          className="font-['Baloo_2',cursive] font-extrabold text-3xl md:text-4xl text-[#C8102E] mb-3"
        >
          {heading}
        </h2>
        <p className="font-['Nunito',sans-serif] text-[#1A1A1A]/70 text-base md:text-lg mb-6">
          {subheading}
        </p>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#007A3D] font-['Nunito',sans-serif] text-base min-h-[44px] focus:outline-none focus:ring-3 focus:ring-[#007A3D]"
              aria-describedby={error ? 'newsletter-error' : undefined}
              required
            />
          </div>
          <Button type="submit" variant="secondary" size="md">
            Sign Me Up!
          </Button>
        </form>
        {error && (
          <p id="newsletter-error" role="alert" className="mt-2 text-sm text-[#C8102E] font-['Nunito',sans-serif]">
            {error}
          </p>
        )}
        <p className="mt-4 text-xs text-[#1A1A1A]/50 font-['Nunito',sans-serif]">
          No spam. Family-safe content only. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
