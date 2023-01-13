import { Configuration, OpenAIApi } from 'openai';

export type DavinciCompletion = {
  prompt: string,
  maxToken?: number,
  temperature?: number
};

export class OpenAI {
  private readonly openai: OpenAIApi;
  constructor(apiKey: string) {
    const configuration = new Configuration({
      apiKey: apiKey
    });
    this.openai = new OpenAIApi(configuration);
  }
  createDavinciCompletion = async ({ prompt, maxToken = 3000, temperature = 0 }: DavinciCompletion) => {
    return await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature,
      max_tokens: maxToken
    });
  };

}

