import React, { useState } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtnGroup } from "mdb-react-ui-kit";
import { volume, conc, vol } from "../Calculations/plugflow.js";
import "./calc1.css";
import Head from "../Header/header.js";
import pfrImg from "../../assets/pfr_calc_page.jpg";

const Pfr = () => {
  const [result, setResult] = useState([0, 0, 0]);
  const handleClick = () => {
    //Gas Phase Rxn.....
    let conv = document.getElementById("conv").value;
    let vol0 = document.getElementById("volre").value;
    let aplha = document.getElementById("orre").value;
    let temp = document.getElementById("temp").value;
    let Ea = document.getElementById("actv").value;
    let initfa = document.getElementById("initca").value;
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let c = document.getElementById("cval").value;
    let d = document.getElementById("dval").value;
    let kref = document.getElementById("kref").value;
    if (
      a <= 0 ||
      b <= 0 ||
      c <= 0 ||
      d <= 0 ||
      conv <= 0 ||
      conv >= 1 ||
      kref <= 0 ||
      Ea <= 0 ||
      temp <= 0 ||
      initfa <= 0 ||
      vol0 <= 0
    ) {
      alert("Please enter valid values!");
    } else {
      var volrel = vol(a, b, c, d, conv, kref, Ea, temp, initfa, aplha, vol0); // Volume and Residence Time
      var concentration = conc(a, b, c, d, initfa, vol0, conv); //Concentration of A and C)
      setResult([concentration[0], volrel[0], volrel[1]]);
    }
  };
  return (
    <>
      <Head
        title={"Plug Flow Reactor"}
        subtitle={"Reaction Coordinates"}
        photo={pfrImg}
      />
      <div className="sticho__entry">
        <MDBRow>
          <h6>Enter the stoichiometric details:</h6>

          <MDBCol>
            <MDBInput id="aval" label="a" type="number" required />
          </MDBCol>
          <MDBCol>
            <MDBInput id="bval" label="b" type="number" required />
          </MDBCol>
          <MDBCol>
            <MDBInput id="cval" label="c" type="number" required />
          </MDBCol>
          <MDBCol>
            <MDBInput id="dval" label="d" type="number" required />
          </MDBCol>
        </MDBRow>
      </div>
      <div className="calcualtion__grid">
        <MDBRow>
          <h6>Enter the following details:</h6>
          <MDBCol>
            <MDBInput id="conv" label="Conversion" type="number" required />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="initca"
              label="Entering Molar Flow Rate(mol/hr)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="volre"
              label="Volumetric Flow Rate(m^3/hr)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="actv"
              label="Activation Energy(kJ/mol)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="orre"
              label="Order of the reaction"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="temp"
              label="Enter the temperature(in K)"
              type="number"
              required
            />
          </MDBCol>
        </MDBRow>
      </div>
      <div className="kref__entry">
        <MDBRow>
          <MDBCol>
            <MDBInput
              id="kref"
              label="Enter the value of k at 300K"
              type="number"
              required
            />
          </MDBCol>
        </MDBRow>
      </div>

      <MDBBtnGroup className="btn__click" onClick={handleClick}>
        Go
      </MDBBtnGroup>

      <div className="result__grid">
        <div>Concentration of A: {result[0].toFixed(3)} mol</div>
        <div>Volume of the Reactor: {result[1].toFixed(3)} m^3</div>
        <div>Space Time: {result[2].toFixed(2)}s</div>
      </div>
    </>
  );
};
export default Pfr;
