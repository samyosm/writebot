import StoryGen from '../index';

describe('story-gen', () => {
  describe('tweet-gen', () => {
    describe('params', () => {
      it('detects wrong param types', () => {
        const params = {
          characters: 'test',
          location: ['test'],
          action: 62,
          reason: 'test',
          themes: 12
        };

        expect(StoryGen.config.params.is(params)).toBeFalsy();
      });

      it('detect good params', () => {
        const params = {
          characters: 'test',
          location: 'test',
          action: 'test',
          reason: 'test',
          themes: 'test'
        };

        expect(StoryGen.config.params.is(params)).toBeTruthy();
      });
    });

    describe('query', () => {
      it('returns the right query', () => {
        const params = {
          characters: 'test',
          location: 'test',
          action: 'test',
          reason: 'test',
          themes: 'test'
        };
        expect(StoryGen.makeQuery(params)).toEqual(`Write a 3000 words story set in ${params.location}, where ${params.characters}, must ${params.action} because ${params.reason}. The story should include diverse characters each with their own unique backstory and motivations. The plot should be filled with ${params.themes} and be made of an introduction, a conflict, a few paragraphs of rising actions, a few paragraphs for a climax were the tension is the highest, a few paragraphs of falling actions, and a resolution. The story should also have a lot of plot twists, unexpected turns, and moments of high tension, and should have a final resolution for all the characters. Do not write headings.`);
      });

      /* No need for undefined param test because all params are required here giut a*/
    });
  });

});
