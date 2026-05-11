"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#problems", label: "Problème" },
  { href: "#modules", label: "Modules" },
  { href: "#tech-stack", label: "Stack" },
  { href: "#team", label: "Equipe" },
]

// Dans le JSX, remplace Link par <a> pour la nav :
<nav className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    
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

//L'ajout de la bascultion vers le home 
    {navLinks.map((link) => (
  link.href === "/" ? (
    <Link key={link.href} href="/" className="text-sm text-blue-300 hover:text-white transition-colors">
      {link.label}
    </Link>
  ) : (
    <a key={link.href} href={link.href} className="text-sm text-blue-300 hover:text-white transition-colors">
      {link.label}
    </a>
  )
))}
// Et dans le menu mobile :
<nav className="flex flex-col gap-4">
  {navLinks.map((link) => (
    
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
