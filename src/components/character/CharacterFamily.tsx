import { Link } from 'react-router-dom'
import type { Character } from '@/data/characters'
import { characters } from '@/data/characters'
import SectionHeading from '@/components/shared/SectionHeading'
import CharacterPlaceholder from '@/components/shared/CharacterPlaceholder'

interface CharacterFamilyProps {
  relatedCharacterIds: string[]
  currentCharacterName: string
}

export default function CharacterFamily({ relatedCharacterIds, currentCharacterName }: CharacterFamilyProps) {
  const familyMembers = relatedCharacterIds
    .map((id) => characters.find((c) => c.id === id))
    .filter((c): c is Character => c !== undefined)

  return (
    <section
      aria-labelledby="family-heading"
      className="bg-[#FFF7D7] py-14 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="family-heading"
          color="red"
          subtitle={`${currentCharacterName}'s family — coming soon!`}
          className="mb-10"
        >
          {currentCharacterName}'s Family
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {familyMembers.map((member) => (
            <div key={member.id} className="relative bg-white rounded-3xl shadow-md overflow-hidden">
              {/* Image */}
              <div
                className="h-44 w-full relative"
                style={{ backgroundColor: member.accentColor + '22' }}
              >
                {member.cardImage ? (
                  <img
                    src={member.cardImage}
                    alt={`${member.firstName} ${member.lastName}`}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <CharacterPlaceholder
                    name={member.firstName}
                    className="w-full h-full"
                    accentColor={member.accentColor}
                  />
                )}
                {/* Coming soon overlay */}
                {!member.available && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="bg-[#FFD54F] text-[#C8102E] font-['Baloo_2',cursive] font-bold text-xs px-3 py-1 rounded-full">
                      Coming Soon!
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="text-xl mb-1">{member.emoji}</div>
                <h3 className="font-['Baloo_2',cursive] font-bold text-[#51319C] text-lg leading-tight">
                  {member.firstName} {member.lastName}
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 font-['Nunito',sans-serif] mt-1 mb-3">
                  {member.tagline}
                </p>
                {member.available ? (
                  <Link
                    to={`/characters/${member.slug}`}
                    className="inline-block font-['Baloo_2',cursive] font-bold text-xs text-[#1788DF] uppercase tracking-wide hover:text-[#C8102E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A3D] rounded"
                    aria-label={`Learn more about ${member.firstName} ${member.lastName}`}
                  >
                    Learn More →
                  </Link>
                ) : (
                  <span className="font-['Baloo_2',cursive] font-bold text-xs text-[#1A1A1A]/40 uppercase tracking-wide">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
