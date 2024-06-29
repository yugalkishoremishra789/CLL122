function k(alpha, ea, t) {
  return 0.01 * Math.exp((ea * ((t - 300) / (300 * t))) / 8.314);
}

function epsilon(a, b, c, d) {
  return d / a + c / a - b / a - 1;
}

function functionGas(k, densityCatalyst, canot, X, epsilon, p, alpha) {
  return (
    (densityCatalyst / k) *
    Math.pow((1 + epsilon * X) / (canot * (1 - X) * p), alpha)
  );
}

function functionLiq(k, densityCatalyst, canot, X, alpha) {
  return (densityCatalyst / k) * Math.pow(1 / (canot * (1 - X)), alpha);
}

export const pbr = (
  voidFraction,
  diameter,
  density,
  velocity,
  viscosity,
  Pnot,
  Z,
  a,
  b,
  c,
  d,
  X,
  alpha,
  ea,
  t,
  canot,
  densityCatalyst,
  volflo
) =>{
  // densityCatalyst = densityCatalyst*(1-phi)
  let beta =
    ((velocity * (1 - voidFraction)) / (Math.pow(voidFraction, 3) * diameter)) *
    ((150 * (1 - voidFraction) * viscosity) / diameter +
      1.75 * density * velocity);
  let p = 1 - (2 * beta * Z * (1 + epsilon(a, b, c, d)) * X) / Pnot;

  let rateConstant = k(alpha, ea, t);

  let sum1 = 0,
    sum2 = 0,
    sum3 = 0,
    sum4 = 0,
    sum5 = 0,
    sum6 = 0,
    sum7 = 0,
    sum8 = 0,
    sum9 = 0;
  let delx = 0.04;
  let del = [];
  for (let i = 0; i <= 24; i++) {
    del[i] = i * delx;
  }

  for (let i = 0; i <= 24; i++) {
    del[i] = i * delx;
  }
  for (let i = 2; i <= 23; i += 3) {
    sum1 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }
  for (let i = 2; i <= 24; i += 3) {
    sum4 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }
  for (let i = 1; i <= 23; i += 3) {
    sum5 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }
  for (let i = 3; i <= 24; i += 3) {
    sum2 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }
  for (let i = 4; i <= 22; i += 3) {
    sum3 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }
  for (let i = 2; i <= 24; i += 3) {
    sum6 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }

  for (let i = 2; i <= 23; i += 3) {
    sum7 += functionLiq(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      alpha
    );
  }
  for (let i = 2; i <= 24; i += 3) {
    sum4 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }
  for (let i = 1; i <= 23; i += 3) {
    sum5 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }
  for (let i = 3; i <= 24; i += 3) {
    sum8 += functionLiq(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      alpha
    );
  }
  for (let i = 4; i <= 22; i += 3) {
    sum9 += functionLiq(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      alpha
    );
  }
  for (let i = 2; i <= 24; i += 3) {
    sum6 += functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[i - 1],
      epsilon(a, b, c, d),
      p,
      alpha
    );
  }

  let integral1 =
    0.046875 *
    (functionGas(
      rateConstant,
      densityCatalyst,
      canot,
      del[0],
      epsilon(a, b, c, d),
      p,
      alpha
    ) +
      3 * sum1 +
      3 * sum2 +
      2 * sum3 +
      functionGas(
        rateConstant,
        densityCatalyst,
        canot,
        del[24],
        epsilon(a, b, c, d),
        p,
        alpha
      ));
  let integral2 =
    0.046875 *
    (functionLiq(rateConstant, densityCatalyst, canot, del[0], alpha) +
      3 * sum7 +
      3 * sum8 +
      2 * sum9 +
      functionLiq(rateConstant, densityCatalyst, canot, del[24], alpha));

  let Wgas = canot * volflo * integral1;
  let Wliq = canot * volflo * integral2;

  // console.log(Wgas, Wliq);
  return [p,beta,Wgas, Wliq];
}

// Call the calculate function to execute the computation
console.log(pbr(
  0.45,
  0.0063,
  6.615,
  1.514,
  0.0000278,
  1000000,
  0.5,
  18.288,
  1,
  1,
  1,
  1,
  1,
  1300,
  533.15,
  1,
  4000,
  0.000013572
));
console.log(k(1, 1300, 533.15))