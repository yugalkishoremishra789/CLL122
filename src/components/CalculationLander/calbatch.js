import React, { useState } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtnGroup } from "mdb-react-ui-kit";
import { Batch } from "../Calculations/batch.js";
import "./calc.css";
import Head from "../Header/header.js";
import batchImg from "../../assets/batch_calc_page.jpg";

const BatchReactor = () => {
  const [result, setResult] = useState([0, 0, 0]);
  const handleClick = () => {
    let initca = document.getElementById("initca").value;
    let temp = document.getElementById("temp").value;
    let Ea = document.getElementById("actv").value;
    let conv = document.getElementById("conv").value;
    let time = document.getElementById("time").value;
    let kref = document.getElementById("kref").value;
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let cond1 = (a <=0 || b<=0 || conv<=0 || conv>=1 || time<=0 || kref<=0 || initca<=0 || Ea<=0 || temp<=0);
    if(cond1){
      alert("Please enter valid values!");
    }else{
      setResult(Batch(kref, Ea, temp, initca, a, conv, time,a,b));;
    }
  };
  return (
    <>
      <Head
        title={"Batch Reactor"}
        subitle={"Reaction Enginnering"}
        photo={batchImg}
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
          </MDBRow>
      </div>
      <div className="calcualtion__grid">
        <MDBRow>
      <h6>Enter the following details:</h6>
          <MDBCol>
            <MDBInput id="initca" label="Input Concentarion (mol/L)" type="number" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="temp" label="Enter the temperature in (K)" type="number" />
          </MDBCol>
          <MDBCol>
            <MDBCol>
              <MDBInput id="actv" label="Activation Energy(kJ/mol)" type="number" />
            </MDBCol>
            </MDBCol>
            <MDBCol>
            <MDBInput
              id="kref"
              label="Enter the value of k (300K)"
              type="number"
            />
          </MDBCol>
          <MDBCol>
            <MDBInput id="conv" label="Conversion" type="number"  />
          </MDBCol>
          <MDBCol>
            <MDBInput id="time" label="Enter the time(s)" type="number" />
          </MDBCol>
        </MDBRow>
      </div>
      <MDBBtnGroup className="btn__click" onClick={handleClick}>
        Go
      </MDBBtnGroup>

      <div className="result__grid">
        <div>Volume of Batch-reactor: {result[0].toFixed(3)} L</div>
        <div>Concentration of A: {result[1].toFixed(3)} mol/L</div>
        <div>Concentration of C: {result[2].toFixed(3)} mol/L</div>
      </div>
    </>
  );
};
export default BatchReactor;
