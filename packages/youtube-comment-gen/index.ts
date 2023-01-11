import { Infer, object, string } from 'superstruct';

const config = {
  type: 'youtube_comment',
    params: object({
    videoTitle: string(),
    commentDescription: string(),
    tone: string()
  })
};

const makeQuery = ({ tone, commentDescription, videoTitle }: Infer<typeof config.params>) => {
  return `
  Generate a youtube comment for a video with the following title, comment description, and tone.
  Video title: ${videoTitle}
  Comment description: ${commentDescription}
  Tone: ${tone}
  `;
};

export { config, makeQuery };
