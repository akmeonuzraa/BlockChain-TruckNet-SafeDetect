import Image from "next/image"
import { Shield, BarChart3, Snowflake, CheckCircle } from "lucide-react"

const modules = [
  {
    id: "safedetect",
    icon: Shield,
    name: "SafeDetect",
    category: "SÉCURITÉ",
    description:
      "Détection des angles morts par vision IA et radar haute précision.",
    features: [
      "YOLOv8 + HLK-LD2450 radar",
      "Raspberry Pi 4 Computing core",
      "Arducam 180 degrés FOV",
      "1800 - 2200 MAD/véhicule",
    ],
    highlight: "Partenariat Wafa Assurance / AXA Maroc",
    image: "/safedetect.png",
    imagePosition: "left" as const,
  },
  {
    id: "trucknet-core",
    icon: BarChart3,
    name: "TruckNet Core",
    category: "ESG",
    description:
      "Rapports ESG automatiques conformes aux normes internationales.",
    features: [
      "LLM Agents pour analyse de données",
      "ISO 26000 / CSRD Compliance",
      "Rapport DG mensuel auto-généré",
      "Dashboard exécutif temps réel",
    ],
    highlight: "Conformité réglementaire garantie",
    image: "/trucknet-core.png",
    imagePosition: "right" as const,
  },
  {
    id: "coldchain",
    icon: Snowflake,
    name: "ColdChain",
    category: "IOT",
    description:
      "Monitoring température et chocs en temps réel pour denrées périssables.",
    features: [
      "DHT11 + MPU6050 sensors",
      "Kafka vers InfluxDB pipeline",
      "Alertes temps réel (SMS/Push)",
      "Historique complet de la chaîne",
    ],
    highlight: "Zéro perte de cargaison",
    image: "/coldChain.png",
    imagePosition: "left" as const,
  },
]

export function Modules() {
  return (
    <section id="modules" className="py-20 sm:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary uppercase tracking-wider font-medium">
            NOS MODULES
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-4 mb-6 text-balance">
            Une solution complète et modulaire
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Choisissez les modules adaptés à vos besoins. Intégration transparente et support local.
          </p>
        </div>

        {/* Module Cards */}
        <div className="space-y-16">
          {modules.map((module, index) => (
            <div
              key={module.id}
              id={module.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                module.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-video rounded-2xl overflow-hidden border border-border ${
                  module.imagePosition === "right" ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={module.image}
                  alt={module.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div
                className={`${
                  module.imagePosition === "right" ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <module.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-foreground">
                      {module.name}
                    </h3>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {module.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{module.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {module.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-primary italic">{module.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
