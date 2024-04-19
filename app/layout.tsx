import type { Metadata } from 'next';
import './globals.css';
import { arsenal } from './fontConfig'; // Adjust the import path as necessary

export const metadata: Metadata = {
title: "Terre project",
description: "Made by Kate",
};

export default function RootLayout({ children }: Readonly<{
children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arsenal.className}>{children}</body>
    </html>
  );
}
