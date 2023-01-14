# story-gen

This story generator is a tool for easily creating stories based on a list of characters, a location, a main action, a reason for that action, and a list of themes as parameters.
The library uses the input parameters to generate a correct story, with a beginning, middle, and end.
The generated story will include the characters, location, action, and reason provided, and will incorporate the themes from the provided list. It can be useful for writers, students, or anyone looking to quickly generate a story for personal or professional use.

## Installation

You can install story-gen by doing `npm install story-gen` or `yarn add story-gen`.

## Params

story-gen allows you to create simple stories from
- a list of characters,
- a location,
- a main action
- a reason for that action, and
- a list of themes.

| Parameter  | Type   | Information                            |
|------------|--------|----------------------------------------|
| characters | String | The characters in the story.           |
| location   | String | Where and when the story is happening? |
| action     | String | What are the characters trying to do?  |
| reason     | String | Why are they trying to do that  ?      |
| themes     | String | What are the themes of this story?     |

## Example

```typescript title="Request"
const { Writebot } = require('writebot');
const StoryGen = require('story-gen');

Writebot.initialize({
  apiKey: API_KEY,
});

Writebot.write(StoryGen, {
  characters: 'Samy and his brother Elyas',
  location: 'in the middle age in france',
  action: 'trying not to get killed by the villagers',
  reason: 'they were mistaken for murders',
  themes: 'brotherhood, family, and adventures'
}).then((e: any) => console.log(e.data.choices[0].text));
```
### Result
> Once upon a time, in a small village in the middle of France, there lived two brothers, Samy and Elyas. They were both brave and strong, and they were the best of friends. They were always together, and they shared a special bond that could never be broken.

> One day, the brothers were out hunting in the woods when they heard a loud scream coming from the village. They rushed back to the village to see what was happening, and when they arrived, they saw that the villagers were in a state of panic. They had heard that two murderers had escaped from the nearby prison, and they were convinced that the brothers were the ones they were looking for.

> The villagers were ready to kill the brothers, but Samy and Elyas managed to convince them that they were innocent. They explained that they had been out hunting in the woods and had nothing to do with the escape. The villagers were still suspicious, but they decided to give the brothers a chance to prove their innocence.

> The brothers were given a task: they had to find the two murderers and bring them back to the village. If they succeeded, they would be allowed to stay in the village and live in peace. If they failed, they would be killed.

> The brothers accepted the challenge and set off on their quest. They traveled through the countryside, searching for any clues that might lead them to the murderers. Along the way, they encountered many strange and dangerous creatures, and they had to use all of their courage and strength to survive.

> Finally, after weeks of searching, the brothers found the two murderers. They were hiding in a cave, and the brothers were able to capture them and bring them back to the village. The villagers were relieved to see the murderers, and they thanked the brothers for their bravery.

> The brothers were allowed to stay in the village, and they were welcomed with open arms. They were given a place to live and were treated like family. Samy and Elyas were happy to be part of the village, and they enjoyed their new life.

> But their happiness was short-lived. One day, the brothers were out hunting in the woods when they were attacked by a group of bandits. The bandits were after the two murderers, and they wanted to take them back to the prison. The brothers fought bravely, but they were outnumbered and eventually captured.

> The bandits took the brothers and the two murderers back to the prison. The brothers were sentenced to death, but the two murderers were given a second chance. The brothers were devastated, but they knew that they had done the right thing.

> The brothers were taken to the gallows, and the villagers gathered to watch. Just as the executioner was about to pull the lever, a voice rang out from the crowd. It was the voice of the two murderers, who had been given a second chance. They had come to save the brothers, and they begged the executioner to spare their lives.

> The executioner was moved by their plea, and he agreed to spare the brothers. The villagers cheered, and the brothers were released. They were reunited with their family and friends, and they were welcomed back into the village with open arms.

> Samy and Elyas had been through a lot, but they had come out stronger than ever. They had faced danger and death, but they had never given up. They had proven their innocence, and they had saved the lives of two innocent men.

> The brothers had learned a valuable lesson: no matter how difficult the situation, you should never give up. They had faced danger and death, but they had never given up. They had proven their innocence, and they had saved the lives of two innocent men.

> The brothers had found a new home in the village, and they were happy to be part of the community. They were respected and admired, and they were a symbol of courage and strength. Samy and Elyas had faced danger and death, but they had never given up. They had proven their innocence, and they had saved the lives of two innocent men. They were a symbol of courage and strength, and they were an example of brotherhood and family.
