"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#header", label: "Home" },
  { href: "#problems", label: "Problème" },
  { href: "#modules", label: "Modules" },
  { href: "#tech-stack", label: "Stack" },
  { href: "#team", label: "Equipe" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-[#214882]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="#header" className="flex items-center gap-2">
            <Image
              src="/assets/logo-TruckNet.jpeg"
              alt="TruckNet"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-white font-bold text-lg">TruckNet</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-blue-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
            >
              <a href="#contact">Nous Contacter</a>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-4 py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-blue-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full mt-2"
            >
              <a href="#contact">Nous Contacter</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
