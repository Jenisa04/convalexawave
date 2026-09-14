import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-parchment bg-parchment/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">
            Digital presence that works while you sleep.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-navy/80 hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-muted">
          <a href="mailto:hello@convalexawave.com" className="hover:text-teal">
            hello@convalexawave.com
          </a>
        </div>
      </div>

      <div className="border-t border-parchment px-6 py-6 text-center text-sm text-muted md:px-10">
        © {new Date().getFullYear()} Convalexa Wave. All rights reserved.
      </div>
    </footer>
  );
}
