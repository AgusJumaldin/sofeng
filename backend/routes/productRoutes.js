import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET all products, with optional ?bodyType=
router.get("/", async (req, res) => {
  try {
    const { bodyType } = req.query;

    const filter = {};
    if (bodyType) {
      filter.bodyType = bodyType;
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST create product (for seeding / admin panel)
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid product data" });
  }
});

export default router;
