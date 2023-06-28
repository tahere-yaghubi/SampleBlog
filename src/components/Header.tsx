import React from 'react';
import { Navs } from './Navs';

export const Header = (): React.JSX.Element => {
  return (
    <div className="flex items-center justify-between">
      <Navs />
    </div>
  );
};
