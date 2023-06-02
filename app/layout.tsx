import { Navbar } from '@/components';
import { Montserrat } from 'next/font/google';
import './globals.css';

const bodyFont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Saint Nick',
    default: 'Call Me Saint Nick',
  },
  description: 'The website of Saint Nick: Producer & Audio Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <div className="bg-black text-white h-full">
          <Navbar />
          <main className="pt-24 px-11 relative isolate">{children}</main>
        </div>
      </body>
    </html>
  );
}
