
export const epsilon = (a, b, c, d) => {
  return d / a + c / a - b / a - 1;
};

export const pdrop = (
  vfrac,
  diameter,
  density,
  velocity,
  viscosity,
  Po,
  Z,
  a,
  b,
  c,
  d,
  conv
) => {
  let beta =
    ((velocity * (1 - vfrac)) / (diameter * Math.pow(vfrac, 3))) *
    ((150 * (1 - vfrac) * viscosity) / diameter + 1.75 * density * velocity);
  let p = 1 - (2 * beta * Z * (1 + epsilon(a, b, c, d)) * conv) / Po;

  return Math.sqrt(p);
};

