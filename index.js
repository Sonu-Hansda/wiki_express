const express = require("express");
const cors = require("cors");
const wiki = require("wikipedia");
const app = express();
const port = 3000;

app.use(cors({
  origin:"*"
}));

// Searching for any topic
app.get("/search", async (req, res) => {
  const query = req.query.topic;
  const response = await wiki.search(query);
  let results = {};
  if (response.results.length > 0) {
    results = await response.results.map((element) => element.title);
  } else {
    results = {
      message: "No result found.",
      code: 404,
    };
  }
  res.send(results);
});

// Getting short summary for a topic
app.get("/summary", async (req, res) => {
  const query = req.query.topic;
  let result = {};
  try {
    const response = await wiki.summary(query);
    result = {
      title: response.title,
      "image-url": response.originalimage.source,
      description: response.description,
      "short-summary": response.extract,
    };
  } catch (error) {
    console.log(error);
    result = {
      message: "No result found.",
      code: 404,
    };
  }
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
