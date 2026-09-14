"use client";

import Link from "next/link";
import { useState } from "react";

const waveLetters = ["W", "a", "v", "e"];

export default function Logo() {
  const [playKey, setPlayKey] = useState(0);

  return (
    <Link
      href="/"
      className="flex items-center"
      onMouseEnter={() => setPlayKey((k) => k + 1)}
    >
      <span className="font-serif text-xl leading-none tracking-tight">
        <span className="text-navy">Convalexa</span>{" "}
        <span className="italic text-teal">
          {waveLetters.map((letter, i) => (
            <span
              key={`${playKey}-${i}`}
              className="inline-block animate-letter-wave"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}
