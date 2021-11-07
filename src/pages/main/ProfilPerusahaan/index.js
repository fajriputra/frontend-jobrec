import React from "react";
import Header from "components/Header";
import profile from "../../../assets/images/profile-example.png";
import map from "../../../assets/images/icons/icon-location.svg";
import call from "../../../assets/images/icons/icon-phone2.svg";
import mail from "../../../assets/images/icons/icon-mail.svg";
import instagram from "../../../assets/images/icons/icon-instagram.svg";
import linkin from "../../../assets/images/icons/icon-linkedin.svg";

import "./index.scss";

export default function profilePerusahaan(props) {
  // const urlParams = qs.parse(props.location.search);

  return (
    <section className="profilePekerja">
      <Header />
      <div class="profile__bg">
        <div class="container">
          <div class="row profile">
            <div class="profile__user">
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

              <div class="profile__user--sosmed">
                <div class="kkk">
                  <div class=" vector">
                    <img src={mail} alt="map" />
                    <p>martabatjaya@gmail.com</p>
                  </div>

                  <div class=" vector">
                    <img src={instagram} alt="map" />
                    <p>martabat_jaya</p>
                  </div>

                  <div class="vector">
                    <img src={call} alt="map" />
                    <p>0821-8190-1821</p>
                  </div>

                  <div class="vector">
                    <img src={linkin} alt="map" />
                    <p>Martabat Jaya Abadi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
