import { Product } from "../models/ProductModal.js";

export const createProduct = async (req, res) => {
  try {
    const { title, desc, price, image, stocks, category } = req.body;

    const product = await Product.create({
      title,
      desc,
      price,
      image,
      stocks,
      category,
    });

    res.status(201).json({
      message: "Product Created",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getaProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({
        message: "No Product with this id",
      });
    }
    res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
