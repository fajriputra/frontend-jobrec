import React from "react";
import mail from "../../assets/images/icons/icon-mail.svg";
import instagram from "../../assets/images/icons/icon-instagram.svg";
import github from "../../assets/images/icons/icon-github.svg";
import gitlab from "../../assets/images/icons/icon-gitlab.svg";
import linkin from "../../assets/images/icons/icon-linkedin.svg";
import call from "../../assets/images/icons/icon-phone2.svg";

import "./index.scss";

export default function SosialMedia(props) {
  if (props.profilPekerja) {
    return (
      <div className="profile__user--sosmed">
        <div className="kkk">
          <div className=" vector">
            <img src={mail} alt="map" />
            <p>Louistommo@gmail.com</p>
          </div>

          <div className=" vector">
            <img src={instagram} alt="map" />
            <p>@Louist91</p>
          </div>

          <div className="vector">
            <img src={github} alt="map" />
            <p>@Louistommo</p>
          </div>

          <div className="vector">
            <img src={gitlab} alt="map" />
            <p>@Louistommo91</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile__user--sosmed">
      <div className="kkk">
        <div className=" vector">
          <img src={mail} alt="map" />
          <p>martabatjaya@gmail.com</p>
        </div>

        <div className=" vector">
          <img src={instagram} alt="map" />
          <p>martabat_jaya</p>
        </div>

        <div className="vector">
          <img src={call} alt="map" />
          <p>0821-8190-1821</p>
        </div>

        <div className="vector">
          <img src={linkin} alt="map" />
          <p>Martabat Jaya Abadi</p>
        </div>
      </div>
    </div>
  );
}
