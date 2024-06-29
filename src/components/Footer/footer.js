import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          {/* <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn> */}

          {/* <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="wikepedia" />
          </MDBBtn> */}

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.google.com"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.wikipedia.org/"
            role="button"
          >
            {/* <MDBIcon fab icon="linkedin-in" /> */}
            <i class="fa-brands fa-wikipedia-w"></i>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.researchgate.net/"
            role="button"
          >
            <i class="fa-brands fa-researchgate"></i>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:- 
        <a className="text-white" href="https://home.iitd.ac.in/">
            IIT Delhi
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;
