import Portofolio from "parts/Profile/Worker/Portofolio";
import WorkExperience from "parts/Profile/Worker/WorkExperience";
import SosialMedia from "components/SocialMedia";
import Header from "components/Header";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";
import { apiHost } from "config";

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
  console.log(dataLogin);

  const [skill, setSkill] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [experience, setExperience] = useState([]);

  const toEditPage = () => {
    props.history.push("/edit-profile-worker");
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/skill/${dataLogin}`),
      axios.get(`/portofolio/${dataLogin}`),
      axios.get(`/pengalaman/get-worker-exp`, dataLogin),
    ])
      .then(async ([res1, res2, res3]) => {
        const a = await res1;
        const b = await res2;
        const c = await res3;
        setSkill(a.data.data);
        setPortfolio(b.data.data);
        setExperience(c.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
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
              <div className="profile__user--image ">
                <img
                  src={
                    worker.data.avatar
                      ? `${apiHost}/uploads/avatar/${worker.data.avatar}`
                      : `/avatar.png`
                  }
                  className="rounded-circle"
                  alt="profile"
                />
              </div>
              <div className="profile__user--content">
                <h2>{worker.data.name}</h2>
                {worker.data.jobdesk ? <h6>{worker.data.jobdesk}</h6> : null}

                <div className="row">
                  <div className="col vector">
                    <img src={map} alt="map" />
                    {worker.data.domisili ? (
                      <p>{worker.data.domisili}</p>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col vector">
                    <img src={call} alt="call" />
                    {worker.data.nohp ? <p>{worker.data.nohp}</p> : null}
                  </div>
                </div>
                {worker.data.deskripsi ? <p>{worker.data.deskripsi}</p> : null}
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
                email={worker.data.email}
                instagram={worker.data.url_ig}
                github={worker.data.url_github}
                gitlab={worker.data.url_gitlab}
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
