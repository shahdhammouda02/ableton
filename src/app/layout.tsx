import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";

export const metadata: Metadata = {
  title: "Ableton | About",
  description: "About Ableton - makers of Live, Push, and Link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-white text-neutral-900`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}