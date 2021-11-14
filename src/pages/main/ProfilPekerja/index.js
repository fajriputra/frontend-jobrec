import Portofolio from "parts/Profile/Worker/Portofolio";
import WorkExperience from "parts/Profile/Worker/WorkExperience";
import SosialMedia from "components/SocialMedia";
import Header from "components/Header";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";

import profile from "../../../assets/images/profile-example.png";
import map from "../../../assets/images/icons/icon-location.svg";
import call from "../../../assets/images/icons/icon-phone.svg";

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";
import axios from "helpers/axios";
import { useHistory } from "react-router-dom";

const WorkerProfile = (props) => {
  let dataLogin = localStorage.getItem("persist:root");
  const worker = useSelector((state) => state.worker);

  dataLogin = JSON.parse(dataLogin).auth;
  dataLogin = JSON.parse(dataLogin).username;
  useScrollTop();

  const [skill, setSkill] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(async () => {
    try {
      const getSkill = await axios.get(`/skill/${dataLogin}`);
      const getPortfolio = await axios.get(`/portofolio/${dataLogin}`);
      const getExp = await axios.get(`/pengalaman/get-worker-exp`, worker);
      setSkill(getSkill.data.data);
      setPortfolio(getPortfolio.data.data);
      setExperience(getExp.data.data);
    } catch (error) {
      new Error(error.response.data.msg);
    }
  }, []);

  let history = useHistory();

  const handleRouteSwitch = () => {
    history.push("/edit-profile-worker");
  };
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
                <h2>{worker.data[0].name}</h2>
                <h6>{worker.data[0].jobdesk || "--"}</h6>
                <div className="row">
                  <div className="col vector">
                    <img src={map} alt="map" />
                    <p>{worker.data[0].domisili || "--"}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col vector">
                    <img src={call} alt="call" />
                    <p>{worker.data[0].nohp || "--"}</p>
                  </div>
                </div>
                <p>{worker.data[0].deskripsi || "--"}</p>
              </div>

              <div className="profile__user--button">
                <button onClick={handleRouteSwitch}>Edit Profile</button>
              </div>
              <div className="profile__skill">
                <h2>Skill</h2>
              </div>
              <div className="profile__user--skill">
                {/* <div className="col"> */}
                {skill.map((item, index) => (
                  <button type="button" className="btn btn-warning" key={index}>
                    {item.nama_skill}
                  </button>
                ))}
              </div>

              <SosialMedia
                profilPekerja
                email={worker.data[0].email}
                instagram={worker.data[0].url_ig || "tidak ada"}
                github={worker.data[0].url_github || "tidak ada"}
                gitlab={worker.data[0].url_gitlab || "tidak ada"}
              />
            </div>

            <div className="profile__portofolio">
              <div className="row">
                <Tabs
                  defaultActiveKey="Portofolio"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Portofolio" title="Portofolio">
                    <Portofolio data={portfolio} />
                  </Tab>
                  <Tab eventKey="WorkExperience" title="WorkExperience">
                    <WorkExperience data={experience} />
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

export default WorkerProfile;
