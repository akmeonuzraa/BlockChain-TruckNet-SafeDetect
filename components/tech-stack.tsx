const techCategories = [
  {
    title: "HARDWARE",
    items: ["ESP32", "Raspberry Pi 4", "HLK-LD2450", "Arducam", "DHT11", "MPU6050"],
  },
  {
    title: "IA & DATA",
    items: ["YOLOv8", "LLM Agents", "Kafka", "InfluxDB", "PostgreSQL"],
  },
  {
    title: "BACKEND",
    items: ["FastAPI", "Python", "AWS eu-west-3"],
  },
  {
    title: "FRONTEND",
    items: ["React", "TypeScript", "TailwindCSS"],
  },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs text-primary uppercase tracking-wider font-medium">
            TECH STACK
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-4 mb-6 text-balance">
            Technologies de pointe marocain
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Une architecture moderne, scalable et sécurisée pour les flottes de demain.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xs text-primary uppercase tracking-wider font-medium mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
