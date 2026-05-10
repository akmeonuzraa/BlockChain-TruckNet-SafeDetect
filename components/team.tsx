import Image from "next/image"

const team = [
  {
    name: "Amoura Kenza",
    role: "Co-fondatrice",
    specialty: "Big Data & IA",
    isFounder: false,
  },
  {
    name: "Ayman Allouch",
    role: "Fondateur",
    specialty: "Backend Senior, Cloud & Infra",
    isFounder: true,
  },
  {
    name: "Ouissal Nari",
    role: "Co-fondatrice",
    specialty: "Big Data & IA",
    isFounder: false,
  },
  {
    name: "Adam El-Araqy",
    role: "Co-fondateur",
    specialty: "Systèmes embarqués & IoT",
    isFounder: false,
  },
  {
    name: "Abdelmajid Chantir",
    role: "Co-fondateur",
    specialty: "Systèmes embarqués & IoT",
    isFounder: false,
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-cyan-400 uppercase tracking-wider font-medium">
            NOTRE EQUIPE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6 text-balance">
            Les fondateurs
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            {"Une équipe pluridisciplinaire issue de l'Ecole Polytechnique d'Agadir - Universiapolis"}
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="relative bg-[#1a1f26] rounded-2xl p-6 pt-8 w-[200px] sm:w-[220px] border border-gray-800/50 hover:border-gray-700/50 transition-colors"
            >
              {/* Founder Badge */}
              {member.isFounder && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 rounded-md bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30">
                    FONDATEUR
                  </span>
                </div>
              )}

              {/* Avatar with cyan glow */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                {/* Cyan glow effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 bg-gradient-to-br from-slate-600 to-slate-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-white/60">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-sans font-medium text-base text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-cyan-400 mb-2">{member.role}</p>
                <p className="text-xs text-gray-500">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
