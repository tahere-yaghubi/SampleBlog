import React from 'react';

type Props = {
  children: React.ReactNode;
};
export const Highlight = ({ children }: Props) => {
  return <strong className="text-accent-0">{children}</strong>;
};
