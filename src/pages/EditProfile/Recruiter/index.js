import React, { useEffect, useState, useRef } from "react";
import Header from "components/Header";
import pencil from "../../../assets/images/icons/icon-pencil-gray.svg";
import map from "../../../assets/images/icons/icon-location.svg";
import PurpleBackground from "components/PurpleBackground";
import Footer from "components/SiteInfo";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  editPerusahaanImage,
  profilePerusahaan,
} from "store/profile/company/actions";
import { editPerusahaan } from "store/profile/company/actions";
import { apiHost } from "config";
import { toast } from "react-toastify";

import "./index.scss";
import { useHistory } from "react-router-dom";
import useScrollTop from "hooks/useScrollTop";
import axios from "helpers/axios";

const inisialState = {
  nama_lengkap: "",
  nama_perusahaan: "",
  bidang: "",
  domisili: "",
  deskripsi: "",
  email: "",
  url_ig: "",
  nohp: "",
  url_linkedin: "",
  image: null,
};

const EditProfileRecruiter = (props) => {
  useScrollTop();
  const { data } = props.company;

  const target = useRef(null);
  const [form, setForm] = useState(inisialState);

  const [dataShow, setDataShow] = useState(inisialState);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(profilePerusahaan(props.auth.userId))
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch();
  // }, []);

  useEffect(() => {
    getCompany();
  }, []);

  useEffect(() => {
    profilePerusahaan(props.auth.userId);
  }, [props.auth]);

  const getCompany = () => {
    axios
      .get(`/recruiter/${props.auth.userId}`)
      .then((res) => {
        console.log(res.data.data[0]);
        setForm(res.data.data[0]);
        setDataShow(res.data.data[0]);
        // setForm({
        //   nama_lengkap: res.data.data[0].nama_lengkap,
        //   nama_perusahaan: res.data.data[0].nama_perusahaan,
        //   bidang: res.data.data[0].bidang,
        //   domisili: res.data.data[0].domisili,
        //   deskripsi: res.data.data[0].deskripsi,
        //   email: res.data.data[0].email,
        //   url_ig: res.data.data[0].url_ig,
        //   nohp: res.data.data[0].nohp,
        //   url_linkedin: res.data.data[0].url_linkedin,
        //   image: res.data.data[0].avatar,
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editCompany = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // for (const data in form) {
    //   formData.append(data, form[data]);
    // }
    // console.log(formData);
    // const formData = new FormData();
    // for (const data in form) {
    //   formData.append(data, form[data]);
    // }
    // for (const data of formData.entries()) {
    //   console.log(data[0] + ", " + data[1]);
    // }
    dispatch(editPerusahaan(form))
      .then((res) => {
        toast.success(res.value.data.msg);
        // dispatch(profilePerusahaan(props.auth.userId));
        getCompany();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
    // setForm(inisialState);
  };

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  const goCompany = () => {
    history.push("/profilePerusahaan");
  };

  const editImage = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded) {
      const formData = new FormData();
      formData.append("avatar", uploaded);
      setDataShow(formData);
      // getCompany();
      // dispatch(editPerusahaanImage(formData))
      //   .then((res) => {
      //     dispatch(profilePerusahaan(props.auth.userId));
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
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
                      dataShow.avatar
                        ? `${apiHost}/uploads/recruiter/${dataShow.avatar}`
                        : null
                    }
                    alt="profile"
                  />
                </div>
                <div className="edit__perusahaan--input">
                  <img src={pencil} alt="profile" />
                  <button onClick={() => target.current.click()}>Edit</button>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    ref={target}
                    name="image"
                    onChange={editImage}
                  ></input>
                </div>
                <div className="edit__perusahaan--desc">
                  <h2>{dataShow.nama_perusahaan || ""}</h2>
                  <h6>{dataShow.bidang || ""}</h6>
                  <div className="row">
                    <div className="col vector">
                      <img src={map} alt="map" />
                      <p>{dataShow.domisili || ""}</p>
                    </div>
                  </div>
                  <p>{dataShow.deskripsi || ""}</p>
                </div>
              </div>
              <div className="edit__perusahaan--button">
                <button onClick={editCompany}>Simpan</button>
                <button onClick={goCompany}>Kembali</button>
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
