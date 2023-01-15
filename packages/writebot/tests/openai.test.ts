import { OpenAI } from '../openai';

describe('writebot(openai)', () => {

  const openai = new OpenAI('test');

  const testNumberIsNatural = async (obj: object, error: string) => {
    const prompt = 'test';
    await expect(openai.createDavinciCompletion({ prompt, ...obj })).rejects.toThrowError(error);
  };

  const testInvalidMaxToken = async (maxToken: number) => {
    return testNumberIsNatural({ maxToken }, 'Invalid maxToken');
  };

  const testInvalidTemperature = async (temperature: number) => {
    return testNumberIsNatural({ temperature }, 'Invalid temperature');
  };

  it('throws when constructed without an API KEY', async () => {
    expect(() => new OpenAI('')).toThrow('Invalid API_KEY');
  });

  it('throws when called without a valid prompt', async () => {
    await expect(openai.createDavinciCompletion({ prompt: '' })).rejects.toThrow('Invalid prompt');
  });

  it('should throw when temperature is not valid', async () => {

    await testInvalidTemperature(-0.6);
    await testInvalidTemperature(Infinity);
    await testInvalidTemperature(NaN);
    await testInvalidTemperature(-Infinity);
    await testInvalidTemperature(-1);
    await testInvalidTemperature(2);
    await testInvalidTemperature(1.1);

  });

  it('should throw when maxToken is not natural', async () => {

    await testInvalidMaxToken(0.5);
    await testInvalidMaxToken(-0.6);
    await testInvalidMaxToken(Infinity);
    await testInvalidMaxToken(NaN);
    await testInvalidMaxToken(-Infinity);
    await testInvalidMaxToken(-1);
    await testInvalidMaxToken(0);

  });
});


