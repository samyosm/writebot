import { Infer, object, string } from 'superstruct';
import { WriterType } from 'writerjs';

export const TweetWriter: WriterType = {
  config: {
    type: 'tweet',
    params: object({
      description: string(),
      tone: string()
    })
  },
  makeQuery: ({ tone, description }: Infer<typeof TweetWriter.config.params>) => {
    return `
  Generate a simple tweet with the following description and tone without any hashtags .
  It is important for this tweet not to have any hashtags in it so do not put any.
  Description: ${description}
  Tone: ${tone}
  `;
  }
};
export default TweetWriter;
