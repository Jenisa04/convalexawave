import Image from "next/image";
import Link from "next/link";
import HomeMotion from "@/components/HomeMotion";
import Script from "next/script";
import CalendlyBooking from "@/components/CalendlyBooking";
import ContactForm from "@/components/ContactForm";

const projects = [
  { n: "01", sector: "Healthcare", title: "SVKM Physiotherapy Clinic", description: "A welcoming introduction to care through every stage of life. Services, treatment facilities, and ways to get in touch come together in a clear, patient-focused website.", url: "https://www.svkmphysioclinic.com/", image: "/assets/cw-physio-project.jpg", alt: "SVKM Physiotherapy Clinic homepage", label: "SVKM Physiotherapy Clinic", cls: "preview-physio" },
  { n: "02", sector: "Education", title: "Smt. Alka Desai College of Nursing", description: "Helping prospective students and families explore courses, campus life, and admissions through one coherent institutional website.", url: "https://www.svkmalkadesainursing.com/", image: "/assets/cw-nursing-project.jpg", alt: "Smt. Alka Desai College of Nursing homepage", label: "Education & healthcare", cls: "preview-nursing" },
  { n: "03", sector: "Personal brand", title: "Bhupeshbhai Hai Na", description: "A personal story told through people, purpose, and community. An expressive website with English, Hindi, and Marathi language options.", url: "https://www.bhupeshbhaihaina.com/", image: "/assets/cw-personal-project.jpg", alt: "Bhupeshbhai Hai Na homepage", label: "Personal identity", cls: "preview-personal" },
];

const services = [
  ["01 / Design + development", "Web design & development", "Websites that express your business clearly and give people a reason to explore. From a focused portfolio to a multi-page platform, we handle the design and the build.", "Strategy · UX/UI · Development · CMS"],
  ["02 / Social conversations", "Instagram DM automation", "Turn comments and DMs into useful conversations. We build response flows that answer common questions, capture interest, and guide people toward an enquiry or booking.", "DM flows · Comment responses · Lead capture"],
  ["03 / AI experiences", "AI chatbots", "Help visitors find answers using your business information. We design chat experiences that explain your services, collect enquiries, and hand off to a person when needed.", "Business knowledge · Enquiries · Human handoff"],
  ["04 / Connected operations", "Workflow automation", "Connect the tools you use and simplify repetitive steps between them. We build workflows around enquiries, onboarding, follow-ups, and reporting.", "Integrations · Onboarding · Follow-up · Reporting"],
];

function Credit() { return <p className="collaboration-credit">In collaboration with <a href="https://madncrazy.works/" target="_blank" rel="noopener noreferrer">MadNCrazy Medianomics<span className="sr-only"> (opens in a new tab)</span></a></p>; }

function Preview({ project }: { project: (typeof projects)[number] }) {
  return <a className={`project-preview ${project.cls}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website (opens in a new tab)`}>
    <span className="preview-label">{project.label}<span aria-hidden="true">↗</span></span>
    <Image src={project.image} alt={project.alt} width={1348} height={926} sizes="(max-width: 700px) 100vw, 60vw" />
    <span className="preview-cta">Explore live website <span aria-hidden="true">↗</span></span>
  </a>;
}

