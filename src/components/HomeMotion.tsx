"use client";
import { useEffect } from "react";
export default function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const progress = document.querySelector<HTMLElement>(".progress span");
    const media = document.querySelector<HTMLElement>(".hero-media");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 700px)");
    let scheduled = false;
    const update = () => { scheduled = false; const y = scrollY; const max = root.scrollHeight - innerHeight; if (progress) progress.style.width = `${max > 0 ? y / max * 100 : 0}%`; if (media) media.style.transform = reduced.matches || mobile.matches ? "" : `translateY(${Math.min(y * .035, 18)}px)`; };
    const request = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
    const observer = !reduced.matches && "IntersectionObserver" in window ? new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("in"); entry.target.classList.add("observed"); } }), { threshold: .08, rootMargin: "0px 0px -3%" }) : null;
    if (observer) { document.querySelectorAll(".reveal").forEach(el => observer.observe(el)); root.classList.add("motion-ready"); } else document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    addEventListener("scroll", request, { passive: true }); addEventListener("resize", request, { passive: true }); update();
    return () => { observer?.disconnect(); root.classList.remove("motion-ready"); removeEventListener("scroll", request); removeEventListener("resize", request); };
  }, []);
  return null;
}
