---
sidebar_position: 3
---

# Creating a preset

In this short tutorial, you will learn how to create your own preset and use it in Writebot. If you don't know what a preset is, it is explained in ["What is a preset?"](what-is-a-preset.mdx).

We will be creating the preset for a movie review generator. Then, we will use it with Writebot.

## Creating the preset

A preset is made of three things:
- A `config` object with the preset's name and `params` object.
- A `params` object to validate parameter.
- A `makeQuery` function that makes the query.

We will start with the **params** object. Then we will write the **query**. And finally, we will end by writing the **config**.

### Params

Our query will need a movie title string, a rating number between 0-5, and a tone. Our params will thus look like this:

```typescript
import { string, number, size } from 'superstruct';

const params = object({
  movieTitle: string(),
  rating: size(number(), 0, 5), // This means number must be between 0 and 5.
  tone: string()
});
```

### Make query

We will need to ask the AI to write a movie review based on a movie title, a rating, and a tone. One way of doing so is like the following:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```mdx-code-block
<Tabs
    defaultValue="javascript"
    values={[
        {label: 'Javascript', value: 'javascript'},
        {label: 'Typescript', value: 'typescript'},
    ]}>
<TabItem value="javascript">
```

```javascript
const makeQuery = ({ tone, movieTitle, rating }) => {
  return `
  Write a simple movie review for the movie title ${movieTitle} using the following tone ${tone}.
  The rating given is ${rating}.
  `;
};
```

```mdx-code-block
</TabItem>
<TabItem value="typescript">
```

```typescript
import { Infer } from 'superstruct';

const makeQuery = ({ tone, movieTitle, rating }: Infer<typeof params>) => {
  return `
  Write a simple movie review for the movie title ${movieTitle} using the following tone ${tone}.
  The rating given is ${rating}.
  `;
};
```

```mdx-code-block
</TabItem>
</Tabs>
```

#### Multiple queries

If you send an array of strings, it will return an array of OpenAI responses.

### Config

The config object is the simplest of all. Our preset name will be `movie-review-gen`, and we've already defined our param object. All that is left is to put it all in the config object.

```typescript
const config = {
  preset: 'movie-review-gen',
  params,
}
```

### Creating the preset object

The preset object is made of the config, and the makeQuery function like so:

```mdx-code-block
<Tabs
    defaultValue="javascript"
    values={[
        {label: 'Javascript', value: 'javascript'},
        {label: 'Typescript', value: 'typescript'},
    ]}>
<TabItem value="javascript">
```

```javascript
const MovieReviewGen = { config, makeQuery };
```

```mdx-code-block
</TabItem>
<TabItem value="typescript">
```

```typescript
import { Preset } from 'writebot';

const MovieReviewGen: Preset = { config, makeQuery };
```

```mdx-code-block
</TabItem>
</Tabs>
```

### Result

The final result for our movie review generator should look like this:

```mdx-code-block
<Tabs
    defaultValue="javascript"
    values={[
        {label: 'Javascript', value: 'javascript'},
        {label: 'Typescript', value: 'typescript'},
    ]}>
<TabItem value="javascript">
```

```javascript
import { string, number, size } from 'superstruct';

const params = object({
    movieTitle: string(),
    rating: size(number(), 0, 5), // This means number must be between 0 and 5.
    tone: string()
});

const makeQuery = ({ tone, movieTitle, rating }) => {
    return `
  Write a simple movie review for the movie title ${movieTitle} using the following tone ${tone}.
  The rating given is ${rating}.
  `;
};

const config = {
    preset: 'movie-review-gen',
    params,
}

const MovieReviewGen = { config, makeQuery };
```

```mdx-code-block
</TabItem>
<TabItem value="typescript">
```

```typescript
import { Preset } from 'writebot';
import { string, number, size, Infer } from 'superstruct';

const params = object({
  movieTitle: string(),
  rating: size(number(), 0, 5), // This means number must be between 0 and 5.
  tone: string()
});

const makeQuery = ({ tone, movieTitle, rating }: Infer<typeof params>) => {
  return `
  Write a simple movie review for the movie title ${movieTitle} using the following tone ${tone}.
  The rating given is ${rating}.
  `;
};

const config = {
  preset: 'movie-review-gen',
  params,
}

const MovieReviewGen: Preset = { config, makeQuery };
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Using the preset

Once you've created your preset, using it is very easy.

```mdx-code-block
<Tabs
    defaultValue="object"
    values={[
        {label: 'Object', value: 'object'},
        {label: 'Name', value: 'name'},
    ]}>
<TabItem value="object">
```

```javascript
const { Writebot } = require('writebot');
const MovieReviewGen = require('./movieReviewGen');

Writebot.initialize({
    apiKey: API_KEY /* API Key from openai */
});

Writebot.write(MovieReviewGen, {
    movieTitle: 'Interstellar',
    tone: 'Amazed',
    rating: 5
});
```

```mdx-code-block
</TabItem>
<TabItem value="name">
```

```javascript
import { Writebot } from 'writebot';

Writebot.initialize({
    apiKey: API_KEY /* API Key from openai */,
    presets: [
        require('./movieReviewGen')
    ]
});

Writebot.write('movie-review-gen', { // Use the name you gave in the presets config object
    movieTitle: 'Interstellar',
    tone: 'Amazed',
    rating: 5
});
```

```mdx-code-block
</TabItem>
</Tabs>
```
