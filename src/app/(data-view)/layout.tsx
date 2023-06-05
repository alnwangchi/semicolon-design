import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Semicolon Record App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section className='flex items-center gap-5 min-h-screen'>{children}</section>;
}
