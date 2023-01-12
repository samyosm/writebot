import { Button } from 'ui';
import { Writebot } from 'writebot';
import { GetStaticProps } from 'next';
import YoutubeCommentWriter from 'youtube-comment-gen';
import TweetWriter from 'tweet-gen';

export const getStaticProps: GetStaticProps = async () => {

  Writebot.initialize({
    apiKey: process.env.OPENAI_API_KEY as string,
    types: [
      TweetWriter,
      YoutubeCommentWriter
    ]
  });

  const tweet = await Writebot.write('tweet', {
    description: 'A comment that shows extreme appreciation.',
    tone: 'In love'
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
