import Image from "next/image"

const team = [
  {
    name: "Ayman Allouch",
    role: "Fondateur",
    specialty: "Backend Senior, Cloud & Infra",
    isFounder: true,
    image: "/ayman.jpeg",
  },
  {
    name: "Kenza Amoura",
    role: "Co-fondatrice",
    specialty: "Big Data & IA",
    isFounder: false,
    image: "/kenza.jpeg",
  },
  {
    name: "Ouissal Nari",
    role: "Co-fondatrice",
    specialty: "Big Data & IA",
    isFounder: false,
    image: "/ouissal.jpeg",
  },
  {
    name: "Adam El-Araqy",
    role: "Co-fondateur",
    specialty: "Systèmes embarqués & IoT",
    isFounder: false,
    image: "/adam.jpeg",
  },
  {
    name: "Abdelmajid Chantir",
    role: "Co-fondateur",
    specialty: "Systèmes embarqués & IoT",
    isFounder: false,
    image: "/abdelmajid.jpeg",
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs text-cyan-400 uppercase tracking-wider font-medium">
            NOTRE EQUIPE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6 text-balance">
            Les fondateurs
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            {"Une équipe pluridisciplinaire issue de l'Ecole Polytechnique d'Agadir – Universiapolis"}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {team.map((member, index) => (
            <div
              key={index}
              className={`relative bg-[#1a1f26] rounded-2xl p-5 w-[200px] sm:w-[215px] border transition-colors overflow-hidden
                ${member.isFounder
                  ? "border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                  : "border-gray-800/50 hover:border-gray-700/50"
                }`}
            >
              {/* Founder Badge — inside top-left */}
              {member.isFounder && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-md bg-cyan-500 text-white text-[10px] font-bold tracking-wider">
                    FONDATEUR
                  </span>
                </div>
              )}

              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-4 mt-2">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 border border-gray-700/50">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-white/50">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-sans font-medium text-sm text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-cyan-400 mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 leading-snug">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
