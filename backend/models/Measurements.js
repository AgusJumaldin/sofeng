import mongoose from "mongoose";

const MeasurementSchema = new mongoose.Schema({
  height: Number,
  bust: Number,
  waist: Number,
  hips: Number,
  shoulders: Number,
  bodyType: String
}, { timestamps: true });

export default mongoose.model("Measurement", MeasurementSchema);
