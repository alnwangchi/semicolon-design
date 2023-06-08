import { Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from 'react-hot-toast';
import RootStyleRegistry from '@/components/RootStyleRegistry';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Semicolon Record App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary container mx-auto `}>
        <div>
          <Toaster />
        </div>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
