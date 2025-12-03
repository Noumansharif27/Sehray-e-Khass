// Get Addd Product
module.exports.getAddProduct = () => {
  res.render("addProductFrom.ejs");
};

//  Post Product
module.exports.PostaddProduct = (req, res) => {
  const { product } = req.body;
  console.log(product);
  res.send("product added");
};

module.exports.findProduct = (req, res) => {
  res.render("landing1.ejs");
};

module.exports.updateProduct = (req, res) => {
  res.render("landing2.ejs");
};

module.exports.deleteProduct = (req, res) => {
  res.render("landing3.ejs");
};
