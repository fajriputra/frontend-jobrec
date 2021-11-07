import React from "react";
import Image from "components/Image";

import { ReactComponent as IconWaveLeft } from "assets/images/icons/icon-wave-left.svg";
import { ReactComponent as IconWaveRight } from "assets/images/icons/icon-wave-right.svg";

import BrandLogo from "assets/images/brand-logo.png";
import Background from "assets/images/bg-auth.png";

import "./index.scss";

export default function LeftColumn(props) {
  return (
    <div className="left__column d-none d-md-block">
      <div className="signup__overlay">
        <div className="signup__overlay--content">
          <Image
            srcImage={BrandLogo}
            altImage="Brand Logo"
            className="brand__logo"
            imageClass="img-cover"
          />
          <div className="text">
            <h1 className="content__heading">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
        </div>
        <div className="left__wave">
          <IconWaveLeft className="img-cover" />
        </div>
        <div className="right__wave">
          <IconWaveRight />
        </div>
      </div>

      <Image
        srcImage={Background}
        altImage="Background"
        className="background"
        imageClass="img-cover"
      />
    </div>
  );
}
