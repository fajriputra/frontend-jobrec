import React from "react";

import { ReactComponent as IconArrLeft } from "assets/images/icons/icon-arr-left.svg";
import { ReactComponent as IconArrRight } from "assets/images/icons/icon-arr-right.svg";
import Opini1 from "assets/images/opini1.png";

import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";

import "./index.scss";

export default function Opinion(props) {
  return (
    <section className="opinion">
      <div className="container">
        <div className="row">
          <div className="opinion__content">
            <h2 className="opinion__content--heading">
              Their opinion about peworld
            </h2>

            <div className="opinion__wrapper--list">
              <div className="slider left d-none d-md-flex rounded-circle">
                <IconArrLeft width={15} height={15} />
              </div>
              <Card className="card__opinion">
                <Image
                  srcImage={Opini1}
                  altImage="Opinion Image"
                  className="card__opinion--image mx-auto"
                  imageClass="img-cover rounded-circle"
                />

                <MetaWrapper
                  className="meta__wrapper text-center"
                  title="Niall Horan"
                  classTitle="meta__wrapper--title text-truncate"
                  jobs="Web Developer"
                  classJobs="meta__wrapper--jobs text-truncate"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                  classDesc="meta__wrapper--desc"
                />
              </Card>
              <Card className="card__opinion">
                <Image
                  srcImage={Opini1}
                  altImage="Opinion Image"
                  className="card__opinion--image mx-auto"
                  imageClass="img-cover rounded-circle"
                />

                <MetaWrapper
                  className="meta__wrapper text-center"
                  title="Louis Tomlinson"
                  classTitle="meta__wrapper--title text-truncate"
                  jobs="Web Developer"
                  classJobs="meta__wrapper--jobs text-truncate"
                  desc="Lorem ipsum dolor sit amet, consectetur "
                  classDesc="meta__wrapper--desc"
                />
              </Card>
              <Card className="card__opinion">
                <Image
                  srcImage={Opini1}
                  altImage="Opinion Image"
                  className="card__opinion--image mx-auto"
                  imageClass="img-cover rounded-circle"
                />

                <MetaWrapper
                  className="meta__wrapper text-center"
                  title="Harry Styles"
                  classTitle="meta__wrapper--title text-truncate"
                  jobs="Web Developer"
                  classJobs="meta__wrapper--jobs text-truncate"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
                  classDesc="meta__wrapper--desc"
                />
              </Card>
              <div className="slider right d-none d-md-flex rounded-circle">
                <IconArrRight width={15} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
