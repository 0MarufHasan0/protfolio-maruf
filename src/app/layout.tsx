import type { Metadata } from "next";
import { Anton, Roboto } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://marufhasan.dev"),
  title: "Md Maruf Hasan | Frontend Developer",
  description:
    "Editorial portfolio of Md Maruf Hasan - Frontend Developer specializing in React, Next.js, and modern UI architectures.",
  keywords: [
    "Md Maruf Hasan",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Web Developer Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Md Maruf Hasan" }],
  creator: "Md Maruf Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marufhasan.dev",
    siteName: "Md Maruf Hasan Portfolio",
    title: "Md Maruf Hasan | Frontend Developer",
    description:
      "Crafting pixel-perfect, responsive, and high-performance web interfaces with Next.js, React & Tailwind CSS.",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 800,
        alt: "Md Maruf Hasan - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Maruf Hasan | Frontend Developer",
    description:
      "Crafting pixel-perfect, responsive, and high-performance web interfaces with Next.js, React & Tailwind CSS.",
    images: ["/me.jpg"],
  },
  icons: {
    icon: "/me.jpg",
    apple: "/me.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${roboto.variable}`}>
      <body className="bg-darkBg text-textBody font-roboto antialiased selection:bg-accentGreen selection:text-darkBg">
        {children}
      </body>
    </html>
  );
}

