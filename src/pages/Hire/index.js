import React from "react";
import Header from "components/Header";
import profile from "../../assets/images/profile-example.png";
import map from "../../assets/images/icons/icon-location.svg";
import call from "../../assets/images/icons/icon-phone.svg";
import Button from "components/UI/Button";

import "./index.scss";

export default function Hire(props) {
  // const urlParams = qs.parse(props.location.search);

  return (
    <section className="hire__tallent">
      <Header className="mb-0" />
    <section className="hire">
      <Header />
      <div class="hire__bg">
        <div class="container">
          <div class="row hire">
            <div class="col-xl-4 col-lg-12 hire__user">
              <div class="hire__user--image">
                <img src={profile} alt="profile" />
              </div>
              <div class="hire__user--content">
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
              <div class="hire__user--skill">
                <h2>Skill</h2>
                <button type="button" class="btn btn-warning">
                  Phyton
                </button>
                <button type="button" class="btn btn-warning">
                  Laravel
                </button>
                <button type="button" class="btn btn-warning">
                  Golang
                </button>
                <button type="button" class="btn btn-warning">
                  JavaScript
                </button>
                <button type="button" class="btn btn-warning">
                  PHP
                </button>
                <button type="button" class="btn btn-warning">
                  HTML
                </button>
                <button type="button" class="btn btn-warning">
                  C++
                </button>
                <button type="button" class="btn btn-warning">
                  Kotlin
                </button>
                <button type="button" class="btn btn-warning">
                  Switf
                </button>
              </div>
            </div>
            <div class="col-xl-8 col-lg-12 hire__desc">
              <div class="hire__desc--content">
                <h1>Hubungi Lous Tomlinson</h1>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </h6>
              </div>
              <div class="hire__desc--form">
                <form>
                  <div class="hire__desc--form--detail">
                    <span>Tujuan tentang pesan ini</span>
                    <div class="hire__desc--form--select">
                      <select>
                        <option>Projek</option>
                      </select>
                    </div>
                    <span>Pesan</span>
                    <div class="hire__desc--form--textarea">
                      <textarea
                        cols="50"
                        rows="8"
                        placeholder="Deskripsikan/jelaskan lebih detail"
                      ></textarea>
                    </div>
                  </div>
                  <div class="hire__desc--form--button">
                    <Button>Kirim</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
