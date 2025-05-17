"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "#about" },
  { label: "Cultos", href: "#services" },
  { label: "Localização", href: "#location" },
  { label: "Contato", href: "#contact" },
  { label: "Relatório", href: "/relatorio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-80 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={20} height={20} />
          <Link href="/" className="text-2xl font-bold text-primary">
            Cristo Reina Church
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Drawer Trigger */}
        <div className="md:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-gray-400" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="px-6 py-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Menu</h3>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <DrawerClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-primary transition-colors text-base"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </DrawerClose>
                  ))}
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
