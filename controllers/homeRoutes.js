const router = require("express").Router();
const slplscrape = require("./puppeteer");
const slplscrape2 = require("./puppeteer2");
const slplscrape3 = require("./puppeteer3");
const getresponse = require("./aicall");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
  // Loads homepage (search input)
});

router.get("/search/:term", async (req, res) => {
  try {
    let trialpup = req.params.term;
    let results = await slplscrape(trialpup);
    res.render("searchresult", { trialpup, results });
  } catch (err) {
    res.status(500).json(err);
  }
  // Loads results page
});

router.get("/search/:term1/:term2", async (req, res) => {
  try {
    let name = req.params.term1;
    let num = req.params.term2;
    let numhigh = 1000 - num;
    res.render("analysispage", { name, num, numhigh });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/call/:terms", async (req, res) => {
  try {
    let trialpup = req.params.terms;
    let results = await slplscrape2(trialpup);
    res.render("searchresult", { trialpup, results });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/keywords", async (req, res) => {
  try {
    let results = await slplscrape3(req.body.book, req.body.dewey);
    let results2 = await getresponse(
      `what are five words that describe the following passage; ${results}`
    );
    console.log(results, "puppet");
    console.log(results2, "ai");
    let finalResults = {
      results: results,
      results2: results2,
    };
    res.send(finalResults);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
