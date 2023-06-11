import { Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from 'react-hot-toast';
import RootStyleRegistry from '@/components/RootStyleRegistry';
import Menu from '@/components/Menu';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Semicolon Record App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary`}>
        <div>
          <Toaster />
        </div>
        <RootStyleRegistry>
          <Menu />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
