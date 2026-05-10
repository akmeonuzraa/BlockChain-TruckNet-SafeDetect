import Image from "next/image"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Modules } from "@/components/modules"
import { TechStack } from "@/components/tech-stack"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problems />
      <Modules />
      <TechStack />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
