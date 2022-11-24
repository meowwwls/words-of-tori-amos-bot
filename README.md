# Words of Tori Amos – A Tori Amos Lyrics Twitter Bot

![Screenshot of song lyrics being tweeted from the Words of Tori Amos Twitter account](https://github.com/meowwwls/words-of-tori-amos-bot/blob/main/public/wot-ss.png?raw=true)

A fun way of learning more about Node, bots that don't cause harm, serverless functions, and the Twitter API. A daily dose (or two) of lyrics from my favorite musician, Tori Amos.

## Adding New Lyrics

To make the process of adding new lyrics easier on myself, I created a bare-bones Express app that I run locally when needed, using a form to write to a `.json` file containing all of the lyrics.

**To run:**

`node app/app.js`

Navigate to **http://localhost:3000/**

The input is formatted before it is saved to the file. For example, with the lyric string, extra whitespace is replaced with new lines (`\n`). The string is also trimmed if it is longer than the characters left after **#ToriAmos** and **#TheSongTitle**. The album and song titles are title-cased. This makes it much less fussy when I am adding new lyrics, knowing it will be properly formatted before the `.json` file is updated.

Before the file is updated, the lyrics are sorted by album title, just to make sure the data stays organized, and a check is done to prevent duplicate lyrics from being added.

## Deploying to AWS Lambda Using Serverless and Running Routinely

**Run:**

`sls deploy`

Using a _CloudWatch Event_ trigger in the AWS Lambda Function config, the bot should Tweet a random lyric every 15 hours (or however long I choose).
