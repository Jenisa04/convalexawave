import { ImageResponse } from "next/og";

export const alt = "Convalexa Wave — Websites with presence. Systems with purpose.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg,#0b0f15 0%,#101a23 60%,#2a2118 100%)",
          color: "#f7f6f2",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#dcba92" }}>
          CONVALEXA WAVE
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.08 }}>
          <span>Websites with presence.</span>
          <span style={{ color: "#dcba92" }}>Systems with purpose.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#aab5bd" }}>
          Design &amp; automation studio · convalexawave.com
        </div>
      </div>
    ),
    size,
  );
}
