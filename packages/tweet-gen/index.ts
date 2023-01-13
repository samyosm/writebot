import { Infer, object, string } from 'superstruct';
import { Preset } from 'writebot';

const config = {
  preset: 'tweet-gen',
  params: object({
    description: string(),
    tone: string()
  })
};

const makeQuery = ({ tone, description }: Infer<typeof config.params>) => {
  return `
  Generate a simple tweet with the following description and tone without any hashtags .
  It is important for this tweet not to have any hashtags in it so do not put any.
  Description: ${description}
  Tone: ${tone}
  `;
};

const TweetGen: Preset = { config, makeQuery };

export default TweetGen;
