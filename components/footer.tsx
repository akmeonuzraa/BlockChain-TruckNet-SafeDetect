import Image from "next/image"
import Link from "next/link"

/*const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Fleet Safety" },
  { href: "#", label: "Support" },
]*/

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="TruckNet Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-serif font-bold text-lg text-foreground">
              TruckNet
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2026 TruckNet Logistics technology. Tous droits réservés.
          </p>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
