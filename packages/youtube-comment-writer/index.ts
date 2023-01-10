import { Infer, object, string } from 'superstruct';
import { WriterType } from 'writerjs';

const YoutubeCommentWriter: WriterType = {
  config: {
    type: 'youtube_comment',
    params: object({
      videoTitle: string(),
      commentDescription: string(),
      tone: string()
    })
  },
  makeQuery: ({ tone, commentDescription, videoTitle }: Infer<typeof YoutubeCommentWriter.config.params>) => {
    return `
  Generate a youtube comment for a video with the following title, comment description, and tone.
  Video title: ${videoTitle}
  Comment description: ${commentDescription}
  Tone: ${tone}
  `;
  }
};

export default YoutubeCommentWriter;
