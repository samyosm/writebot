---
sidebar_position: 1
---

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

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
>>>>>>> 878cc89 (initialized Docusaurus)
