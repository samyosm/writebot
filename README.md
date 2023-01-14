# Writebot Library

Writebot is a Node.js library that enables developers to generate text using AI. Using Writebot, developers can create their own custom text generation presets to fit their specific needs.

## Docs

You can find the full documentation for [Writebot here](https://writebot.app/docs/intro).

## Overview

Writebot works by taking a preset and a set of parameters and producing text with the corresponding AI. 

However, developers can also create their own custom presets to fit their needs.

## Installation

To install Writebot, use the following command:

`npm install writebot`
or
`yarn add writebot`

## Usage

Writebot is a Node.js library and can be used in any Node.js project. To use Writebot, import the library and the desired preset:

To generate text with the desired preset first get your API Key from openai, then use the `write` method and pass in the preset name or object and the parameters:

### Using the preset object

This will generate a tweet about AIs with an "afraid" tone.

```js
const {Writebot} = require('writebot');
const TweetGen = require('tweet-gen');

Writebot.initialize({
    // You can get this at openai
    apiKey: 'API_KEY',
})

const tweet = Writebot.write(TweetGen, {
  description: 'A tweet about AIs',
  tone: 'Afraid'
});
```
Result:
```text
I'm scared of the way #AI is taking over our world. It feels like our humanity is being taken away from us, one algorithm at a time. #AIisComing
```

### Using the preset name
Or if you would like to use string to identify preset you could do it like this:
```js
const Writebot = require('writebot');

Writebot.initialize({
    apiKey: 'API_KEY',
    // Add the presets you would like to use here.
    types: [
        require('tweet-gen')
    ]
})

const tweet = Writebot.write('tweet', {
  description: 'A tweet meme about developers.',
  tone: 'Sarcastic'
});
```
Result:
```text
Developers: Always finding new and creative ways to break things. #ProgrammingProblems
```

## License

Writebot is released under the MIT License. See [LICENSE](https://github.com/writebot/writebot/blob/master/LICENSE) for details.
