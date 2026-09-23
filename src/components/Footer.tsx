import Link from "next/link";
export default function Footer() {
  return <footer><Link className="brand" href="#top">CONVALEXA<span>WAVE</span></Link><span>Web design · AI · Automation</span><div><Link href="#work">Work</Link><Link href="#services">Services</Link><a href="https://www.linkedin.com/in/jenisa-sheth/" target="_blank" rel="noopener noreferrer">LinkedIn</a><Link href="#top">Back to top ↑</Link></div><small>© {new Date().getFullYear()} Convalexa Wave</small></footer>;
}
