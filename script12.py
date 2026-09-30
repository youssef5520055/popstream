import sys

content = '''import type { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "POPSTREAM - Igniting Your Passion for Movies",
  description: "Welcome to POPSTREAM, where the silver screen comes alive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={${poppins.variable} }>
      <body className="antialiased bg-[#0F1115] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
'''

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
