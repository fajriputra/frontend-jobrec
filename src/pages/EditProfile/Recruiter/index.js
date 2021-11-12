import React, { useEffect, useState } from "react";
import Header from "components/Header";
import pencil from "../../../assets/images/icons/icon-pencil-gray.svg";
import map from "../../../assets/images/icons/icon-location.svg";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { profilePerusahaan } from "store/profile/company/actions";
import { editPerusahaan } from "store/profile/company/actions";
import { apiHost } from "config";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

const inisialState = {
  nama: "",
  perusahaan: "",
  bidang: "",
  domisili: "",
  deskripsi: "",
  email: "",
  url_ig: "",
  nohp: "",
  url_linkedin: "",
};

const EditProfileRecruiter = (props) => {
  useScrollTop();
  const { data } = props.company;

  const [detail, setDetail] = useState(data);
  const [form, setForm] = useState(inisialState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profilePerusahaan(props.auth.userId))
      .then((res) => {
        console.log(res);
      })
      .catch();
  }, []);

  useEffect(() => {
    profilePerusahaan(props.auth.userId);
  }, [props.auth]);
  const editCompany = (e) => {
    e.preventDefault();
    dispatch(editPerusahaan(form))
      .then((res) => {
        // alert("data berhasil di ubah");
        dispatch(profilePerusahaan(props.auth.userId));
      })
      .catch((err) => {
        console.log(err);
      });
    setForm(inisialState);
  };

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section className="position-relative editProfileRecruiter">
      <Header className="mb-0" />

      <div className="edit__perusahaan">
        <PurpleBackground className="purple" />

        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12 edit__perusahaan--profile">
              <div className="perusahaan">
                <div className="edit__perusahaan--image">
                  <img
                    className="rounded-circle img-cover"
                    src={
                      data.avatar
                        ? `${apiHost}/uploads/recruiter/${data.avatar}`
                        : null
                    }
                    alt="profile"
                  />
                </div>
                <div className="edit__perusahaan--input">
                  <img src={pencil} alt="profile" />
                  <button>Edit</button>
                </div>
                <div className="edit__perusahaan--desc">
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
              </div>
              <div className="edit__perusahaan--button">
                <button onClick={editCompany}>Simpan</button>
                <button>Batal</button>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 edit__perusahaan-desc">
              <div className="perusahaan--form">
                <div className="edit__perusahaan--header">
                  <h2>Data perusahaan</h2>
                </div>

                <div className="edit__perusahaan--form">
                  <span>Nama Lengkap</span>
                  <input
                    type="text"
                    placeholder="Masukan nama perusahaan"
                    value={form.nama_lengkap}
                    name="nama_lengkap"
                    onChange={onChangeInput}
                  ></input>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Nama Perusahaan</span>
                  <input
                    type="text"
                    placeholder="Masukan nama perusahaan"
                    value={form.nama_perusahaan}
                    name="nama_perusahaan"
                    onChange={onChangeInput}
                  ></input>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Bidang</span>
                  <input
                    type="text"
                    placeholder="Masukan bidang perusahaan ex : Financial"
                    value={form.bidang}
                    name="bidang"
                    onChange={onChangeInput}
                  ></input>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Domisili</span>
                  <input
                    type="text"
                    placeholder="Masukan domisili"
                    value={form.domisili}
                    name="domisili"
                    onChange={onChangeInput}
                  ></input>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Deskripsi singkat</span>
                  <textarea
                    cols="50"
                    rows="8"
                    placeholder="Tuliskan deskripsi singkat"
                    value={form.deskripsi}
                    name="deskripsi"
                    onChange={onChangeInput}
                  ></textarea>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Masukan email"
                    value={form.email}
                    name="email"
                    onChange={onChangeInput}
                  ></input>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Instagram</span>
                  <input
                    type="text"
                    placeholder="Masukan Username IG"
                    value={form.url_ig}
                    onChange={onChangeInput}
                    name="url_ig"
                  ></input>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Nomor Telepon</span>
                  <input
                    type="text"
                    placeholder="Masukan nomor telepon"
                    value={form.nohp}
                    onChange={onChangeInput}
                    name="nohp"
                  ></input>
                </div>
                <div className="edit__perusahaan--form">
                  <span>Linkedin</span>
                  <input
                    type="text"
                    placeholder="Masukan nama Linkedin"
                    value={form.url_linkedin}
                    onChange={onChangeInput}
                    name="url_linkedin"
                  ></input>
                </div>
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
  auth: state.auth,
  company: state.company,
});

const mapDispatchToProps = {
  profilePerusahaan,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileRecruiter);
