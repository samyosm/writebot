import { assert, func, Infer, object, string, Struct, StructError } from 'superstruct';
import { OpenAI } from './openai';

const Preset = object({
  makeQuery: func(),
  config: object({
    preset: string(),
    params: object()
  })
});

export class Writebot {
  private static presets: Preset[] | null;
  private static openai: OpenAI;

  static initialize({ apiKey, preset }: { apiKey: string, preset?: any[] }) {
    this.openai = new OpenAI(apiKey);
    this.presets = preset ? preset : null;
  }

  private static getPreset(preset: Preset | string) {
    let writerType;
    if (typeof preset === 'string') {
      writerType = this.presets?.find(value => value.config.preset === preset);

      if (writerType === undefined) {
        throw new Error(`Preset ${preset} not found.`);
      }
    } else {
      writerType = preset;
    }

    if (!Preset.is(writerType)) throw new Error('Invalid preset');
    return writerType;
  }

  private static validatePreset(preset: Preset, params: unknown) {
    try {
      const writerParams = preset.config.params;
      assert(params, writerParams);
    } catch (e: unknown) {
      if (e instanceof StructError) {
        const { message } = e;
        throw new Error(`Typing verification for type ${preset.config.preset} failed. ${message}.`);
      }
    }
  }

  static write = async (rawPreset: Preset | string, params: object)  => {
    if (!this.openai) throw new Error('Not initialized');

    const preset = this.getPreset(rawPreset);
    this.validatePreset(preset, params);

    const prompt = preset.makeQuery(params as Infer<typeof preset.config.params>);

    if (Array.isArray(prompt)) {
      const response = prompt.map((q, i) => this.openai.createDavinciCompletion({ prompt: `${q}${i === prompt.length - 1 ? '<|endoftext|>': ''}` }));
      const all = Promise.all(response);
      const actual = await all;
      console.log(actual.map(value => value.data.choices[0].text).join('\n'));
      return actual;
    }

    return this.openai.createDavinciCompletion({ prompt });
  };
}

export type Preset = { makeQuery: (params: any) => string | string[], config: { preset: string, params: Struct<any, object> } };
