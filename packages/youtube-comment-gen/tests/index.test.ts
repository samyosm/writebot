import YoutubeCommentGen from '../index';

describe('youtube-comment-gen', () => {
  describe('params', () => {
    it('detects wrong param types', () => {
      const params = {
        videoTitle: ['test'],
        commentDescription: 432,
        tone: 'test'
      };

      expect(YoutubeCommentGen.config.params.is(params)).toBeFalsy();
    });

    it('detect good params', () => {
      const params = {
        videoTitle: 'test',
        commentDescription: 'test',
        tone: 'test'
      };

      expect(YoutubeCommentGen.config.params.is(params)).toBeTruthy();
    });
  });

  describe('query', () => {
    it('returns the right query', () => {
      const params = {
        videoTitle: 'test',
        commentDescription: 'test',
        tone: 'test'
      };
      expect(YoutubeCommentGen.makeQuery(params)).toEqual(`
  Generate a youtube comment for a video with the following title, comment description, and tone.
  Video title: ${params.videoTitle}
  Comment description: ${params.commentDescription}
  Tone: ${params.tone}
  `);
    });

    /* No need for undefined param test because all params are required here giut a*/
  });
});
