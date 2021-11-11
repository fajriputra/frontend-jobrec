import Portofolio from "parts/Profile/Worker/Portofolio";
import WorkExperience from "parts/Profile/Worker/WorkExperience";
import SosialMedia from "components/SocialMedia";
import Header from "components/Header";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";

import profile from "../../../assets/images/profile-example.png";
import map from "../../../assets/images/icons/icon-location.svg";
import call from "../../../assets/images/icons/icon-phone.svg";

import React, { useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { profilePekerja } from "store/profile/actions";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

const WorkerProfile = (props) => {
  useScrollTop();

  console.log(props);
  useEffect(() => {
    // props.profilePekerja(props.profile.username);
  }, []);
  return (
    <section className="profilePekerja">
      <Header className="mb-0" />
      <div className="profile__bg">
        <PurpleBackground className="purple" />

        <div className="container">
          <div className="row profile">
            <div className="profile__user">
              <div className="profile__user--image">
                <img src={profile} alt="profile" />
              </div>
              <div className="profile__user--content">
                <h2>Louis Tomlinson</h2>
                <h6>Web Developer</h6>
                <div className="row">
                  <div className="col vector">
                    <img src={map} alt="map" />
                    <p>Purwokerto, Jawa Tengah</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col vector">
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

              <div className="profile__user--button">
                <button>Hire</button>
              </div>
              <div className="profile__skill">
                <h2>Skill</h2>
              </div>
              <div className="profile__user--skill">
                {/* <div className="col"> */}
                <button type="button" className="btn btn-warning">
                  Phyton
                </button>
                <button type="button" className="btn btn-warning">
                  Laravel
                </button>
                <button type="button" className="btn btn-warning">
                  Golang
                </button>
                {/* </div> */}
                {/* <div className="col"> */}
                <button type="button" className="btn btn-warning">
                  JavaScript
                </button>
                <button type="button" className="btn btn-warning">
                  PHP
                </button>
                <button type="button" className="btn btn-warning">
                  HTML
                </button>
                {/* </div> */}
                {/* <div className="col"> */}
                <button type="button" className="btn btn-warning">
                  C++
                </button>
                <button type="button" className="btn btn-warning">
                  Kotlin
                </button>
                <button type="button" className="btn btn-warning">
                  Switf
                </button>
                {/* </div> */}
              </div>

              <SosialMedia profilPekerja />
            </div>

            <div className="profile__portofolio">
              <div className="row">
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
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = {
  profilePekerja,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkerProfile);
