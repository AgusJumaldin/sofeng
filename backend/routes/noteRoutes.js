import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// GET /api/notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/notes
router.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const note = await Note.create({ title, body });
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

export default router;
