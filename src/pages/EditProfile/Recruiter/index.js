import React from "react";
import Header from "components/Header";
import profile from "../../../assets/images/profile-example.png";
import pencil from "../../../assets/images/icons/icon-pencil-gray.svg";
import map from "../../../assets/images/icons/icon-location.svg";

import "./index.scss";

export default function editProfileRecruiter(props) {
  // const urlParams = qs.parse(props.location.search);

  return (
    <section className="editProfileRecruiter">
      <Header />
      <div className="edit__perusahaan">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12 edit__perusahaan--profile">
              <div className="perusahaan">
                <div className="edit__perusahaan--image">
                  <img src={profile} alt="profile" />
                </div>
                <div className="edit__perusahaan--input">
                  <img src={pencil} alt="profile" />
                  <p>Edit</p>
                </div>
                <div className="edit__perusahaan--desc">
                  <h2>PT. Martabat Jaya Abadi</h2>
                  <h6>Financial</h6>
                  <div class="row">
                    <div class="col vector">
                      <img src={map} alt="map" />
                      <p>Purwokerto, Jawa Tengah</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
              </div>
              <div className="edit__perusahaan--button">
                <button>Simpan</button>
                <button>Batal</button>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 edit__perusahaan-desc">
              <div className="perusahaan--form">
                <div className="edit__perusahaan--header">
                  <h2>Data perusahaan</h2>
                </div>
                <form>
                  <div className="edit__perusahaan--form">
                    <span>Nama Perusahaan</span>
                    <input
                      type="text"
                      placeholder="Masukan nama perusahaan"
                    ></input>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Nama Perusahaan</span>
                    <input
                      type="text"
                      placeholder="Masukan nama perusahaan"
                    ></input>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Bidang</span>
                    <input
                      type="text"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                    ></input>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Domisili</span>
                    <input type="text" placeholder="Masukan domisili"></input>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Deskripsi singkat</span>
                    <textarea
                      cols="50"
                      rows="8"
                      placeholder="Tuliskan deskripsi singkat"
                    ></textarea>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Email</span>
                    <input type="email" placeholder="Masukan email"></input>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Instagram</span>
                    <input
                      type="text"
                      placeholder="Masukan Username IG"
                    ></input>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Nomor Telepon</span>
                    <input
                      type="text"
                      placeholder="Masukan nomor telepon"
                    ></input>
                  </div>
                  <div className="edit__perusahaan--form">
                    <span>Linkedin</span>
                    <input
                      type="text"
                      placeholder="Masukan nama Linkedin"
                    ></input>
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
