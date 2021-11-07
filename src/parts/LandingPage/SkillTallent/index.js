import React from "react";

import { ReactComponent as IconCheck } from "assets/images/icons/icon-check.svg";

import LandingImage3 from "assets/images/lp-image3.png";
import Image from "components/Image";

import "./index.scss";

export default function SkillTallent(props) {
  return (
    <section className="skill__tallent">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 p-md-0">
            <div className="content__skill">
              <div className="content__skill--head">
                <h2 className="content__text--title">Skill Tallent</h2>
                <p className="content__text--subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>

                <div className="list__wrapper">
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">Java</span>
                  </div>
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">Golang</span>
                  </div>
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">Kotlin</span>
                  </div>
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">C++</span>
                  </div>
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">PHP</span>
                  </div>
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">Ruby</span>
                  </div>
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span">Javascript</span>
                  </div>
                  <div className="content__skill--list">
                    <div className="check rounded-circle">
                      <IconCheck width={10} height={10} />
                    </div>
                    <span className="list__text--span text-truncate">
                      10+ Bahasa lainnya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 p-md-0">
            <div className="right__column--wrapper">
              <Image
                srcImage={LandingImage3}
                altImage="Landing Image"
                className="content__image mx-auto mx-md-0"
                imageClass="img-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
