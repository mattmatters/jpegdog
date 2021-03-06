const express = require("express");
const redis = require("redis");
const request = require("request-promise");
const morgan = require("morgan");

// Configuration
const PORT = process.env.PORT || 3000;
const PEXELS_URL = "https://api.pexels.com/v1/search";
const PEXELS_API_TOKEN = process.env.PEXELS_API_TOKEN;

// Library
const getImages = async () => {
  const opts = {
    uri: "https://api.pexels.com/v1/search",
    qs: {
      query: "dog",
      per_page: 80
    },
    headers: {
      Authorization: PEXELS_API_TOKEN
    },
    json: true
  };

  return await request(opts);
};

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Server
const app = express();

if (process.env.NODE_ENV === "dev") {
  console.info("Trusting one level of proxying for developing.");
  app.set("trust proxy", 1);
}

app.use(morgan("combined"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  return next();
});

app.get("/images", async (req, res, next) => {
  try {
    const { photos } = await getImages();
    return res.json(shuffle(photos));
  } catch (e) {
    return next(e);
  }
});

app.listen(PORT, () =>
  console.log(`Gifs to Gifs is listening on port ${PORT}!`)
);
