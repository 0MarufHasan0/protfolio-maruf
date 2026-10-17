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
  title: "Md Maruf Hasan | Frontend Developer",
  description: "Editorial developer portfolio of Md Maruf Hasan - Frontend Developer.",
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

