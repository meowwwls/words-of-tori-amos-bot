"use strict";
const { TwitterApi } = require("twitter-api-v2");
const { getLyrics } = require("./lyrics/lyricsHandler");
const { randomNumber } = require("./helpers");

const config = {
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
};

const twitter = new TwitterApi(config);

const twitterRW = twitter.readWrite;

const getLyric = () => {
  const allLyrics = getLyrics();
  const random = randomNumber(allLyrics.length);
  const lyric = allLyrics[random];

  return lyric;
};

module.exports.tweet = async (event) => {
  const lyric = getLyric();
  const songHash = lyric.song.replace(/\s/g, "");
  const tweetContent = `${lyric.lyric}\n #ToriAmos #${songHash}`;
  const response = await twitterRW.v1.tweet(tweetContent);

  return response;
};
