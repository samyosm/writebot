import { assert, Infer, Struct, StructError } from 'superstruct';
import { OpenAI } from './openai';

export class Writebot {
  private static presets: Preset[] | null;
  private static openai: OpenAI;

  static initialize({ apiKey, preset }: { apiKey: string, preset?: any[] }) {
    this.openai = new OpenAI(apiKey);
    this.presets = preset ? preset : null;
  }

  private static getPreset(preset: Preset | string) {
    if (typeof preset === 'string') {
      const writerType = this.presets?.find(value => value.config.preset === preset);

      if (writerType === undefined) {
        throw new Error(`Type ${preset} not found.`);
      }
      return writerType;
    }
    return preset;
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

  static async write(rawPreset: Preset | string, params: unknown) {
    const preset = this.getPreset(rawPreset);
    this.validatePreset(preset, params);

    const prompt = preset.makeQuery(params as Infer<typeof preset.config.params>);

    if (Array.isArray(prompt)) {
      return prompt.map(q => this.openai.createDavinciCompletion({ prompt: q }));
    }

    return this.openai.createDavinciCompletion({ prompt });
  }
}
export type Preset = { makeQuery: (params: unknown) => string | string[], config: { preset: string, params: Struct<any, object> } };
