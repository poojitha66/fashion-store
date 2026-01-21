import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier Noire | Fashion Store",
  description:
    "Discover curated fashion essentials, seasonal collections, and elevated basics from Atelier Noire.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/collections", label: "Collections" },
  { href: "/cart", label: "Cart" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-zinc-900 antialiased`}
      >
        <div className="min-h-screen bg-zinc-50">
          <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3 text-lg font-semibold tracking-[0.2em]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  AN
                </span>
                Atelier Noire
              </div>
              <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-zinc-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden text-xs uppercase tracking-[0.3em] text-zinc-400 sm:inline">
                  Netlify ready
                </span>
                <button className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900">
                  Sign in
                </button>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 text-sm text-zinc-500 md:grid-cols-[2fr,1fr,1fr]">
              <div>
                <p className="text-base font-semibold text-zinc-900">
                  Atelier Noire Studio
                </p>
                <p className="mt-2 max-w-sm">
                  Modern silhouettes, curated drops, and timeless pieces crafted
                  for everyday wear.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  Visit
                </p>
                <p className="mt-2">45 Orchard Lane, New York</p>
                <p>Mon - Sat · 10am - 7pm</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  Contact
                </p>
                <p className="mt-2">hello@ateliernoire.com</p>
                <p>+1 (212) 555-0194</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
