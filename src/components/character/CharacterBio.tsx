import type { Character } from '@/data/characters'

// TODO: Replace with final approved copy — bio text is placeholder
// TODO: Jetpack CMS integration — fetch bio dynamically

interface CharacterBioProps {
  character: Character
}

export default function CharacterBio({ character }: CharacterBioProps) {
  return (
    <section
      aria-labelledby="character-bio-heading"
      className="bg-[#FFF7D7] py-14 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="character-bio-heading"
          className="font-['Baloo_2',cursive] font-extrabold text-4xl md:text-5xl text-[#C8102E] mb-6"
        >
          {character.catchphrase}
        </h2>
        <div className="space-y-4">
          {character.bio.map((paragraph, i) => (
            <p key={i} className="font-['Nunito',sans-serif] text-[#1A1A1A] text-base md:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
