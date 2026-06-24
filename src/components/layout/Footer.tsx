import RabbitIcon from '@/components/shared/RabbitIcon'

// TODO: Jetpack CMS integration — replace static links with dynamic content

const navLinks = [
  { label: 'Terms of Use',      href: 'https://www.rabbitohs.com.au/terms-conditions' },
  { label: 'Privacy Policy',    href: 'https://www.rabbitohs.com.au/privacy-policy' },
  { label: 'Careers',           href: 'https://www.rabbitohs.com.au/careers' },
  { label: 'Help',              href: 'https://www.rabbitohs.com.au/help' },
  { label: 'Contact Us',        href: 'https://www.rabbitohs.com.au/contact' },
  { label: 'Advertise With Us', href: 'https://www.rabbitohs.com.au/advertise-with-us' },
  { label: 'NRL Tipping',       href: 'https://tipping.nrl.com', external: true },
  { label: 'Fantasy',           href: 'https://fantasy.nrl.com', external: true },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/southsydney',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7.52623 19.1667L7.49996 10.8334H4.16663V7.50004H7.49996V5.41671C7.49996 2.32387 9.41523 0.833374 12.1742 0.833374C13.4958 0.833374 14.6317 0.931766 14.9627 0.975749V4.20794L13.0492 4.20881C11.5487 4.20881 11.2581 4.92182 11.2581 5.96813V7.50004H15.625L13.9583 10.8334H11.2581V19.1667H7.52623Z" fill="white" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ssfcrabbitohs/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 2.48504C12.4475 2.48504 12.7375 2.49421 13.7042 2.53837C14.2854 2.54514 14.861 2.65198 15.4059 2.85421C15.8042 3.00096 16.1645 3.23535 16.46 3.54004C16.7647 3.83562 16.9991 4.19588 17.1459 4.59421C17.3481 5.13908 17.4549 5.71472 17.4617 6.29587C17.5059 7.26254 17.515 7.55254 17.515 10C17.515 12.4475 17.5059 12.7375 17.4617 13.7042C17.4549 14.2854 17.3481 14.861 17.1459 15.4059C16.9933 15.8013 16.7597 16.1603 16.46 16.46C16.1603 16.7597 15.8013 16.9933 15.4059 17.1459C14.861 17.3481 14.2854 17.4549 13.7042 17.4617C12.7375 17.5059 12.4475 17.515 10 17.515C7.55254 17.515 7.26254 17.5059 6.29587 17.4617C5.71472 17.4549 5.13908 17.3481 4.59421 17.1459C4.19588 16.9991 3.83562 16.7647 3.54004 16.46C3.23535 16.1645 3.00096 15.8042 2.85421 15.4059C2.65198 14.861 2.54514 14.2854 2.53837 13.7042C2.49421 12.7375 2.48504 12.4475 2.48504 10C2.48504 7.55254 2.49421 7.26254 2.53837 6.29587C2.54514 5.71472 2.65198 5.13908 2.85421 4.59421C3.00096 4.19588 3.23535 3.83562 3.54004 3.54004C3.83562 3.23535 4.19588 3.00096 4.59421 2.85421C5.13908 2.65198 5.71472 2.54514 6.29587 2.53837C7.26254 2.49421 7.55254 2.48504 10 2.48504ZM10 0.833374C7.51087 0.833374 7.19837 0.844207 6.22087 0.888374C5.46053 0.904087 4.70829 1.04806 3.99587 1.31421C3.38633 1.55018 2.83287 1.91103 2.37105 2.37357C1.90922 2.83612 1.54924 3.39013 1.31421 4.00004C1.04806 4.71246 0.904087 5.46469 0.888374 6.22504C0.844207 7.19837 0.833374 7.51087 0.833374 10C0.833374 12.4892 0.844207 12.8017 0.888374 13.7792C0.904087 14.5396 1.04806 15.2918 1.31421 16.0042C1.55018 16.6137 1.91103 17.1672 2.37357 17.629C2.83612 18.0909 3.39013 18.4508 4.00004 18.6859C4.71246 18.952 5.46469 19.096 6.22504 19.1117C7.19837 19.1559 7.51087 19.1667 10 19.1667C12.4892 19.1667 12.8017 19.1559 13.7792 19.1117C14.5396 19.096 15.2918 18.952 16.0042 18.6859C16.6137 18.4499 17.1672 18.0891 17.629 17.6265C18.0909 17.164 18.4508 16.6099 16 1.31421C15.2876 1.04806 14.5354 0.904087 13.775 0.888374C12.8017 0.844207 12.4892 0.833374 10 0.833374Z" fill="white" />
        <path d="M9.99998 5.29248C9.06893 5.29248 8.15878 5.56857 7.38464 6.08584C6.61049 6.6031 6.00712 7.33832 5.65082 8.1985C5.29452 9.05868 5.2013 10.0052 5.38294 10.9184C5.56458 11.8315 6.01292 12.6703 6.67128 13.3287C7.32963 13.987 8.16843 14.4354 9.08159 14.617C9.99476 14.7987 10.9413 14.7054 11.8015 14.3491C12.6616 13.9928 13.3969 13.3895 13.9141 12.6153C14.4314 11.8412 14.7075 10.931 14.7075 9.99998C14.7075 8.75147 13.2115 7.5541 12.3287 6.67128C11.4459 5.78845 10.2485 5.29248 9.99998 5.29248ZM9.99998 13.0558C9.3956 13.0558 8.80478 12.8766 8.30225 12.5408C7.79972 12.205 7.40805 11.7278 7.17676 11.1694C6.94547 10.611 6.88496 9.99659 7.00287 9.40382C7.12078 8.81104 7.41182 8.26655 7.83918 7.83918C8.26655 7.41181 8.81105 7.12077 9.40382 7.00286C9.99659 6.88495 10.611 6.94547 11.1694 7.17676C11.7278 7.40805 12.205 7.79972 12.5408 8.30225C12.8766 8.80478 13.0558 9.39559 13.0558 9.99998C13.0558 10.8104 12.7339 11.5877 12.1608 12.1608C11.5877 12.7339 10.8104 13.0558 9.99998 13.0558Z" fill="white" />
        <path d="M14.8933 6.20671C15.5008 6.20671 15.9933 5.71423 15.9933 5.10671C15.9933 4.4992 15.5008 4.00671 14.8933 4.00671C14.2858 4.00671 13.7933 4.4992 13.7933 5.10671C13.7933 5.71423 14.2858 6.20671 14.8933 6.20671Z" fill="white" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/ssfcrabbitohs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 3.83317C19.25 4.1665 18.5 4.4165 17.6667 4.49984C18.5 3.99984 19.1667 3.1665 19.5 2.24984C18.6667 2.74984 17.8333 3.08317 16.9167 3.24984C16.1667 2.4165 15.0833 1.9165 13.9167 1.9165C11.6667 1.9165 9.83333 3.74984 9.83333 5.99984C9.83333 6.33317 9.83333 6.6665 9.91667 6.9165C6.41667 6.74984 3.41667 5.08317 1.41667 2.58317C1 3.24984 0.833333 3.9165 0.833333 4.6665C0.833333 6.08317 1.58333 7.33317 2.66667 8.08317C2 8.08317 1.33333 7.9165 0.833333 7.58317C0.833333 7.58317 0.833333 7.58317 0.833333 7.6665C0.833333 9.6665 2.25 11.3332 4.08333 11.6665C3.75 11.7498 3.41667 11.8332 3 11.8332C2.75 11.8332 2.5 11.8332 2.25 11.7498C2.75 13.4165 4.25 14.5832 6.08333 14.5832C4.66667 15.6665 2.91667 16.3332 1 16.3332C0.666667 16.3332 0.333333 16.3332 0 16.2498C1.83333 17.4165 4 18.0832 6.25 18.0832C13.8333 18.0832 17.9167 11.8332 17.9167 6.4165C17.9167 6.24984 17.9167 6.08317 17.9167 5.9165C18.75 5.33317 19.4167 4.58317 20 3.83317Z" fill="white" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/c/SouthSydneyRabbitohs1908',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M19.8333 6C19.8333 6 19.6667 4.58333 19 4C18.25 3.16667 17.4167 3.16667 17 3.16667C14.1667 3 10 3 10 3C10 3 5.83333 3 3 3.16667C2.58333 3.25 1.75 3.25 1 4C0.416667 4.58333 0.166667 6 0.166667 6C0.166667 6 0 7.58333 0 9.25V10.75C0 12.3333 0.166667 14 0.166667 14C0.166667 14 0.333333 15.4167 1 16C1.75 16.8333 2.75 16.75 3.16667 16.8333C4.75 17 10 17 10 17C10 17 14.1667 17 17 16.75C17.4167 16.6667 18.25 16.6667 19 15.9167C19.5833 15.3333 19.8333 13.9167 19.8333 13.9167C19.8333 13.9167 20 12.3333 20 10.6667V9.16667C20 7.58333 19.8333 6 19.8333 6ZM7.91667 12.5833V7L13.3333 9.83333L7.91667 12.5833Z" fill="white" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@ssfcrabbitohs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D4F2A] text-white py-10 px-4 text-center" role="contentinfo">
      <div className="max-w-4xl mx-auto">

        {/* Logo + wordmark */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <RabbitIcon className="h-16 w-auto" fill="#ffffff" />
          <span className="font-['Baloo_2',cursive] font-extrabold text-white text-xl uppercase tracking-widest">
            Rabbitohs
          </span>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-1 gap-y-1 mb-5">
            {navLinks.map((link, i) => (
              <li key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="font-['Nunito',sans-serif] text-sm text-white/80 hover:text-white transition-colors px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {link.label}
                </a>
                {i < navLinks.length - 1 && (
                  <span className="text-white/30 text-xs select-none" aria-hidden="true">|</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <hr className="border-white/20 mb-5" />

        {/* Social icons */}
        <ul className="flex justify-center gap-5" aria-label="Social media links">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${s.label}`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-['Nunito',sans-serif] text-xs text-white/40 mt-6">
          © {new Date().getFullYear()} South Sydney Football Club Ltd. All rights reserved.
          A family-safe digital experience brought to you by the South Sydney Rabbitohs. Glory glory to South Sydney!
        </p>
      </div>
    </footer>
  )
}
