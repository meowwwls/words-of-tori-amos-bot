// just for local use to make adding new lyrics easier
const lyricsHandler = require("../lyrics/lyricsHandler");
const { addLyric, getLyrics } = lyricsHandler;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("app"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.post("/add", (request, response) => {
  addLyric(request.body);
  response.redirect("/");
});

app.get("/lyrics", (request, response) => {
  response.send(getLyrics());
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port 3000");
});
