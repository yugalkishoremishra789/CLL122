import React, { useState } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtnGroup } from "mdb-react-ui-kit";
import "./calc2.css";
import { pbr } from "../Calculations/pbr.js";
import Head from "../Header/header.js";
import pbrImg from "../../assets/pbr_calc_page.jpg";

const PackedBed = () => {
  const [result, setResult] = useState([0, 0, 0, 0]);
  let check = true;
  const handleClick = () => {
    const a = document.getElementById("aval").value;
    const b = document.getElementById("bval").value;
    const c = document.getElementById("cval").value;
    const d = document.getElementById("dval").value;
    const voidfraction = document.getElementById("voidfrac").value;
    const Po = document.getElementById("pnot").value;
    const Diam = document.getElementById("Diamter").value;
    const dens = document.getElementById("density").value;
    const vel = document.getElementById("velocity").value;
    const viscos = document.getElementById("viscosity").value;
    const conversion = document.getElementById("conv").value;
    const Zval = document.getElementById("Z").value;
    const alp = document.getElementById("alpha").value;
    const Evalue = document.getElementById("Ea").value;
    const temperature = document.getElementById("temp").value;
    const cnot = document.getElementById("canot").value;
    const denscaty = document.getElementById("denscat").value;
    const Vo = document.getElementById("volfo").value;

    const res = pbr(
      voidfraction,
      Diam,
      dens,
      vel,
      viscos,
      Po,
      conversion,
      Zval,
      a,
      b,
      c,
      d,
      alp,
      Evalue,
      temperature,
      cnot,
      denscaty,
      Vo
    );
    let cond1 =
      a <= 0 ||
      b <= 0 ||
      c <= 0 ||
      d <= 0 ||
      voidfraction <= 0 ||
      voidfraction > 1 ||
      Po <= 0 ||
      Diam <= 0 ||
      dens <= 0 ||
      vel <= 0 ||
      viscos <= 0 ||
      conversion <= 0 ||
      conversion >= 1 ||
      Zval <= 0 ||
      alp <= 0 ||
      Evalue <= 0 ||
      temperature <= 0 ||
      cnot <= 0 ||
      denscaty <= 0 ||
      Vo <= 0;
    if (cond1) {
      alert("Please checked the entered values!");
    } else {
      res.forEach((i) => {
        if (isNaN(i) || !isFinite(i) || i < 0) {
          check = false;
        }
      });
      if (!check) {
        setResult([0, 0, 0, 0]);
        check = true;
        alert("Please check the entered values!");
      } else {
        setResult([res[0], res[1], res[2], res[3]]);
      }
    }
  };
  return (
    <>
      <Head
        title={"Packed Bed Reactor"}
        subtitl={"Reaction Coordinates"}
        photo={pbrImg}
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
            <MDBInput
              id="voidfrac"
              label="Void Fraction"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="Diamter"
              label="Enter the Diameter(m)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="density"
              label="Enter the density(kg/m^3)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="velocity"
              label="Enter the Velocity(m/s)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="viscosity"
              label="Enter the viscosity(Pa.s)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="pnot"
              label="Enter the Po(Pa)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="conv"
              label="Enter the conversion"
              type="number"
              required
            />
          </MDBCol>
        </MDBRow>
      </div>
      {/* ================= */}
      <div className="calcualtion__grid">
        <MDBRow>
          <MDBCol>
            <MDBInput
              id="Z"
              label="Enter the value of Z(in m)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="alpha"
              label="Enter the value of alpha"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="Ea"
              label="Enter the value of activation energy(kJ/mol)"
              type="number"
              required
            />
          </MDBCol>
        </MDBRow>
        {/* ------------- */}
      </div>
      <div className="calcualtion__grid">
        <MDBRow>
          <MDBCol>
            <MDBInput
              id="temp"
              label="Enter the initial temperature(in K)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="canot"
              label="Enter the initial concetration of A(mol/L)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="denscat"
              label="Enter the density of the catalyst(kg/m^3)"
              type="number"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="volfo"
              label="Enter the volume flow rate(m^3/s)"
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
        <div>The value of ΔP/ Po : {result[0].toFixed(3)} </div>
        <div>The value of β : {result[1].toFixed(3)} </div>
        <div> Weight of cat. in Gas Phase Rxn : {result[2].toFixed(3)} kg </div>
        <div> Weight of cat. in Liquid Phase Rxn: {result[3].toFixed(3)} kg </div>
      </div>
    </>
  );
};
export default PackedBed;
