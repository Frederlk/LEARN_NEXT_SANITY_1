import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import CartProvider from '@/components/Providers';
import { ReactNode } from 'react';
import ShoppingCartModal from '@/components/ShoppingCartModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Commerce',
  description: 'Next Commerce App with Sanity',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
