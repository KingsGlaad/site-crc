'use client'

import { Facebook, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=" border-t border-zinc-400/50 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between mb-6">
          <div className="flex items-center space-x-4">
          <Image src={'/logo.png'} alt="Logo" width={50} height={50} />
          {/* Nome da Igreja */}
          <h3 className="text-xl font-bold text-primary">
            Cristo Reina Church
          </h3>
          </div>

          {/* Links rápidos (opcional) */}
          <div className="flex space-x-6 text-sm text-zinc-400">
            <Link href="#about" className="hover:text-primary">Quem Somos</Link>
            <Link href="#services" className="hover:text-primary">Cultos</Link>
            <Link href="#location" className="hover:text-primary">Localização</Link>
            <Link href="#contact" className="hover:text-primary">Contato</Link>
          </div>

          {/* Redes sociais */}
          <div className="flex space-x-4">
            <a href="mailto:contato@cristoreinachurch.com" aria-label="Email" className="text-zinc-400 hover:text-primary">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/cristoreinachurchoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-primary">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/cristoreinachurch" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-400 hover:text-primary">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Direitos autorais */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Cristo Reina Church. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
