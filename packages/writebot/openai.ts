import { Configuration, OpenAIApi } from 'openai';

export type DavinciCompletion = {
  prompt: string,
  maxToken?: number,
  temperature?: number
};

const isNaturalNum = (num: number) => {
  return (
    typeof num === 'number' &&
    Number.isInteger(num) &&
    !isNaN(num) &&
    num !== Infinity &&
    num > 0
  );
};

export class OpenAI {
  private readonly openai: OpenAIApi;
  constructor(apiKey: string) {
    if(!apiKey) throw new Error('Invalid API_KEY');
    const configuration = new Configuration({
      apiKey: apiKey
    });
    this.openai = new OpenAIApi(configuration);
  }
  createDavinciCompletion = async ({ prompt, maxToken = 3000, temperature = 0 }: DavinciCompletion) => {
    if (!prompt) throw new Error('Invalid prompt');
    if (!isNaturalNum(maxToken)) throw new Error('Invalid maxToken');
    if (typeof temperature !== 'number' || isNaN(temperature) || temperature < 0 || temperature > 1) throw new Error('Invalid temperature');

    return await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature,
      max_tokens: maxToken
    });
  };

}

