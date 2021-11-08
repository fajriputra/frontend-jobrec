import React from "react";
import Header from "components/Header";
import SosialMedia from "components/SocialMedia";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";
import profile from "../../../assets/images/profile-example.png";
import map from "../../../assets/images/icons/icon-location.svg";

import "./index.scss";

export default function profilePerusahaan(props) {
  // const urlParams = qs.parse(props.location.search);

  return (
    <section className="profilePekerja">
      <Header />
      <div class="profile__bg">
        <PurpleBackground className="purple" />

        <div class="container">
          <div class="row profile">
            <div class="profile__perusahaan">
              <div class="profile__user--image">
                <img src={profile} alt="profile" />
              </div>
              <div class="profile__user--content">
                <h2>PT. Martabat Jaya Abadi</h2>
                <h6>Financial</h6>
                <div class="row">
                  <div class="col vector">
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

              <div class="profile__user--button">
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
