import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "David Obonyano — Software Engineer",
  description: "Frontend engineer in Lagos focused on performance and UX. 95+ Lighthouse projects.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://david-obonyano.vercel.app"),
  openGraph: {
    type: "website",
    title: "David Obonyano — Software Engineer",
    description: "Frontend engineer in Lagos focused on performance and UX. 95+ Lighthouse projects.",
    url: "/",
    siteName: "David Obonyano Portfolio",
    images: [
      {
        url: "/ddaave.jpg",
        width: 1200,
        height: 630,
        alt: "David Obonyano — Software Engineer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Obonyano — Software Engineer",
    description: "Frontend engineer in Lagos focused on performance and UX. 95+ Lighthouse projects.",
    images: ["/ddaave.jpg"],
    creator: "@davidalocaefe",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          // Using dangerouslySetInnerHTML to embed JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "David Obonyano",
              jobTitle: "Software Engineer",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "https://david-obonyano.vercel.app"),
              image: "/david-photo.jpeg",
              sameAs: [
                "https://github.com/davidobonyano",
                "https://www.linkedin.com/in/david-obonyano-bb3478256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                "https://x.com/davidalocaefe?s=21"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}
      >
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
