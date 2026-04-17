import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const headline = Plus_Jakarta_Sans({
  variable: "--font-headline-raw",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const body = Manrope({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PUBleader | La Publicité Sans Freiner",
  description:
    "Transformez chaque kilomètre en opportunité. PUBleader connecte les marques aux flottes urbaines pour une visibilité inégalée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${headline.variable} ${body.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface font-body text-on-surface">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
