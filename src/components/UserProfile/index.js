import React from "react";

import { ReactComponent as IconPolygon } from "assets/images/icons/icon-polygon.svg";
import ProfileImage from "assets/images/profile-img.png";

import Button from "components/UI/Button";
import Image from "components/Image";

import "./index.scss";
import useClickout from "hooks/useClickout";

export default function UserProfile(props) {
  const { handleClick, click, refClick } = useClickout();

  return (
    <li className="drop_nav" onClick={handleClick} ref={refClick}>
      <Image
        className="user__profile mb-0"
        srcImage={ProfileImage}
        altImage="Image Profile"
        imageClass="img-cover rounded-circle"
      />

      <ul className={click ? "dropdown clicked" : "dropdown m-0 p-0"}>
        <li className="nav-item">
          <Button className="btn nav-link">Profile</Button>
        </li>
        <li className="nav-item">
          <Button className="btn nav-link">Logout</Button>
        </li>
      </ul>

      <IconPolygon
        className={click ? "arrow clicked ms-2" : "arrow not-clicked ms-2"}
      />
    </li>
  );
}
