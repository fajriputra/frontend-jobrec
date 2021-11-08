import React from "react";

import { ReactComponent as IconMail } from "assets/images/icons/icon-mail.svg";
import { ReactComponent as IconBell } from "assets/images/icons/icon-bell.svg";
import { ReactComponent as IconClose } from "assets/images/icons/icon-close.svg";
import { ReactComponent as IconToggle } from "assets/images/icons/icon-toggler.svg";

import Button from "components/UI/Button";
import BrandLogo from "components/BrandLogo";
import UserProfile from "components/UserProfile";
import useClickout from "hooks/useClickout";

import "./index.scss";

export default function Header(props) {
  const { handleClick, click, refClick } = useClickout();

  return (
    <header className={["header", props.className].join(" ")} ref={refClick}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <BrandLogo />
          </div>
          <Button
            className="navbar-toggler"
            type="button"
            onClick={handleClick}
          >
            {click ? (
              <IconClose width={18} height={18} />
            ) : (
              <IconToggle width={25} height={25} />
            )}
          </Button>
          <div className={`${!click ? "collapse" : ""} navbar-collapse`}>
            <ul className="navbar-nav ms-auto">
              <Button
                className="btn btn__action signin me-md-4"
                type="link"
                href="/login"
              >
                Masuk
              </Button>
              <Button
                className="btn btn__action signup mx-md-3"
                type="link"
                href="/register"
              >
                Daftar
              </Button>

              {/* <li className="nav-item">
                <Button className="btn">
                  <IconBell />
                </Button>
              </li>
              <li className="nav-item">
                <Button className="btn px-md-5">
                  <IconMail />
                </Button>
              </li>
              <UserProfile /> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
