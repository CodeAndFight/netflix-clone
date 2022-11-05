import React from "react";
import "../styles/Banner.css";
// import bannerImg from "../assets/netflix-banner.png";
import blackBanner from "../assets/Black_banner.png";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${blackBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_btns">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `test descirpton is here test descirpton is here test descirpton is here 
        test descirpton is here test descirpton is here test descirpton is here
        test descirpton is here test descirpton is here test descirpton is here
        test descirpton is here test descirpton is here test descirpton is here test descirpton is here
        test descirpton is here`,
            200
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
