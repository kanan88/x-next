import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from '@/components/SideBar';
import News from '@/components/News';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'X Clone',
  description: 'A clone of X website built with Next.js and Tailwind CSS',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div>
            <SideBar />
          </div>
          <div>{children}</div>
          <div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
