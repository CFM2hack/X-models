// The final, correct app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "ModelVerse - The Models Marketplace",
  description: "A curated marketplace of professional models.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="bg-base-100 text-text-primary antialiased">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
