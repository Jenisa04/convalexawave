"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [{ href: "#work", label: "Selected work" }, { href: "#services", label: "What we do" }, { href: "#approach", label: "Approach" }];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(scrollY > 30); update(); addEventListener("scroll", update, { passive: true }); return () => removeEventListener("scroll", update); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header${scrolled ? " scrolled" : ""}`}>
    <Link className="brand" href="#top" aria-label="Convalexa Wave home">CONVALEXA<span>WAVE</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(value => !value)}><span /><span /></button>
    <nav id="nav" className={open ? "open" : ""} aria-label="Primary navigation">
      {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Link href="#contact" className="nav-contact" onClick={() => setOpen(false)}>Let&apos;s talk <span>↗</span></Link>
    </nav>
  </header>;
}
