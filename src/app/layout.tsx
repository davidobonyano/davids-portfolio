import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Cursor from "@/components/Cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "David Obonyano — Full‑Stack Engineer",
  description: "Full‑stack engineer based in Nigeria, working globally. Focused on performance, interactivity, and high-end web experiences.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://david-obonyano.vercel.app"),
  openGraph: {
    type: "website",
    title: "David Obonyano — Full‑Stack Engineer",
    description: "Full‑stack engineer based in Nigeria, working globally. Focused on performance, interactivity, and high-end web experiences.",
    url: "/",
    siteName: "David Obonyano Portfolio",
    images: [
      {
        url: "/ddaave.jpg",
        width: 1200,
        height: 630,
        alt: "David Obonyano — Full‑Stack Engineer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Obonyano — Full‑Stack Engineer",
    description: "Full‑stack engineer based in Nigeria, working globally. Focused on performance, interactivity, and high-end web experiences.",
    images: ["/ddaave.jpg"],
    creator: "@davidalocaefe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "David Obonyano",
              jobTitle: "Full‑Stack Engineer",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "https://david-obonyano.vercel.app"),
              image: "/david-photo.jpeg",
              sameAs: [
                "https://github.com/davidobonyano",
                "https://www.linkedin.com/in/david-obonyano-bb3478256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                "https://x.com/davidalocaefe?s=21"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${anton.variable} font-sans antialiased`}
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", cursor: "none" }}
      >
        <Providers>
          <Cursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
