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
          <Button
            type="link"
            isExternal
            target="_blank"
            href="tel:+622128992988"
          >
            Telepon
          </Button>
          <Button
            type="link"
            isExternal
            target="_blank"
            href="mailto:support@lakecoast.com"
          >
            Email
          </Button>
        </div>
      </div>
    </footer>
  );
}
