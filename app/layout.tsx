import "./globals.scss";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Nav from "./components/Nav";

const rubik = Rubik({ subsets: ["latin"] });

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
      <body className={rubik.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
