const router = require("express").Router();
const models = require("../models");
const moment = require("moment");
const axios = require("axios");

router.post("/api/userstocks/:username/:symbol/:amount", (req, res) => {
  models.Stock.findOneAndUpdate(
    { username: req.params.username, symbol: req.params.symbol },
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

router.get("/api/symbols", (req, res) => {
  const searchUrl =
    "https://finnhub.io/api/v1/stock/symbol?exchange=US" +
    "&token=" +
    process.env.FINN_API_KEY;

  axios.get(searchUrl).then((response) => {
    res.json(response.data);
  });
});

router.get("/api/stocks/:symbol", (req, res) => {
  const searchUrl =
    "https://finnhub.io/api/v1/quote?symbol=" +
    req.params.symbol +
    "&token=" +
    process.env.FINN_API_KEY;

  axios.get(searchUrl).then((response) => {
    res.json(response.data);
  });
});

router.get("/api/stocksnews/:symbol", (req, res) => {
  const toString = moment().format("YYYY-MM-DD");
  const fromString = moment().subtract(1, "months").format("YYYY-MM-DD");

  const searchUrl =
    "https://finnhub.io/api/v1/company-news?symbol=" +
    req.params.symbol +
    "&token=" +
    process.env.FINN_API_KEY +
    "&from=" +
    fromString +
    "&to=" +
    toString;

  axios.get(searchUrl).then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
