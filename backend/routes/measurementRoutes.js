import express from "express";
import Measurement from "../models/Measurement.js";
import { detectBodyType } from "../utils/bodyTypeUtils.js";

const router = express.Router();

// POST /api/measurements  → save & classify
router.post("/", async (req, res) => {
  try {
    const { shoulders, bust, waist, hips, sessionId } = req.body;

    if (![shoulders, bust, waist, hips].every(v => v !== undefined && v !== null)) {
      return res.status(400).json({ message: "All measurement fields are required." });
    }

    const S = Number(shoulders);
    const B = Number(bust);
    const W = Number(waist);
    const H = Number(hips);

    const bodyType = detectBodyType(S, B, W, H);

    const measurement = new Measurement({
      shoulders: S,
      bust: B,
      waist: W,
      hips: H,
      bodyType,
      sessionId
    });

    const saved = await measurement.save();

    res.status(201).json({ message: "Saved", data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/measurements/:sessionId → history for user
router.get("/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const records = await Measurement.find({ sessionId }).sort({ createdAt: -1 });
    res.json(records);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
