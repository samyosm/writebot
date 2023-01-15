import { Preset, Writebot } from '../index';
import { Infer, number, object, string } from 'superstruct';

jest.mock('../openai', () => ({
  OpenAI: jest.fn().mockImplementation(() => ({
    createDavinciCompletion: jest.fn().mockResolvedValue({})
  }))
}));

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

  const validParams = {
    str: 'test',
    num: 1
  };

  describe('writebot presets', () => {
    it('throws when called but not initialized', async () => {
      await expect(Writebot.write(TestPreset, validParams)).rejects.toThrow('Not initialized');
    });

    it('should throw for unknown presets', async () => {
      const preset = 'test-preset';

      Writebot.initialize({
        apiKey: 'test'
      });

      await expect(Writebot.write(preset, validParams)).rejects.toThrow(`Preset ${preset} not found.`);
    });

    it('should throw for invalid presets', async () => {

      const InvalidPreset = {
        config: {
          preset: 'invalid-preset',
          param: ''
        },
        dummyFunction: () => 'hey'
      };

      Writebot.initialize({
        apiKey: 'test',
        preset: [
          InvalidPreset
        ]
      });

      await expect(Writebot.write(InvalidPreset as any, validParams)).rejects.toThrow('Invalid preset');
      await expect(Writebot.write('invalid-preset', validParams)).rejects.toThrow('Invalid preset');

    });
  });

  describe('writebot params', () => {

    it('should throw for invalid params', async () => {
      Writebot.initialize({
        apiKey: 'test'
      });

      const throwForInvalidParams = async (params: object) => {
        return expect(Writebot.write(TestPreset, params)).rejects.toThrow(/Typing verification for type (.*) failed./);
      };

      await throwForInvalidParams({});
      await throwForInvalidParams([]);
      await throwForInvalidParams('' as any);
      await throwForInvalidParams({ any: 'any' });
    });

    it('should not throw for valid params', async () => {
      await expect(Writebot.write(TestPreset, validParams)).resolves.not.toThrow();
    });

  });
});
