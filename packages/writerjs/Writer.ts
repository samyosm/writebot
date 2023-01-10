import { createDavinciCompletion } from './openai';
import { assert, Infer, object, string, Struct, StructError } from 'superstruct';

export class Writer {
  private static types: WriterType[];

  static initialize(types: WriterType[]) {
    Writer.types = types;
  }


  static async write(type: WriterType | string, params: unknown) {
    let writerType;
    if (typeof type === 'string') {
      writerType = Writer.types.find(value => value.config.type === type);

      if (writerType === undefined) {
        throw new Error(`Type ${type} not found.`);
      }
    } else {
      writerType = type;
    }

    try {
      const writerParams = writerType.config.params;
      assert(params, writerParams);
    } catch (e: unknown) {
      if (e instanceof StructError) {
        const { message } = e;
        throw new Error(`Typing verification for type ${writerType.config.type} failed. ${message}.`);
      }
    }

    const prompt = writerType.makeQuery(params as Infer<typeof writerType.config.params>);
    return createDavinciCompletion({ prompt });
  }
}

export type WriterType= { makeQuery: (params: unknown) => string, config: { type: string, params: Struct<any, object> } };

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

export const YoutubeCommentWriter: WriterType = {
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

