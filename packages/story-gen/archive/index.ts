import { array, Infer, object, optional, string } from 'superstruct';

const relationship = object({
  character: string(),
  relation: string()
});

const character = object({
  name: string(),
  personality: optional(string()),
  feelings: array(string()),
  action: optional(string()),
  other: optional(string())
});
const overview = object({
  title: string(),
  themes: optional(array(string())),
  tone: optional(string())
});
const introduction = object({
  location: optional(string()),
  period: optional(string()),
  mainCharacter: character,
  characters: optional(array(character)),
  other: optional(string())
});

const conflict = object({
  issue: string(),
  characters: array(character)
});

const action = object({
  characters: array(character),
  action: string()
});

const risingActions = array(action);

const climax = object({
  characters: array(character),
  climax: string(),
  emotions: optional(array(string()))
});

const fallingAction = object({
  characters: array(character),
  action: string(),
  emotions: optional(string())
});

const resolution = object({
  characters: array(character),
  outcome: string()
});

const storyStruct = object({
  overview,
  introduction,
  conflict,
  risingActions,
  climax,
  fallingAction,
  resolution
});

const config = {
  type: 'story-gen',
    params: storyStruct
};

const characterDescription = ({ feelings, action, personality, name, other }: Infer<typeof character>, present?: boolean) => {
  const feelingsDesc = feelings ? `He is feeling ${feelings.join(', ')}.` : '';
  const personalityDesc = personality ? ` and has the following personality ${personality}.`: '';
  const actionDesc = action ? ` He is doing the following: ${action}.` : '';
  const otherDesc = other ? `Here are other information: ${other}.` : '';
  const start = present ? `The following is a description of the character named ${name}. ` : '';

  return start + feelingsDesc + personalityDesc + actionDesc + otherDesc;
};
const introductionQuery = ({ tone, themes, title }: Infer<typeof overview>, { mainCharacter, characters, period, other, location }: Infer<typeof introduction>) => {
  const themesDesc = themes ?  ` , and the following themes ${themes.join(', ')}` : '';
  const periodDesc = period ? `This story is happening at the following period: ${period}` : '';
  const locationDesc = location ? `This story is happening at the following location: ${location}` : '';
  const charactersDesc = characters ? characters.map(c => characterDescription(c, true)).join('\n') : '';
  const otherDesc = other ? `Here are other information: ${other}.` : '';

  return `Generate the introduction for a story titled ${title} with the following tone ${tone}${themesDesc}.
  ${periodDesc}
  ${locationDesc}
  The main character is ${mainCharacter.name}.${characterDescription(mainCharacter)}.
  ${charactersDesc}
  ${otherDesc}
  `;
};

const conflictQuery = ({ issue, characters }: Infer<typeof conflict>) => {
  const charactersDesc = characters ? characters.map(c => characterDescription(c, true)).join('\n') : '';
  const issueDesc = issue ? `The conflict issue is the following: ${issue}` : '';

  return `Generate the conflict section for the story.
  ${issueDesc}
  ${charactersDesc}
  `;
};

const actionDescription = ({ characters, action }: Infer<typeof risingActions.schema>) => {
  const charactersDesc = characters.map(c => characterDescription(c, true)).join('\n');

  return `The following is happening: ${action}. It is involving the following characters: ${charactersDesc}`;
};

const risingActionsQuery = (actions: Infer<typeof risingActions>) => {
  const actionsDesc = actions.map(actionDescription);

  return `Generate the rising action section for the story based on the actions below.
  ${actionsDesc}
  `;
};

const makeQuery = ({ conflict, climax, fallingAction, risingActions, introduction, resolution, overview  }: Infer<typeof config.params>) => {
  return [
    introductionQuery(overview, introduction),
    conflictQuery(conflict),
    risingActionsQuery(risingActions)
  ];
};

export { config, makeQuery };
