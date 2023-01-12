// eslint-disable-next-line @typescript-eslint/no-var-requires
const TweetGen = require('tweet-gen');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Writebot } = require('writebot');

Writebot.initialize({
    apiKey: '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',
    types: [
        TweetGen
    ]
});

const tweet = Writebot.write('tweet', {
    description: 'A review that shows appreciation.',
    tone: 'Sarcastically angry'
});

tweet.then(e => e.data.choices[0].text).then(console.log);