export default function Home() {
  const [featured, ...secondary] = projects;
  return <>
    <HomeMotion />
    <a className="skip-link" href="#main-content">Skip to content</a><div className="progress" aria-hidden="true"><span /></div><div id="main-content" tabIndex={-1} />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true"><Image src="/assets/hero-refined.png" alt="A figure standing in a vast, softly lit architectural hall" fill priority sizes="100vw" /></div><div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content"><p className="eyebrow"><span className="line" /> Design & automation studio</p><h1 id="hero-title"><span className="hero-line">Websites with presence.</span><span className="hero-line"><em>Systems with purpose.</em></span></h1><div className="hero-bottom"><p>We build distinctive websites, AI chatbots, and automations that help ambitious businesses earn trust, respond faster, and work better.</p><div className="hero-actions"><Link className="pill pill-solid" href="#work">Explore our work <span>↘</span></Link><Link className="inline-link" href="#contact">Have a project in mind? <span>↗</span></Link></div></div></div>
      <div className="hero-foot"><Link href="#work">Selected work to explore <span>↓</span></Link><span>Design · Development · Automation</span></div>
    </section>

    <section className="intro section-pad"><div className="intro-top reveal"><span className="section-label">Design, connected to your business</span><span className="asterisk">✳</span></div><div className="intro-grid reveal"><h2>Every impression.<br /><em>Every next step.</em></h2><div><p>A compelling website creates interest. Clear answers, timely replies, and easy next steps help turn that interest into a conversation.</p><p>We bring those moments together through considered design and practical technology. Each part can stand on its own or connect with the tools you already use.</p></div></div><div className="credibility reveal"><div><strong>Design through delivery</strong><span>Strategy, design, and development</span></div><div><strong>Built around your business</strong><span>Websites, AI, and connected workflows</span></div><div><strong>Direct collaboration</strong><span>Work with the founder behind the studio</span></div></div></section>

    <section className="work" id="work"><div className="work-heading section-pad reveal"><div><span className="section-label">01 / Selected work</span><h2>Considered work.<br /><em>Out in the world.</em></h2></div><p>Explore selected projects across healthcare, education, and personal identity—each shaped around a distinct audience and purpose.</p></div>
      <article className="work-feature reveal"><Preview project={featured} /><div className="work-info"><div className="work-meta"><span>{featured.n} / {featured.sector}</span><span className="status live">Live website</span></div><h3>{featured.title}</h3><p>{featured.description}</p><Credit /><a className="inline-link project-link" href={featured.url} target="_blank" rel="noopener noreferrer">Visit the live website <span>↗</span></a></div></article>
      <div className="work-pair">{secondary.map(project => <article className="work-card reveal" key={project.title}><Preview project={project} /><div className="work-meta"><span>{project.n} / {project.sector}</span><span className="status live">Live website</span></div><h3>{project.title}</h3><p>{project.description}</p><Credit /><a className="inline-link project-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit the live website <span>↗</span></a></article>)}</div>
      <div className="work-next section-pad reveal"><p>Your business has its own story.<br /><strong>Let’s give it the right presence.</strong></p><Link className="pill pill-outline" href="#contact">Discuss your website <span>↗</span></Link></div>
    </section>

    <section className="audience section-pad" id="audience"><div className="audience-head reveal"><span className="section-label">02 / What we help you do</span><h2>A stronger presence.<br /><em>A smoother business.</em></h2><p>Whether someone is discovering your business or your team is handling the next enquiry, every step deserves the same care.</p></div><div className="audience-list"><article className="audience-row reveal"><span>01</span><h3>Build confidence.</h3><p>Show what makes your business worth choosing, through distinctive design, clear information, and an easy path to get in touch.</p></article><article className="audience-row reveal"><span>02</span><h3>Start conversations.</h3><p>Help interested visitors take the next step with useful website answers and timely Instagram responses.</p></article><article className="audience-row reveal"><span>03</span><h3>Keep work moving.</h3><p>Connect enquiries, follow-ups, and everyday tasks so your team can spend more time on the work that needs them.</p></article></div><p className="audience-end reveal">Your goals shape the brief. Your industry adds the context.</p></section>

    <section className="services section-pad" id="services"><div className="services-head reveal"><span className="section-label">03 / What we do</span><h2>What we can<br /><em>build for you.</em></h2><p>Four services, available individually or brought together around one goal.</p></div><div className="service-grid">{services.map(s => <article className="service reveal" key={s[1]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>{s[3]}</b></article>)}</div></section>

    <section className="approach section-pad" id="approach"><div className="approach-left reveal"><span className="section-label">04 / Working together</span><h2>Start with what<br /><em>matters most.</em></h2></div><div className="approach-right reveal"><p>A new website. A better way to handle enquiries. One process that takes too much time. We shape a focused engagement around your priorities, budget, and existing tools.</p><div className="approach-points"><div><span>01</span><strong>Start with a conversation.</strong><p>Tell us what you want to improve and what is getting in the way.</p></div><div><span>02</span><strong>Know the plan and the price.</strong><p>Agree on the scope, deliverables, timeline, and price before the work begins.</p></div><div><span>03</span><strong>Stay close to the work.</strong><p>Work directly with the founder, with clear review points from first ideas through launch.</p></div></div><Link className="inline-link dark-link" href="#contact">Let&apos;s talk about your project <span>↗</span></Link></div></section>

    <section className="founder section-pad reveal"><div className="founder-left"><span className="section-label">05 / Founder-led by design</span><div className="founder-signature" aria-hidden="true">C<span>W</span></div></div><div><h2>Creative judgement.<br />Technical depth.<br /><em>Direct accountability.</em></h2><p>Founded by a UC Davis Applied Mathematics & Computer Science graduate with professional experience in technology, Convalexa Wave brings engineering discipline to creative work. You collaborate directly with the founder shaping your project—from the first conversation to the final details.</p></div></section>

    <section className="contact section-pad" id="contact"><div className="contact-glow" aria-hidden="true" /><div className="contact-inner reveal"><span className="section-label">The next step</span><h2>What would you like<br />to <em>make better?</em></h2><p>Tell us about your business, what you want to improve, and your ideal timeline. We’ll discuss the fit, then shape a clear scope and quote.</p></div><div className="contact-booking reveal"><h3>Choose a time that works for you.</h3><link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" /><Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" /><CalendlyBooking /></div><div className="contact-enquiry reveal"><h3>Prefer to write? Tell us about your project.</h3><p>Send a message and we’ll reply within one business day.</p><div className="contact-form-wrap"><ContactForm /></div></div></section>
  </>;
}
