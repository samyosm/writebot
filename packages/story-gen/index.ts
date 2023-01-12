import { array, Infer, object, string } from 'superstruct';


// TODO: Instead of generating request as writebot currently allows, you could generate certain aspects, then feed those to the AI to generate even better stories.

const relationship = object({
  character: string(),
  relation: string()
});

const character = object({
  name: string(),
  personality: string(),
  relationships: array(relationship)
});

const plotStruct = object({
  characters: array(character), // Involved characters
  startingSentence: string(),
  location: string(),
  style: string(),
  emotion: string(), // Conveyed emotions
  other: string()
});

const config = {
  type: 'story-gen',
    params: object({
      plots: array(plotStruct)
  })
};

const makePlotQuery = ({ characters, emotion, location,startingSentence,style,other } : Infer<typeof plotStruct>) => {
  return `
  Generate one or two paragraphs for a story starting with ${startingSentence} using the following characters ${characters.map(c => `Name: ${c.name}, Personality ${c.personality}; `)} at ${location},
  this section should convey the following emotion: ${emotion}, it should be written in the following style: ${style}. Here are other information about this: ${other}.
  `;
};

const makeQuery = ({ plots  }: Infer<typeof config.params>) => {
  return plots.map(makePlotQuery);
};

export { config, makeQuery };
