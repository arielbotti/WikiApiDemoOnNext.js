import "./globals.css";

import Navbar from "./components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wiki API | NEXT.js App",
  description: "",
};

const a = "${}";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
