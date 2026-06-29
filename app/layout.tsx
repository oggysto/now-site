import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOW — Le Podcast",
  description:
    "NOW est le podcast de notre vingtaine. Animé par Oggy et Thomas, deux étudiants de la Junior-Entreprise de l'INSA Lyon.",
  openGraph: {
    title: "NOW — Le Podcast",
    description: "Entrepreneuriat, ambitions et parcours inspirants.",
    images: [
      "https://media.redcircle.com/images/2025/10/13/17/311912a5-4999-4038-bc6c-3366e1b2a2c0_now.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen" style={{ background: "#F5EEFF" }}>
        {children}
      </body>
    </html>
  );
}
