import Button from "components/UI/Button";
import React from "react";

import "./index.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content--copyright">
          2020 Pewworld. All right reserved
        </p>
        <div className="footer__content--info">
          <Button type="link" href="/">
            Telepon
          </Button>
          <Button type="link" href="/">
            Email
          </Button>
        </div>
      </div>
    </footer>
  );
}
