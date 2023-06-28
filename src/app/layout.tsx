import React from 'react';
import './globals.css';
interface Props {
  children: React.ReactNode;
}
const RootLayout = ({ children }: Props): React.JSX.Element => {
  return children;
};
export default RootLayout;
