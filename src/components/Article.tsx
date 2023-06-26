import React from 'react';
import SectionHeader from './SectionHeader';

type Props = {
  children: React.ReactNode;
  title: string;
  id?: string;
};
export const Article = ({ children, title, id }: Props): React.JSX.Element => {
  return (
    <article className="flex w-full flex-col gap-8">
      <SectionHeader id={id}>{title}</SectionHeader>
      {children}
    </article>
  );
};

export default Article;
