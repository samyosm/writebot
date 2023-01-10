import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export type DavinciCompletion = {
  prompt: string,
  maxToken?: number,
  temperature?: number
};

export const createDavinciCompletion = async ({ prompt, maxToken = 144, temperature = 0.7 }: DavinciCompletion) => {
  return await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature,
    max_tokens: maxToken
  });
};

