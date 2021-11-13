import React, { useEffect } from "react";
import axios from "helpers/axios";
import { useDispatch } from "react-redux";

import { ReactComponent as IconPolygon } from "assets/images/icons/icon-polygon.svg";
import ProfileImage from "assets/images/profile-img.png";
import { getDataWorker } from "store/profile/worker/action";

import Button from "components/UI/Button";
import Image from "components/Image";

import useClickout from "hooks/useClickout";
import "./index.scss";

export default function UserProfile(props) {
  let dataLogin = localStorage.getItem("persist:root");

  dataLogin = JSON.parse(dataLogin).auth;
  dataLogin = JSON.parse(dataLogin).username;

  const { handleClick, click, refClick } = useClickout();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataWorker(dataLogin))
      .then((res) => {})
      .catch();
  }, []);

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
            href={dataLogin ? "/profilePekerja" : "/profilePerusahaan"}
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
