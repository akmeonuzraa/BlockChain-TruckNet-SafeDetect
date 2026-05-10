import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "3", label: "MODULES" },
  { value: "5", label: "FONDATEURS" },
  { value: "MAD", label: "PRICING" },
  { value: "2026", label: "LANCEMENT" },
]

export function Hero() {
  return (
    <section className="relative min-h-[120vh] pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image - Extended */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/free-photo/semi-truck-highway-sunset_23-2152005477.jpg"
          alt="TruckNet Hero Background"
          fill
          className="object-cover object-center"
          style={{ filter: 'brightness(0.35)' }}
          priority
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-transparent to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-[#0a1628]/60" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial Glow - Multiple for depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-10">
          <span className="text-sm text-cyan-400 uppercase tracking-widest font-medium">
            B2B SaaS - Transport Routier
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight">
          {"L'intelligence au coeur"}
         <br />
         <span className="text-white">du transport routier </span>
         <span className="bg-gradient-to-r from-blue-500 via-blue-900 to-amber-500 bg-clip-text text-transparent">
           au Monde
         </span>
       </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl mb-12 leading-relaxed">
          Solution complète de gestion de flottes pour les entreprises de 5 à 80 véhicules. 
          Sécurité, conformité ESG et chaîne du froid en temps réel.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
          >
            <Link href="#modules" className="flex items-center gap-3">
              Découvrir les Modules
              <ArrowRight size={20} />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-10 py-7 text-lg rounded-full"
          >
            <Link href="#team">Rencontrer notre Équipe</Link>
          </Button>
        </div>

        {/* Stats - Enhanced with dividers */}
        <div className="flex flex-wrap items-center justify-center gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center px-8 sm:px-12 py-4 ${
                index !== stats.length - 1 ? 'border-r border-white/10' : ''
              }`}
            >
              <div className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent z-10" />
    </section>
  )
}
