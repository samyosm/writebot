import { Infer, object, string } from 'superstruct';
import { Preset } from 'writebot';

const storyStruct = object({
  characters: string(),
  location: string(),
  action: string(),
  reason: string(),
  themes: string()
});

const config = {
  preset: 'story-gen',
  params: storyStruct
};

const makeQuery = ({ action, reason, themes, location, characters }: Infer<typeof config.params>) => {
  return `Write a 3000 words story set in ${location}, where ${characters}, must ${action} because ${reason}. The story should include diverse characters each with their own unique backstory and motivations. The plot should be filled with ${themes} and be made of an introduction, a conflict, a few paragraphs of rising actions, a few paragraphs for a climax were the tension is the highest, a few paragraphs of falling actions, and a resolution. The story should also have a lot of plot twists, unexpected turns, and moments of high tension, and should have a final resolution for all the characters. Do not write headings.`;
};

const StoryGen: Preset = { config, makeQuery };

export default StoryGen;
