import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.convalexawave.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Convalexa Wave",
    title: "Convalexa Wave — Websites with presence. Systems with purpose.",
    description:
      "A design and automation studio building distinctive websites, AI chatbots, Instagram automations, and connected workflows for businesses worldwide.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convalexa Wave — Websites with presence. Systems with purpose.",
    description:
      "Distinctive websites, AI chatbots and connected workflows for ambitious businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  title: "Convalexa Wave — Websites with presence. Systems with purpose.",
  description:
    "A design and automation studio building distinctive websites, AI chatbots, Instagram automations, and connected workflows for businesses worldwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Convalexa Wave",
              url: "https://www.convalexawave.com",
              description:
                "Design and automation studio building websites, AI chatbots and connected workflows.",
              email: "hello@convalexawave.com",
            }),
          }}
        />
        <Nav />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
