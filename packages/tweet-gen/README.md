# tweet-gen

With the help of a provided tweet description and tone, you can quickly create tweets using this "Tweet Generator" library.
Users can provide a tweet description and tone (such as positive, negative, or neutral) to have a tweet generated automatically.
Social media managers, marketers, and anybody else wishing to quickly create tweets for personal or business usage can all benefit from this library.

## Installation

You can install tweet-gen by doing `npm install tweet-gen` or `yarn add tweet-gen`.

## Params

Tweet-gen allows you to create simple tweets from
- a `description`, and
- a `tone`.

| Parameter   | Type   | Information                                   |
|-------------|--------|-----------------------------------------------|
| description | String | Describe what you want the tweet to be about  |
| tone        | String | Specify the attitude or feeling of the tweet. |

## Example

```typescript title="Request"
const { Writebot } = require('writebot');
const TweetGen = require('tweet-gen');

Writebot.initialize({
  apiKey: API_KEY,
});

Writebot.write(TweetGen, {
  description: 'A tweet about AIs',
  tone: 'Surprised'
}).then((e: any) => console.log(e.data.choices[0].text));
```
```textmate title="Result"
Wow! Artificial Intelligence is getting smarter by the second - I can't believe how far we've come! #AI #Technology
```
