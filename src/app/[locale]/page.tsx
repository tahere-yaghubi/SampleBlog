import Article from '@/components/Article';
import Articles from '@/components/Articles';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import SectionHeader from '@/components/SectionHeader';
import { useTranslations } from 'next-intl';
const mapper = {
  b: (chunk: React.ReactNode) => <b>{chunk}</b>,
};
const Home = (): React.JSX.Element => {
  const t = useTranslations('main');

  return (
    <Articles>
      <Article title={t('about.title')}>
        <Paragraph>{t.rich('about.content', mapper)}</Paragraph>
      </Article>
      <Article title={t('motivation.title')}>
        <Paragraph>{t.rich('motivation.content', mapper)}</Paragraph>
      </Article>

      <Article title={t('values.title')}>
        <Paragraph>{t('values.content')}</Paragraph>
        <Paragraph>{t.rich('values.ethics', mapper)}</Paragraph>
        <Paragraph>{t.rich('values.validity', mapper)}</Paragraph>
      </Article>
     
    </Articles>
  );
};

export default Home;
