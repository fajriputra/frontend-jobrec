import React from "react";

import HeroImage from "assets/images/lp-image1.png";

import Button from "components/UI/Button";
import Image from "components/Image";

import "./index.scss";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="hero__leftColumn">
              <div className="hero__leftColumn--content">
                <h1 className="content__heading--title">
                  Talenta terbaik negeri untuk perubahan revolusi 4.0
                </h1>
                <p className="content__heading--subtitle">
                  Dapatkan pekerjaan terbaik anda.
                </p>

                <Button
                  className="btn btn__started"
                  type="link"
                  href="/register"
                >
                  Mulai Dari Sekarang
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="hero__rightColumn">
              <Image
                srcImage={HeroImage}
                altImage="Hero Image"
                className="hero__image mx-auto mx-md-0"
                imageClass="img-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
