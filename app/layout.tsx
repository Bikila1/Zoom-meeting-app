import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";

// ideally, Stream Video theme should be imported before your own styles
// as this would make it easier for you to override certain video-theme rules
// import "./my-styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom1",
  description: "video calling app",
  // icons: {
  //   icon: '/icons/logo.svg',
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/zoom1-logo.svg',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#252a41',
            colorInputText: '#fff',
        }
      }}>
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
        </ClerkProvider>
    </html>
  );
}
