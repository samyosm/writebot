import { Preset, Writebot } from '../index';
import { Infer, number, object, string } from 'superstruct';

describe('writebot', () => {

  const TestPreset: Preset = {
    config: {
      preset: 'test',
      params: object({
        str: string(),
        num: number()
      })
    },
    makeQuery: ({ str, num }: Infer<typeof TestPreset.config.params>) => `Str: ${str}. Num: ${num}.`
  };

/*  it('throws when called but not initialized', () => {
    expect(Writebot.write(TestPreset, {
      str: 'test',
      num: 1
    })).toThrow();
  });*/
/*  it('throws for unknown presets', () => {
    Writebot.
  });*/

});
