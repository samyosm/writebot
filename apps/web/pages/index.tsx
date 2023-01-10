import { Button } from 'ui';
import { Writer } from 'writerjs';
import { GetStaticProps } from 'next';
import YoutubeCommentWriter from '@writerjs/youtube-comment-writer';
import TweetWriter from '@writerjs/tweet-writer/';

export const getStaticProps: GetStaticProps = async () => {

  Writer.initialize({
    apiKey: process.env.OPENAI_API_KEY as string,
    types: [
      TweetWriter
    ]
  });

  const tweet = await Writer.write(YoutubeCommentWriter, {
    videoTitle: 'Turborepo Tutorial | Part 1 - Typescript, Eslint, Tailwind, Husky shared config setup in a Monorepo',
    commentDescription: 'A comment that shows unappreciation.',
    tone: 'Angry'
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
