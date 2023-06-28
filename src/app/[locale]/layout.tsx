import React from 'react';
import { Rajdhani } from 'next/font/google';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
const inter = Rajdhani({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-family-rajdhani',
});

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
  authors: [{ name: 'THRE', url: '' }],
};
type Props = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: Props): React.JSX.Element => {
  return (
    <html
      lang="en"
      className={`${inter.variable} bg-dark-0 leading-normal text-light-0`}
    >
      <body className="text-base">
        <div className='container flex flex-col gap-24 py-8 mobile:gap-40 tablet:py-40"'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
