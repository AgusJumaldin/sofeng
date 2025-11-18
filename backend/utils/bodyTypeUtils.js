// S = shoulders, B = bust, W = waist, H = hips
export const detectBodyType = (S, B, W, H) => {
  if (![S, B, W, H].every(v => typeof v === "number" && v > 0)) {
    return null;
  }

  const upperMax = Math.max(S, B);
  const Avg = (upperMax + H) / 2;
  const waistRatio = W / Avg;

  const isBalancedUpperHip = Math.abs(upperMax - H) <= 0.05 * Avg;

  // Inverted Triangle
  if (!isBalancedUpperHip && upperMax >= H * 1.05) {
    if (waistRatio >= 0.80) return "Inverted Triangle";
    return "Inverted Triangle";
  }

  // Pear
  if (!isBalancedUpperHip && H >= upperMax * 1.05) {
    if (W <= 0.85 * H && W <= upperMax) return "Pear";
    return "Pear";
  }

  // Balanced → Hourglass / Rectangle / Apple
  if (isBalancedUpperHip) {
    if (waistRatio <= 0.75) return "Hourglass";
    if (waistRatio >= 0.90) return "Apple";
    if (waistRatio > 0.75 && waistRatio < 0.90) return "Rectangle";
    return "Rectangle";
  }

  return "Rectangle";
};
