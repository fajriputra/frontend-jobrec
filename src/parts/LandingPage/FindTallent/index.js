import React from "react";

import { ReactComponent as IconCheck } from "assets/images/icons/icon-check.svg";
import LandingImage2 from "assets/images/lp-image2.png";

import Image from "components/Image";

import "./index.scss";

export default function FindTallent(props) {
  return (
    <section className="find__tallent">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 p-md-0">
            <div className="left__column--wrapper">
              <Image
                srcImage={LandingImage2}
                altImage="Landing Image"
                className="landing__image mx-auto mx-md-0"
                imageClass="img-cover"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-md-0">
            <div className="right__column--wrapper">
              <div className="content__info">
                <h2 className="content__info--heading">
                  Kenapa harus mencari tallent di peworld
                </h2>

                <div className="content__info--list">
                  <div className="list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">
                      Penggunaan Yang Mudah.
                    </span>
                  </div>
                  <div className="list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">
                      Adanya Interaksi dengan Recruiter.
                    </span>
                  </div>
                  <div className="list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">
                      Recruiter mudah menemukan anda.
                    </span>
                  </div>
                  <div className="list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">
                      Memiliki koneksi yang luas.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
