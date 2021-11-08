import React from "react";
import Portofolio from "parts/Profile/Worker/Portofolio";
import WorkExperience from "parts/Profile/Worker/WorkExperience";
import SosialMedia from "components/SocialMedia";
import Header from "components/Header";
import { Tabs, Tab } from "react-bootstrap";
import profile from "../../../assets/images/profile-example.png";
import map from "../../../assets/images/icons/icon-location.svg";
import call from "../../../assets/images/icons/icon-phone.svg";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";

import "./index.scss";

export default function profilePekerja(props) {
  // const urlParams = qs.parse(props.location.search);
  // if (props.SosialMedia)
  return (
    <section className="profilePekerja">
      <Header className="mb-0" />
      <Header />
      <div class="profile__bg">
        <PurpleBackground className="purple" />

        <div class="container">
          <div class="row profile">
            <div class="profile__user">
              <div class="profile__user--image">
                <img src={profile} alt="profile" />
              </div>
              <div class="profile__user--content">
                <h2>Louis Tomlinson</h2>
                <h6>Web Developer</h6>
                <div class="row">
                  <div class="col vector">
                    <img src={map} alt="map" />
                    <p>Purwokerto, Jawa Tengah</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col vector">
                    <img src={call} alt="call" />
                    <p>0812-3546-789</p>
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
                <button>Hire</button>
              </div>
              <div className="profile__skill">
                <h2>Skill</h2>
              </div>
              <div class="profile__user--skill">
                {/* <div class="col"> */}
                <button type="button" class="btn btn-warning">
                  Phyton
                </button>
                <button type="button" class="btn btn-warning">
                  Laravel
                </button>
                <button type="button" class="btn btn-warning">
                  Golang
                </button>
                {/* </div> */}
                {/* <div class="col"> */}
                <button type="button" class="btn btn-warning">
                  JavaScript
                </button>
                <button type="button" class="btn btn-warning">
                  PHP
                </button>
                <button type="button" class="btn btn-warning">
                  HTML
                </button>
                {/* </div> */}
                {/* <div class="col"> */}
                <button type="button" class="btn btn-warning">
                  C++
                </button>
                <button type="button" class="btn btn-warning">
                  Kotlin
                </button>
                <button type="button" class="btn btn-warning">
                  Switf
                </button>
                {/* </div> */}
              </div>

              <SosialMedia profilPekerja />
            </div>

            <div class="profile__portofolio">
              <div class="row">
                <Tabs
                  defaultActiveKey="Portofolio"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Portofolio" title="Portofolio">
                    <Portofolio />
                  </Tab>
                  <Tab eventKey="WorkExperience" title="WorkExperience">
                    <WorkExperience />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
