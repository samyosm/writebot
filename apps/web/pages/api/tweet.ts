// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Writebot } from 'writebot';
import TweetGen from 'tweet-gen';

type Data = {
  text: string
};


Writebot.initialize({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  apiKey: process.env.OPEN_AI_TOKEN as string
});

let cache: any = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  const params = {
    description: body.description || 'A tweet about AIs',
    tone: body.tone || 'Surprised but afraid'
  };

  if (!cache) cache = await Writebot.write(TweetGen, params);

  res.status(200).json({
    text: cache.data.choices[0].text as string
  });
}
