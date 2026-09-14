"use client";

import { useState } from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function CalendlyBooking() {
  const [show, setShow] = useState(false);

  if (show) {
    return <CalendlyEmbed />;
  }

  return (
    <button
      onClick={() => setShow(true)}
      className="inline-block rounded-full bg-teal px-7 py-3.5 text-warm-white transition-opacity hover:opacity-90"
    >
      Book a Free 15-Min Call
    </button>
  );
}
