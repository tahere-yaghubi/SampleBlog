import React from 'react';

type Props = {
  id?: string;
  children: React.ReactNode;
};
export const SectionHeader = ({ id, children }: Props): React.JSX.Element => {
  return (
    <h1 className="h2 text-2xl" id={id}>
      {children}
    </h1>
  );
};

export default SectionHeader;
