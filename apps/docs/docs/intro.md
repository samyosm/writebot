---
sidebar_position: 1
---

<<<<<<< HEAD
<<<<<<< HEAD
# Getting started

Writebot is a Node.js library that enables developers to generate text using AI. Using Writebot, developers can create their own custom text generation presets to fit their specific needs.

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

### Getting an API Key

1. Visit OpenAI's website (https://openai.com/) and create an account.

2. Click on the "Applications" tab in the top right corner of the website.

3. Select "GPT-3 OpenAI API" and click "Create Application".

4. Enter the details of your application, such as name, description, and purpose.

5. Agree to the terms and conditions, create an API key, and click "Create".

6. You will now see your GPT-3 OpenAI API key in the "Application" page.

### Using the preset object

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

This will generate a tweet about AIs with an "afraid" tone.

## Presets
*Note: if you are interested, you can issue a pull request with the presets you developed here.*

Currently, Writebot has the following presets available on NPM:

* tweet-gen
* youtube-comment-gen
* story-gen

## License

Writebot is released under the MIT License. See [LICENSE](https://github.com/writebot/writebot/blob/master/LICENSE) for details.
=======
# Tutorial Intro
=======
# Getting started
>>>>>>> 82b2c6f (Added docs)

Writebot is a Node.js library that enables developers to generate text using AI. Using Writebot, developers can create their own custom text generation presets to fit their specific needs.

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

### Getting an API Key

1. Visit OpenAI's website (https://openai.com/) and create an account.

2. Click on the "Applications" tab in the top right corner of the website.

3. Select "GPT-3 OpenAI API" and click "Create Application".

4. Enter the details of your application, such as name, description, and purpose.

5. Agree to the terms and conditions, create an API key, and click "Create".

6. You will now see your GPT-3 OpenAI API key in the "Application" page.

### Using the preset object

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

This will generate a tweet about AIs with an "afraid" tone.

## Presets
*Note: if you are interested, you can issue a pull request with the presets you developed here.*

<<<<<<< HEAD
Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
>>>>>>> 878cc89 (initialized Docusaurus)
=======
Currently, Writebot has the following presets available on NPM:

* tweet-gen
* youtube-comment-gen
* story-gen

## License

Writebot is released under the MIT License. See [LICENSE](https://github.com/writebot/writebot/blob/master/LICENSE) for details.
>>>>>>> 82b2c6f (Added docs)
