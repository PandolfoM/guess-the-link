import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guess the link",
  description: "Guess the link between teh images",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
