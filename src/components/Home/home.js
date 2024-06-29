import React from "react";
import CardImg from "../../utils/Card.js";
import batch from "../../assets/batch.jpeg";
import cstr from "../../assets/cstr.jpeg";
import pfr from "../../assets/pfr.jpeg";
import pbr from "../../assets/pbr.jpeg";
import header from "../../assets/header_new6.jpg";
import Head from "../Header/header.js";


const List = () => {
  return (
    <>
    <Head title = {"Chemical Reaction Engineering"} subtitle = {"Reactor X Optimate"} photo = {header}/>
      <div className="reactor__info">
        <CardImg
          title={"Batch Reactor"}
          text={
            " This is a closed system where reactants are added to a vessel, allowed to react for a certain period (batch time), and then the products are removed. There's no inflow or outflow of reactants or products during the reaction. Offers flexibility in handling small-scale reactions, easy to control reaction conditions, and suitable for reactions requiring multiple steps or where precise control is necessary. Commonly used in pharmaceuticals, specialty chemicals, and research laboratories for small-scale synthesis, process development, and optimization."
          }
          photo={batch}
          link = "/batch"
        />
        <CardImg
          title={"Continuous Stirred Tank Reactor"}
          text={
            "It is a type of reactor where reactants are continuously fed into a well-mixed tank reactor and products are continuously removed. It's characterized by uniform composition throughout the reactor. Offers good temperature and concentration control due to uniform mixing.Residence time distribution is relatively broad, meaning reactants spend varying amounts of time in the reactor. Commonly used in large-scale industrial processes like chemical production, wastewater treatment, and fermentation."
          }
          photo={cstr}
          link = "/cstr"

        />
        <CardImg
          title={"Plug Flow Reactor"}
          text={
            "In a PFR, reactants enter one end of a long tube or pipe and flow through it, with no back-mixing. This means that different portions of the reactor contain reactants at different stages of conversion. Provides a more accurate representation of reaction kinetics compared to CSTRs. Residence time distribution is narrow, meaning all reactants experience similar reaction times. Suitable for reactions where mixing could affect product quality or reaction rates, such as in catalytic reactions or reactions with fast kinetics."
          }
          photo={pfr}
          link = "/plugf"
        />
        <CardImg
          title={"Packed Bed Reactor"}
          text={
            "PBRs involve a packed bed of catalyst particles through which reactants flow. The reaction occurs on the surface of the catalyst as reactants pass through the bed. Offers high surface area for reaction, leading to efficient use of catalyst. Pressure drop across the bed can be significant depending on flow rate and particle size. Widely used in petroleum refining, petrochemical production, and gas-phase reactions where catalysts are essential."
          }
          photo={pbr}
          link = "/pbr"
        />
      </div>
    </>
  );
};
export default List;
