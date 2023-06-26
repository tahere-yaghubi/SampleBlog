import Article from '@/components/Article';
import Articles from '@/components/Articles';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import SectionHeader from '@/components/SectionHeader';

const page = (): React.JSX.Element => {
  return (
    <Articles>
      <Article title="test1">
        <Paragraph>
          <Highlight>test</Highlight>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          obcaecati eum officiis totam atque quibusdam officia impedit commodi
          expedita ratione tenetur architecto, dolore voluptas voluptatem
          libero, asperiores ut laudantium voluptate.
        </Paragraph>
      </Article>
      <Article title="test1">
        <Paragraph>
          <Highlight>test</Highlight>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          obcaecati eum officiis totam atque quibusdam officia impedit commodi
          expedita ratione tenetur architecto, dolore voluptas voluptatem
          libero, asperiores ut laudantium voluptate.
        </Paragraph>
      </Article>
      <Article title="test1">
        <Paragraph>
          <Highlight>test</Highlight>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          obcaecati eum officiis totam atque quibusdam officia impedit commodi
          expedita ratione tenetur architecto, dolore voluptas voluptatem
          libero, asperiores ut laudantium voluptate.
        </Paragraph>
      </Article>
    </Articles>
  );
};

export default page;
