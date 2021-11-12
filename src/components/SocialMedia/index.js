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
            <p>{props.email}</p>
          </div>

          {props.instagram ? (
            <div className=" vector">
              <img src={instagram} alt="map" />
              <p>{props.instagram}</p>
            </div>
          ) : null}

          {props.url_github ? (
            <div className="vector">
              <img src={github} alt="map" />
              <p>{props.github}</p>
            </div>
          ) : null}

          {props.url_gitlab ? (
            <div className="vector">
              <img src={gitlab} alt="map" />
              <p>{props.gitlab}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="profile__user--sosmed">
      <div className="kkk">
        <div className=" vector">
          <img src={mail} alt="map" />
          <p>{props.email || ""}</p>
        </div>

        <div className=" vector">
          <img src={instagram} alt="map" />
          <p>{props.url_ig || ""}</p>
        </div>

        <div className="vector">
          <img src={call} alt="map" />
          <p>{props.nohp || ""}</p>
        </div>

        <div className="vector">
          <img src={linkin} alt="map" />
          <p>{props.url_linkedin}</p>
        </div>
      </div>
    </div>
  );
}
