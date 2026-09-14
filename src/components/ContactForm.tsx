"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdblneo";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (status === "success") {
    return (
      <div className="border-t border-parchment pt-8 md:border-t-0 md:pt-0">
        <p className="font-serif text-2xl text-navy">Thank you.</p>
        <p className="mt-2 text-muted">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
          const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          });

          if (response.ok) {
            setStatus("success");
          } else {
            setStatus("error");
          }
        } catch {
          setStatus("error");
        }
      }}
      className="flex flex-col gap-6"
    >
      <div>
        <label htmlFor="name" className="text-sm text-navy/80">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border-b border-parchment bg-transparent py-2 text-navy outline-none focus:border-teal"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-navy/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border-b border-parchment bg-transparent py-2 text-navy outline-none focus:border-teal"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-navy/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 w-full resize-none border-b border-parchment bg-transparent py-2 text-navy outline-none focus:border-teal"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again, or reach
          out directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-fit rounded-full bg-teal px-7 py-3.5 text-warm-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
