module.exports.indexRoute = (req, res) => {
  res.render("index.ejs");
};

module.exports.smokyOliveRoute = (req, res) => {
  res.render("landing1.ejs");
};

module.exports.peacockRoute = (req, res) => {
  res.render("landing2.ejs");
};

module.exports.oliveSmokeRoute = (req, res) => {
  res.render("landing3.ejs");
};
