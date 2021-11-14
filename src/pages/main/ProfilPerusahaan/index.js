import React, { useEffect } from "react";
import Header from "components/Header";
import SosialMedia from "components/SocialMedia";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";
// import profile from "../../../assets/images/profile-example.png";
import map from "../../../assets/images/icons/icon-location.svg";
import { useDispatch } from "react-redux";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";
import { connect } from "react-redux";
import { profilePerusahaan } from "store/profile/company/actions";
import { apiHost } from "config";
import { useHistory } from "react-router-dom";

const ProfileCompany = (props) => {
  useScrollTop();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profilePerusahaan(props.auth.userId))
      .then((res) => {
        console.log(res);
      })
      .catch();
  }, []);

  let history = useHistory();

  const handleRouteSwitch = () => {
    history.push("/editProfileRecruiter");
  };

  const { data } = props.company;

  return (
    <section className="profilePekerja">
      <Header className="mb-0" />
      <div className="profile__bg">
        <PurpleBackground className="purple" />

        <div className="container">
          <div className="row profile">
            <div className="profile__perusahaan">
              <div className="profile__user--perusahaan">
                <img
                  className="rounded-circle img-cover"
                  src={
                    data.avatar
                      ? `${apiHost}/uploads/recruiter/${data.avatar}`
                      : "avatar.png"
                  }
                  alt="profile"
                />
              </div>
              <div className="profile__perusahaan--content">
                <h2>{data.nama_perusahaan || ""}</h2>
                <h6>{data.bidang || ""}</h6>
                <div className="row">
                  <div className="col vector">
                    <img src={map} alt="map" />
                    <p>{data.domisili || ""}</p>
                  </div>
                </div>
                <p>{data.deskripsi || ""}</p>
              </div>

              <div className="profile__perusahaan--button">
                <button onClick={handleRouteSwitch}>Edit Profile</button>
              </div>

              <SosialMedia
                email={data.email || ""}
                url_ig={data.url_ig || ""}
                nohp={data.nohp || ""}
                url_linkedin={data.url_linkedin || ""}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  company: state.company,
});

const mapDispatchToProps = {
  profilePerusahaan,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCompany);
