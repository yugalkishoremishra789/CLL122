import { rate } from "./rate.js";

export const Batch = (kref, Ea, temp, Ca0, order, conv, time,a,b) => 
  {
  let Ra = rate(kref, Ea, temp, Ca0, a, conv);
  let Ca = Ca0 * (1 - conv);
  let Cb = (b/a) * rate(kref, Ea, temp, Ca0, order, conv) * time;
  let vol = (Ca0 * conv) / Ra;
  return [vol, Ca, Cb];
};
