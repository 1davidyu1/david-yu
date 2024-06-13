import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "David Yu",
  description: "Work, Projects, Writings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className} suppressHydrationWarning>
        <div className="flex justify-center">
          <div className="h-full max-w-2xl w-full fixed items-center justify-center px-4">
            <Navbar />
            <main className="pt-36">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}