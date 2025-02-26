import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { AnimatedLayout } from './components/AnimatedLayout';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ZOMBIE DJ',
  description: 'Official website of ZOMBIE DJ - Electronic music artist and producer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
