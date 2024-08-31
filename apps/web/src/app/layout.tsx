import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-proider";
import { Navbar } from "@/components/navbar";
import { Pickcart } from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PickCart",
  description: "PickCart secure online shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <footer className="py-4 text-center border-t mt-4 flex justify-center">
            <Pickcart width="120" height="30" />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
