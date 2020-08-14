const router = require("express").Router();
const models = require("../models");

router.post("/api/userstocks/:username/:symbol/:amount", (req, res) => {
  models.Stock.findOneAndUpdate(
    { username: req.params.uesrname, symbol: req.params.symbol },
    { amount: req.params.amount },
    { upsert: true },
    (err, docs) => {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.status(200).end();
      }
    }
  );
});

router.get("/api/userstocks/:username", (req, res) => {
  models.Stock.find({ username: req.params.username }, (err, docs) => {
    if (err) {
      res.status(400).send(err.message);
    } else {
      res.json(docs);
    }
  });
});

router.get("/api/stocks/:symbol", (req, res) => {
  const searchUrl =
    "https://finnhub.io/api/v1/quote?symbol=" +
    req.params.symbol +
    "&token=" +
    process.env.FINN_API_KEY;

  axios.get(searchUrl).then((response) => {
      res.json(response);
  });
});
