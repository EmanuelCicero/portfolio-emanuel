import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emanuel - Portfólio",
  description: "Portfólio de Emanuel, web designer e desenvolvedor front-end",
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </head>
      <body
        className={`${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
