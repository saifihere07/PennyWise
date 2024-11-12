import {Outfit} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner";

const newFont = Outfit({subsets:["latin"]});

export const metadata = {
  title: "PennyWise",
  description: "PennyWise, Track your Each And Every Penny",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={newFont.className}
      >
        <Toaster/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
