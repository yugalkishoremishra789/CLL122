import React from "react";
import RowCard from "../../utils/about.js";
import Head from "../Header/header.js";
import "./team.css";
import team from "../../assets/team.jpeg";
import sudu from "../../assets/profiles/profile3.jpeg";
import yugal from "../../assets/profiles/yugal.jpeg";
import dhruv from "../../assets/profiles/dhruv.jpeg";
import saket from "../../assets/profiles/saket.jpeg";
const Team = () => {
  return (
    <>
      <Head title={"Team"} subtitle={"Our Team"} photo={team} />
      <section className="home__section" id="home">
        <div className="home__container">
          <div className="home__content">
            <div className="home__img">
            </div>
          </div>
          <div className="home__title">Prof. Manjesh Kumar</div>
          
        </div>
      </section>
      <div className="team__card">
        <RowCard
          title={"Dhruv Upadhyay"}
          subtitle={"Chemical Engineering"}
          tag={"Leader"}
          photo={dhruv}
        />
        <RowCard
          title={"Saket Kumar Singh"}
          subtitle={"Chemical Engineering"}
          tag={"Member"}
          photo={saket}
        />
        <RowCard
          title={"Sudarshan Kumar Oraon"}
          subtitle={"Chemical Engineering"}
          tag={"Member"}
          photo={sudu}
        />
        <RowCard
          title={"Yugal Kishore Misra"}
          subtitle={"Chemical Engineering"}
          tag={"Member"}
          photo={yugal}
        />
      </div>
    </>
  );
};
export default Team;
