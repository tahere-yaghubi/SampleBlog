import React from 'react';
import './globals.css';
import { Rajdhani } from 'next/font/google';

const inter = Rajdhani({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-family-rajdhani',
});

type Props = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
