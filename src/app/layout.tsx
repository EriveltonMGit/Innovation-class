import type { Metadata } from "next";
import { Nunito_Sans, Heebo } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";
import { Toaster } from "react-hot-toast";
import AOSInit from "./Components/aos/AOSInit";

// Fontes
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Avanti - Innovation Class",
  description: "Aplicação Innovation Class - Avanti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${nunitoSans.variable} ${heebo.variable} antialiased`}
        suppressHydrationWarning={true} 
      >
        <AOSInit />
        {children}
        <Toaster 
          position="top-center" 
          containerStyle={{
            top: 40,
            left: 0,
            right: 0,
            position: 'fixed',
          }}
          toastOptions={{
            style: {
              margin: '0 auto',
              maxWidth: '400px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
        />
      </body>
    </html>
  );
}