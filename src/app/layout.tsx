import { Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Semicolon Record App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary container mx-auto pt-10`}>
        <div>
          <Toaster />
        </div>
        {children}
      </body>
    </html>
  );
}
