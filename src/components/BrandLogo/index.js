import React from "react";

import Logo from "assets/images/brand-logo-blue.png";

import Button from "components/UI/Button";
import Image from "components/Image";

import "./index.scss";

export default function BrandLogo(props) {
  return (
    <Button className="btn p-0" type="link" href="/">
      <Image
        className="brand__logo"
        srcImage={Logo}
        altImage="Brand Logo"
        imageClass="img-cover"
      />
    </Button>
  );
}
