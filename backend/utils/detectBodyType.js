export function detectBodyType({ bust, waist, hips, shoulders }) {
  const B = bust;
  const W = waist;
  const H = hips;
  const S = shoulders ?? bust;
  const wb = W / B;
  const wh = W / H;
  const diffBH = Math.abs(B - H) / H;

  let bodyType;

  if (diffBH <= 0.05 && (wb < 0.75 || wh < 0.75)) bodyType = "hourglass";
  else if (H > B * 1.05 && H > S * 1.05 && wh < 0.8) bodyType = "pear";
  else if ((S > H * 1.05 || B > H * 1.05) && wh >= 0.75 && wh <= 0.85) bodyType = "inverted_triangle";
  else if (wb >= 0.85 && wh >= 0.85) bodyType = "apple";
  else bodyType = "rectangle";

  return {
    bodyType,
    avatarParams: {
      chestScale: B / H,
      waistScale: W / H,
      hipScale: H / B
    },
    ratios: { wb, wh, diffBH }
  };
}
