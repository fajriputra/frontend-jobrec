import React from "react";
import Header from "components/Header";
import profile from "../../assets/images/profile-example.png";
import map from "../../assets/images/icons/icon-location.svg";
import call from "../../assets/images/icons/icon-phone.svg";
import Button from "components/UI/Button";
import Footer from "components/SiteInfo";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

export default function Hire(props) {
  useScrollTop();
  return (
    <section className="hire">
      <Header className="mb-0" />
      <div className="hire__bg">
        <div className="container">
          <div className="row hire">
            <div className="col-xl-4 col-lg-12 hire__user">
              <div className="hire__user--image">
                <img src={profile} alt="profile" />
              </div>
              <div className="hire__user--content">
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
              <div classNameName="skill">
                <h2>Skill</h2>
              </div>
              <div className="hire__user--skill">
                <button type="button" className="btn btn-warning">
                  Phyton
                </button>
                <button type="button" className="btn btn-warning">
                  Laravel
                </button>
                <button type="button" className="btn btn-warning">
                  Golang
                </button>
                <button type="button" className="btn btn-warning">
                  JavaScript
                </button>
                <button type="button" className="btn btn-warning">
                  PHP
                </button>
                <button type="button" className="btn btn-warning">
                  HTML
                </button>
                <button type="button" className="btn btn-warning">
                  C++
                </button>
                <button type="button" className="btn btn-warning">
                  Kotlin
                </button>
                <button type="button" className="btn btn-warning">
                  Switf
                </button>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 hire__desc">
              <div className="hire__desc--content">
                <h1>Hubungi Lous Tomlinson</h1>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </h6>
              </div>
              <div className="hire__desc--form">
                <form>
                  <div className="hire__desc--form--detail">
                    <span>Tujuan tentang pesan ini</span>
                    <div className="hire__desc--form--select">
                      <select>
                        <option>Projek</option>
                      </select>
                    </div>
                    <span>Pesan</span>
                    <div className="hire__desc--form--textarea">
                      <textarea
                        cols="50"
                        rows="8"
                        placeholder="Deskripsikan/jelaskan lebih detail"
                      ></textarea>
                    </div>
                  </div>
                  <div className="hire__desc--form--button">
                    <Button>Kirim</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
