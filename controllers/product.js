const Product = require("../models/Product");

exports.list = async (req, res) => {
  try {
    const productlist = await Product.find({}).exec();
    res.send(productlist);
  } catch (err) {
    res.status(500).send("server error");
  }
};

exports.read = async (req, res) => {
  const id = req.params.id;
  const productID = await Product.findOne({ _id: id }).exec();
  res.send(productID);
};

exports.updete = async (req, res) => {
  try {
    const id = req.params.id;
    const productUpdeted = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    ).exec();
    res.send(productUpdeted);
  } catch (err) {
    res.status(500).send("server error");
  }
};

exports.add = async (req, res) => {
  try {
    const producted = await Product(req.body).save();
    res.send(producted);
  } catch (err) {
    res.status(500).send("server error");
  }
};

exports.del = async (req, res) => {
  try {
    const id = req.params.id;
    const productUpdeted = await Product.findOneAndDelete(
      { _id: id },
      req.body
    ).exec();
    res.send(productUpdeted);
  } catch (err) {
    res.status(500).send("server error");
  }
};
