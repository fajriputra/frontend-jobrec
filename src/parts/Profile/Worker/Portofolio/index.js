import React from "react";
import porto1 from "../../../../assets/images/porto1.png";
import porto2 from "../../../../assets/images/porto1.png";
import porto3 from "../../../../assets/images/porto2.png";
import porto4 from "../../../../assets/images/porto4.png";
import porto5 from "../../../../assets/images/porto5.png";
import porto6 from "../../../../assets/images/porto6.png";

import "./index.scss";

export default function Portofolio(props) {
  // const urlParams = qs.parse(props.location.search);

  return (
    <div className="row portofolio">
      <div className="col portofolio__content">
        <img src={porto1} alt="" />
        <p>Remainder app</p>
      </div>
      <div className="col portofolio__content">
        <img src={porto2} alt="" />
        <p>Social media app</p>
      </div>
      <div className="col portofolio__content">
        <img src={porto3} alt="" />
        <p>Project management web</p>
      </div>
      <div className="col portofolio__content">
        <img src={porto4} alt="" />
        <p>Remainder app</p>
      </div>
      <div className="col portofolio__content">
        <img src={porto5} alt="" />
        <p>Social media app</p>
      </div>
      <div className="col portofolio__content">
        <img src={porto6} alt="" />
        <p>Project management web</p>
      </div>
    </div>
  );
}
