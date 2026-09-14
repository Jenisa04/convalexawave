"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/jenisasheth/15-min-meeting?hide_gdpr_banner=1";

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const init = () => {
      if (cancelled || !window.Calendly) return;
      if (container.childElementCount > 0) return;
      window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: container });
    };

    if (window.Calendly) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.Calendly) {
          clearInterval(interval);
          init();
        }
      }, 200);
      return () => {
        cancelled = true;
        clearInterval(interval);
      };
    }

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} style={{ minWidth: "320px", height: "700px" }} />;
}
