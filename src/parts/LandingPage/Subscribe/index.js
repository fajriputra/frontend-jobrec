import React from "react";

import { ReactComponent as IconWave3 } from "assets/images/icons/icon-wave3.svg";

import Card from "components/Card";

import Button from "components/UI/Button";

import "./index.scss";

export default function Subscribe(props) {
  return (
    <section className="subscribe">
      <div className="container">
        <Card className="subscribe__card">
          <div className="subscribe__card--content">
            <h2 className="content__text">
              Ayo <span>Daftar Sekarang</span>
            </h2>
            <Button
              className="btn btn__started white"
              type="link"
              href="/register"
            >
              Mulai Dari Sekarang
            </Button>
          </div>
          <div className="icon__wave3">
            <IconWave3 className="img-cover" />
          </div>
        </Card>
      </div>
    </section>
  );
}
