const R = 8.314;
const rate = (alpha, ca, ea, t) => {
  const k = 0.01 * Math.exp((ea * ((t - 300) / (300 * t))) / R);
  const r = -1 * k * Math.pow(ca, alpha);
  return r;
};
export const allcalc = (Ca0,Vo,conv,temp,alpha,Ea)=>{
    const Ca = Ca0*(1-conv);
    const volume =  -1 * ((Ca0 * Vo * conv) / rate(alpha,Ca,Ea,temp));
    const sptime = (volume/Vo);
    return [Ca,volume,sptime];
}


