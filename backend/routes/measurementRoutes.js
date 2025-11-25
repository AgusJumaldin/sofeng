// backend/routes/measurementRoutes.js
import express from "express";
import Measurement from "../models/Measurement.js";

const router = express.Router();

// ======================
// BODY TYPE CALCULATOR
// ======================
function calculateBodyType({ shoulders, bust, waist, hips }) {
  shoulders = Number(shoulders);
  bust = Number(bust);
  waist = Number(waist);
  hips = Number(hips);

  const diffBustHips = Math.abs(bust - hips);
  const diffShoulderHip = shoulders - hips;
  const waistToBust = waist / bust;
  const waistToHip = waist / hips;

  // Debug biar kamu lihat di terminal
  console.log("CALC BODY TYPE:", {
    shoulders,
    bust,
    waist,
    hips,
    diffBustHips,
    diffShoulderHip,
    waistToBust,
    waistToHip,
  });

  // 1) HOURGLASS – pinggang kecil & bust/hips mirip
  if (diffBustHips <= 5 && waistToBust <= 0.75 && waistToHip <= 0.75) {
    return "hourglass";
  }

  // 2) PEAR – hips jauh lebih besar dari bust
  if (hips - bust >= 7 && waistToHip <= 0.8) {
    return "pear";
  }

  // 3) INVERTED TRIANGLE – shoulders jauh lebih besar dari hips
  if (diffShoulderHip >= 7) {
    return "inverted-triangle";
  }

  // 4) APPLE – waist besar, hampir sama dengan bust/hips
  if (waistToBust >= 0.85 && waistToHip >= 0.85) {
    return "apple";
  }

  // 5) RECTANGLE – ukuran mirip-mirip
  return "rectangle";
}



// ======================
// GET /api/measurements
// ======================
router.get("/", async (req, res) => {
  try {
    const measurements = await Measurement.find().sort({ createdAt: -1 });
    res.json(measurements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch measurements" });
  }
});


// ======================
// POST /api/measurements
// ======================
router.post("/", async (req, res) => {
  try {
    const { shoulders, bust, waist, hips, sessionId } = req.body;

    // HITUNG bodyType di sini
    const bodyType = calculateBodyType({
      shoulders,
      bust,
      waist,
      hips,
    });

    const newMeasurement = new Measurement({
      shoulders,
      bust,
      waist,
      hips,
      bodyType, // <-- masukin di DB
      sessionId,
    });

    const saved = await newMeasurement.save();

    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

export default router;
