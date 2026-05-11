"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#problems", label: "Problème" },
  { href: "#modules", label: "Modules" },
  { href: "#tech-stack", label: "Stack" },
  { href: "#team", label: "Equipe" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="TruckNet Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-white">TruckNet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-blue-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
            >
              <a href="#contact">Nous Contacter</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="flex flex-col gap-4 mt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-blue-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
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
