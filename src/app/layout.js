import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbarNotification from "@/components/TopNavbarNotification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Meke Egypt",
  description: "Meke Egypt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">
      <div className="fixed w-full z-40">
        <TopNavbarNotification />
        <Navbar/>
       </div>
 <div className="h-auto pt-32 lg:pt-[9.5rem]">
        {children}
 </div>
        <Footer/>
       </body>
    </html>
  );
}

