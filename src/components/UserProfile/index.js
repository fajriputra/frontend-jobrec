import React from "react";
import axios from "helpers/axios";
import { useSelector } from "react-redux";

import { ReactComponent as IconPolygon } from "assets/images/icons/icon-polygon.svg";
import ProfileImage from "assets/images/profile-img.png";

import Button from "components/UI/Button";
import Image from "components/Image";

import useClickout from "hooks/useClickout";
import "./index.scss";

export default function UserProfile(props) {
  const { handleClick, click, refClick } = useClickout();

  const { username } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await axios.post("/auth/logout");
    localStorage.clear();

    window.location.href = "/";
  };

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
          <Button
            className="btn nav-link"
            type="link"
            href={username ? "/profilePekerja" : "/profilePerusahaan"}
          >
            Profile
          </Button>
        </li>
        <li className="nav-item">
          <Button className="btn nav-link" onClick={handleLogout}>
            Logout
          </Button>
        </li>
      </ul>

      <IconPolygon
        className={click ? "arrow clicked ms-2" : "arrow not-clicked ms-2"}
      />
    </li>
  );
}
