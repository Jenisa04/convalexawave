"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-parchment bg-warm-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-navy/80 transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-teal px-5 py-2.5 text-sm text-warm-white transition-opacity hover:opacity-90"
          >
            Book a Call
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="h-px w-6 bg-navy" />
          <span className="h-px w-6 bg-navy" />
          <span className="h-px w-6 bg-navy" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-parchment px-6 pb-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-sm text-navy/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 w-fit rounded-full bg-teal px-5 py-2.5 text-sm text-warm-white"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </Link>
        </nav>
      )}
    </header>
  );
}
