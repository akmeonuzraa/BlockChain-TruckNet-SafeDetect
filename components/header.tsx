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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header id="header">
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

      {/* Mobile nav */}
      {isOpen && (
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
          <Link
              key={link.href}
              href={link.href}
              className="text-sm text-blue-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
          </Link>
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
    </header>
  )
}
