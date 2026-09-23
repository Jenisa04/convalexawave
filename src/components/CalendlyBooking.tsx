"use client";

import { useState } from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function CalendlyBooking() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div className="calendly-open">
        <button type="button" onClick={() => setShow(false)} className="calendly-close">
          Close ✕
        </button>
        <div className="calendly-frame">
          <CalendlyEmbed />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShow(true)}
      className="pill pill-solid"
    >
      Book a Free 15-Min Call <span>↗</span>
    </button>
  );
}
