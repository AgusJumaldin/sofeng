import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Measurement from "./models/Measurement.js";
import { detectBodyType } from "./utils/detectBodyType.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("HerShape API running"));

app.post("/api/measurements/analyze", async (req, res) => {
  try {
    const input = req.body;
    const analysis = detectBodyType(input);
    const doc = await Measurement.create({ ...input, bodyType: analysis.bodyType });
    res.json({ id: doc._id, ...analysis });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
