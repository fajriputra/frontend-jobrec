import React from "react";
import Header from "components/Header";
import SosialMedia from "components/SocialMedia";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";
import profile from "../../../assets/images/profile-example.png";
import map from "../../../assets/images/icons/icon-location.svg";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

export default function ProfilePerusahaan(props) {
  useScrollTop();

  return (
    <section className="profilePekerja">
      <Header className="mb-0" />
      <div className="profile__bg">
        <PurpleBackground className="purple" />

        <div className="container">
          <div className="row profile">
            <div className="profile__perusahaan">
              <div className="profile__user--image">
                <img src={profile} alt="profile" />
              </div>
              <div className="profile__user--content">
                <h2>PT. Martabat Jaya Abadi</h2>
                <h6>Financial</h6>
                <div className="row">
                  <div className="col vector">
                    <img src={map} alt="map" />
                    <p>Purwokerto, Jawa Tengah</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Incidunt, vitae hic eveniet ducimus blanditiis quos voluptatum
                  architecto? Ducimus, sapiente. Autem quaerat laudantium
                  maiores eveniet facere temporibus similique hic incidunt
                  architecto?
                </p>
              </div>

              <div className="profile__user--button">
                <button>Edit Profile</button>
              </div>

              <SosialMedia />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
