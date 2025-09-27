  import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ToDoListWow - Transform your productivity with style",
  description: "The most beautiful and intuitive todo list app that helps you stay organized, focused, and achieve your goals with stunning visual design.",
  icons: {
    icon: "/myicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
