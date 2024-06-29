import { rate } from "./rate.js";

export var epsilon = (a, b, c, d) => {
  return d / a + c / a - b / a - 1;
};

export var volume = (fa0, kref, Ea, temp, order, conv) => {
  let Ra = rate(kref, Ea, temp, fa0, order, conv);
  return (fa0 * conv) / -Ra;
};
//Gas Phase Rxn.....
export var conc = (a, b, c, d, fa0, Vo, conv) => {
    var Ca = (fa0 / Vo) * ((1 - conv) / (1 + epsilon(a, b, c, d) * conv));
    var Cc = (fa0/Vo) * (conv/(1 + epsilon(a,b,c,d)*conv));
    return [Ca, Cc];
};
 //Residence Time and Volume
export var vol = (a,b,c,d,conversion,kref,Ea,temp,fa0,order,v0)=>{
    let conv = 0;
    let conv2 = conversion;
    let conv3 = conversion/2;
    var vol0 = v0;
    let foo1 = (1+epsilon(a,b,c,d)*conv)/(rate(kref,Ea,temp,(fa0/v0),order,conv2)*(1-conv));
    let foo3 = (1+epsilon(a,b,c,d)*conv2)/(rate(kref,Ea,temp,(fa0/v0),order,conv2)*(1-conv2));
    let foo2 = (1+epsilon(a,b,c,d)*conv3)/(rate(kref,Ea,temp,(fa0/v0),order,conv2)*(1-conv3));

    var vol1 = (conv2)/6*(foo1+4*foo2+foo3);
    let restime  = vol1/(vol0**2);
    return[vol1,restime]

}

console.log(vol(1,1,1,1,0.5,0.01,1200,400,10,1,2))

