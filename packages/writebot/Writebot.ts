import { assert, Infer, Struct, StructError } from 'superstruct';
import { OpenAI } from './openai';

export class Writebot {
  private static types: WriterType[] | null;
  private static openai: OpenAI;

  static initialize({ apiKey, types }: { apiKey: string, types?: any[] }) {
    this.openai = new OpenAI(apiKey);
    this.types = types ? types : null;
  }


  static async write(type: WriterType | string, params: unknown) {
    let writerType;
    if (typeof type === 'string') {
      writerType = Writebot.types?.find(value => value.config.type === type);

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
    return this.openai.createDavinciCompletion({ prompt });
  }
}

export type WriterType= { makeQuery: (params: unknown) => string, config: { type: string, params: Struct<any, object> } };
