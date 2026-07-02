import Nav from "@/components/Nav";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskOps",
  description: "Project management for teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
