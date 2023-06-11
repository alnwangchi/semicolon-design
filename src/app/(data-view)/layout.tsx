import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Semicolon Record App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex justify-center items-center gap-5 min-h-[calc(100vh-46px)] container mx-auto'>
      {children}
    </section>
  );
}
