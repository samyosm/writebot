import TweetGen from '../index';

describe('tweet-gen', () => {
  describe('params', () => {
    it('detects wrong param types', () => {
      const params = {
        description: 32, // supposed to be a string
        tone: 'tone'
      };

      expect(TweetGen.config.params.is(params)).toBeFalsy();
    });
    it('detects wrong params', () => {
      const params = {
        title: 'Bla bla bla', // title doesn't exist.
        tone: 'tone'
      };

      expect(TweetGen.config.params.is(params)).toBeFalsy();
    });
    it('detect good params', () => {
      const params = {
        description: 'hello',
        tone: 'tone'
      };

      expect(TweetGen.config.params.is(params)).toBeTruthy();
    });
  });

  describe('query', () => {
    it('returns the right query', () => {
      const params = {
        tone: 'tone',
        description: 'description'
      };
      expect(TweetGen.makeQuery(params)).toEqual(`
  Generate a simple tweet with the following description and tone without any hashtags .
  It is important for this tweet not to have any hashtags in it so do not put any.
  Description: ${params.description}
  Tone: ${params.tone}
  `);
    });

    /* No need for undefined param test because all params are required here giut a*/
  });
});
