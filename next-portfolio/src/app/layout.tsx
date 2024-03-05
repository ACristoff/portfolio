import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alex Cristoffanini",
    description: "Software Engineering Portfolio for Alex Cristoffanini",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Header />
            <Container maxWidth="lg">
                {children}
            </Container>
            <Footer />
        </body>
    </html>
  )
}
