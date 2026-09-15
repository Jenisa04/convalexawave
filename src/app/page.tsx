import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import CalendlyBooking from "@/components/CalendlyBooking";

const services = [
  {
    number: "01",
    name: "Websites",
    tag: "Door opener, trust builder",
    description:
      "A clean, fast website that makes a new client trust you before they've even called. The foundation everything else is built on.",
  },
  {
    number: "02",
    name: "Instagram DM Automation",
    tag: "Upsell, saves time",
    description:
      "Every DM and comment gets an instant, on-brand reply — turning casual interest into booked appointments without anyone on your team lifting a finger.",
  },
  {
    number: "03",
    name: "AI Chatbot",
    tag: "24/7 front desk",
    description:
      "A chatbot trained on your business that answers questions, qualifies leads, and books calls at any hour — without adding to your staffing.",
  },
  {
    number: "04",
    name: "Workflow Automation",
    tag: "For growing teams",
    description:
      "We connect your tools and automate the repetitive work between them — quoting, onboarding, reporting — using n8n and Make.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your business, your clients, and what success looks like for you.",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "We create your website, automation, or chatbot, tailored to how you work.",
  },
  {
    number: "03",
    title: "Launch",
    description: "We go live together, checking every detail before your clients see it.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "We stay with you, refining and supporting your digital presence over time.",
  },
];

const principles = [
  {
    number: "01",
    title: "Calm over clever",
    description:
      "We'd rather build something dependable than something that wins design awards.",
  },
  {
    number: "02",
    title: "Built to disappear",
    description:
      "Good automation is invisible — clients shouldn't be able to tell it's not a person.",
  },
  {
    number: "03",
    title: "Yours, not ours",
    description:
      "Everything is handed over cleanly — your domain, your accounts, your data. No lock-in.",
  },
];

const shifts = [
  {
    from: "Hours",
    to: "Seconds",
    description: "Between a DM landing and a reply going out.",
  },
  {
    from: "Phone tag",
    to: "Self-serve",
    description: "New clients booking a time without calling first.",
  },
  {
    from: "Repeating",
    to: "Resolved",
    description: "The same five questions answered without your team.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-12">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl leading-tight text-navy sm:text-5xl md:text-5xl">
              Digital presence that works while you sleep.
            </h1>
            <p className="mt-6 max-w-lg text-xl leading-relaxed text-muted">
              A website that converts, DMs that answer themselves, and AI chat
              that books appointments — the digital groundwork for clinics and
              creative studios who&apos;d rather focus on their clients than
              their inbox.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="#contact"
                className="inline-block rounded-full bg-teal px-7 py-3.5 text-warm-white transition-opacity hover:opacity-90"
              >
                Book a Free Call
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              5+ Next.js websites shipped · Fixed-price builds · No lock-in
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <svg
              viewBox="0 0 400 320"
              className="h-56 w-56 md:h-72 md:w-72"
              fill="none"
            >
              <path
                d="M10 220 C 70 160, 110 280, 170 220 C 230 160, 270 280, 330 220 C 360 190, 380 190, 390 200"
                stroke="#2A7F7F"
                strokeWidth="1.5"
                opacity="0.75"
              />
              <path
                d="M10 160 C 70 110, 110 210, 170 160 C 230 110, 270 210, 330 160 C 360 135, 380 135, 390 145"
                stroke="#1C2B3A"
                strokeWidth="1"
                opacity="0.3"
              />
              <path
                d="M10 260 C 70 230, 110 290, 170 260 C 230 230, 270 290, 330 260 C 360 245, 380 245, 390 250"
                stroke="#7A8A96"
                strokeWidth="1"
                opacity="0.4"
              />
              <circle cx="170" cy="220" r="4.5" fill="#2A7F7F" />
              <circle cx="330" cy="220" r="4.5" fill="#1C2B3A" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="scroll-mt-24 border-t border-parchment bg-parchment/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <span className="text-base text-teal">01 — What we do</span>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            Four systems, one goal: never lose a client to a slow reply.
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
            {services.map((service) => (
              <div key={service.number} className="grid grid-cols-[56px_1fr] gap-4">
                <span className="font-serif text-2xl text-teal">{service.number}</span>
                <div>
                  <h3 className="font-serif text-2xl text-navy">{service.name}</h3>
                  <p className="mt-1 text-sm text-teal">{service.tag}</p>
                  <p className="mt-3 text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="scroll-mt-24 mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <span className="text-base text-teal">02 — How we work</span>
        <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
          No jargon, no fifty-page proposal.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Four steps, each one finished before the next begins, so you always
          know exactly where things stand.
        </p>

        <div className="mt-14 flex flex-col gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 border-t border-parchment pt-10 md:gap-10">
              <span className="font-serif text-3xl text-teal">{step.number}</span>
              <div>
                <h3 className="font-serif text-2xl text-navy md:text-3xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Convalexa Wave */}
      <section className="border-t border-parchment bg-parchment/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <span className="text-base text-teal">03 — Why Convalexa Wave</span>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            How we think about your business
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {principles.map((principle) => (
              <div key={principle.number}>
                <span className="font-serif text-2xl text-teal">{principle.number}</span>
                <h3 className="mt-3 font-serif text-2xl text-navy">{principle.title}</h3>
                <p className="mt-3 text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24 mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <span className="text-base text-teal">04 — Selected work</span>
        <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
          What tends to change
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          We don&apos;t publish a gallery — our clients&apos; work speaks for
          them, privately. Book a call and we&apos;ll walk you through exactly
          what we&apos;ve built. In the meantime, here&apos;s what shifts once
          the groundwork is in place.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {shifts.map((shift) => (
            <div key={shift.description}>
              <p className="font-serif text-2xl text-navy">
                {shift.from} <span className="text-teal">→</span> {shift.to}
              </p>
              <p className="mt-3 text-muted">{shift.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="#contact"
          className="mt-14 inline-block rounded-full bg-teal px-7 py-3.5 text-warm-white transition-opacity hover:opacity-90"
        >
          Book a Free Call
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-parchment bg-parchment/40">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <span className="text-base text-teal">05 — Contact</span>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">Let&apos;s talk</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            The fastest way to start is a quick call — no pitch, just a
            conversation about where things stand. Or send a message and
            we&apos;ll reply within one business day.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            <a
              href="mailto:hello@convalexawave.com"
              className="text-navy hover:text-teal"
            >
              Email: hello@convalexawave.com
            </a>
            <a
              href="https://wa.me/919820103031"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-teal"
            >
              WhatsApp: +91 98201 03031
            </a>
          </div>

          <div className="mt-12">
            <CalendlyBooking />
          </div>

          <div className="mt-16 max-w-xl border-t border-parchment pt-12">
            <h3 className="font-serif text-xl text-navy">Prefer to write instead?</h3>
            <p className="mt-2 text-muted">
              Send a message and we&apos;ll reply within one business day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
