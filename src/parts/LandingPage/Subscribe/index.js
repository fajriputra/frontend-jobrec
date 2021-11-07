import React from "react";

import { ReactComponent as IconWave3 } from "assets/images/icons/icon-wave3.svg";

import Card from "components/Card";

import "./index.scss";
import Button from "components/UI/Button";

export default function Subscribe(props) {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="row justify-content-center">
          <Card className="subscribe__card">
            <div className="subscribe__card--content">
              <h2 className="content__text">Lorem ipsum dolor sit amet</h2>
              <Button className="btn btn__started white">
                Mulai Dari Sekarang
              </Button>
            </div>
            <div className="icon__wave3">
              <IconWave3 />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
