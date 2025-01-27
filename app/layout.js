import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
