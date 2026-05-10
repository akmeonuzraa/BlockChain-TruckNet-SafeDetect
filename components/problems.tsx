import { Shield, FileText, Thermometer } from "lucide-react"

const problems = [
  {
    icon: Shield,
    title: "Angles Morts",
    description:
      "Les accidents dus aux angles morts représentent 30% des sinistres de flottes. Aucune solution abordable sur le marché marocain.",
  },
  {
    icon: FileText,
    title: "Conformité ESG Absente",
    description:
      "Les PME de transport n'ont pas les outils pour générer des rapports ESG conformes aux normes ISO 26000 et CSRD.",
  },
  {
    icon: Thermometer,
    title: "Chaîne du Froid Aveugle",
    description:
      "Les transporteurs frigorifiques perdent 15% de leur cargaison par manque de monitoring température en temps réel.",
  },
]

export function Problems() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary uppercase tracking-wider font-medium">
            LE PROBLÈME
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-4 mb-6 text-balance">
            Les défis du transport routier au Maroc
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Les flottes marocaines font face à des problèmes critiques sans solutions locales adaptées.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
