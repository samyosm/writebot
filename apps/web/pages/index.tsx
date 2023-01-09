import { Button } from 'ui';
import { WriteTweet } from 'writerjs';
import { GetStaticProps } from 'next';


export const getStaticProps: GetStaticProps = async () => {
  const tweet = await WriteTweet({
    description: 'A tweet about AI',
    tone: 'In fear'
  });

  return {
    props: {
      tweet: tweet.data.choices[0].text
    }
  };
};

export default function Web({ tweet }: { tweet: string }) {

  return (
    <div>
      <h1>{tweet}</h1>
      <Button />
    </div>
  );
}
