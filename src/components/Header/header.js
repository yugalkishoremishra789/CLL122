import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "./header.css";

const Head = (props) => {
  return (
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${props.photo})`,
          height: "450px",
          objectFit: "cover",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">{props.title}</h1>
              <h4 className="mb-3">{props.subtitle} </h4>
              <MDBBtn className = "btn__term" tag="a" outline size="lg">
                Term Project
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Head;


