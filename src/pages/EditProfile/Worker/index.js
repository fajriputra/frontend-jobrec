import React, { useEffect, useState } from "react";

import { ReactComponent as IconPencil } from "assets/images/icons/icon-pencil.svg";
import { ReactComponent as IconPencilVector } from "assets/images/icons/icon-pencil-vector.svg";
import { ReactComponent as IconLocation } from "assets/images/icons/icon-location.svg";
import { ReactComponent as IconPhone } from "assets/images/icons/icon-phone.svg";
import { ReactComponent as IconTrashVector } from "assets/images/icons/icon-trash-vector.svg";
// import ProfileImage from "assets/images/opini1.png";
import { profilePekerja } from "store/profile/actions";
import { connect } from "react-redux";
import Card from "components/Card";
import Header from "components/Header";
import PurpleBackground from "components/PurpleBackground";
import Image from "components/Image";
import axios from "helpers/axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import Button from "components/UI/Button";
import MetaWrapper from "components/MetaWrapper";
import InputText from "components/UI/Form/InputText";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

const EditProfileWorker = (props) => {
  useScrollTop();
  const history = useHistory();
  const [allSkill, setAllSkill] = useState([]);
  const [allPengalaman, setAllPengalaman] = useState([]);
  const [thisWorker, setThisWorker] = useState({});
  const [formProfile, setformProfile] = useState({});
  const [allPortfolio, setAllPortfolio] = useState([]);
  const [formPengalaman, setformPengalaman] = useState({
    username: props.auth.username,
  });
  const [formPortfolio, setformPortfolio] = useState({
    username: props.auth.username,
  });

  const [formSkill, setformSkill] = useState({
    username: props.auth.username,
  });

  const getWorkerByUsername = () => {
    axios
      .get(`/worker/get-worker/${props.auth.username}`)
      .then((res) => {
        setThisWorker(res.data.data[0]);
        setformProfile(res.data.data[0]);
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setTimeout(() => {
          history.push("/");
        }, 2000);
      });
  };

  const getAllSkill = () => {
    axios
      .get(`/skill/${props.auth.username}`)
      .then((res) => {
        setAllSkill(res.data.data);
      })
      .catch((err) => {
        err.response.data.msg &&
          toast.error("Anda belum menambahkan Skill apapun");
        setTimeout(() => {
          // history.push("/");
        }, 2000);
      });
  };
  const getAllPengalaman = () => {
    axios
      .get(`/pengalaman/get-worker-exp`)
      .then((res) => {
        // console.log(res.data.data, "1111111111111111111111111111111");
        setAllPengalaman(res.data.data);
      })
      .catch((err) => {
        err.response.data.msg &&
          toast.error("Anda belum menambahkan Pengalaman apapun");
      });
  };
  const getAllPortfolio = () => {
    axios
      .get(`/portofolio/${props.auth.username}`)
      .then((res) => {
        setAllPortfolio(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg &&
          toast.error("Anda belum menambahkan Portfolio apapun");
      });
  };

  useEffect(() => {
    getWorkerByUsername();
    getAllSkill();
    getAllPengalaman();
    getAllPortfolio();
  }, []);
  const handleChange = (e) => {
    // console.log(formProfile, "frommmmmmmmmmmmmmmmmmmmmm");
    const { name, value } = e.target;
    setformProfile({ ...formProfile, [name]: value });
  };
  const handleClickProfile = () => {
    axios
      .patch(`/worker/update-worker`, formProfile)
      .then((res) => {
        console.log(res);
        getWorkerByUsername();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setTimeout(() => {
          // history.push("/");
        }, 2000);
      });
  };
  const handleChangeSkill = (e) => {
    const { name, value } = e.target;
    setformSkill({ ...formSkill, [name]: value });
  };
  const handleSubmitSkill = (e) => {
    axios
      .post(`/skill`, formSkill)
      .then((res) => {
        toast.success("Berhasil Menambahkan Skill");
        getAllSkill();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setTimeout(() => {
          // history.push("/");
        }, 2000);
      });
  };
  const handleSubmitPortfolio = (e) => {
    axios
      .post(`/portofolio`, formPortfolio)
      .then((res) => {
        toast.success("Berhasil Menambahkan Portfolio");
        getAllPortfolio();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const onImageChange = (event) => {
    console.log("UPLOAD FILE");
    if (event.target.files && event.target.files[0]) {
      setformPortfolio({
        ...formPortfolio,
        [event.target.name]: event.target.files[0],
      });
    }
  };

  const handleDeleteSkill = (e) => {
    console.log(e);
    axios
      .delete(`/skill/delete/${e}`)
      .then((res) => {
        toast.success("Berhasil Menghapus Skill");
        getAllSkill();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setTimeout(() => {
          // history.push("/");
        }, 2000);
      });
  };
  const handleChangePengalaman = (e) => {
    const { name, value } = e.target;
    console.log(formPengalaman);
    setformPengalaman({ ...formPengalaman, [name]: value });
  };
  const handleChangePortfolio = (e) => {
    const { name, value } = e.target;
    console.log(formPortfolio);
    setformPortfolio({ ...formPortfolio, [name]: value });
  };
  const handleSubmitPengalaman = (e) => {
    axios
      .post(`/pengalaman/post-worker-exp`, formPengalaman)
      .then((res) => {
        toast.success("Berhasil Menambahkan Pengalaman");
        getAllPengalaman();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleDeletePengalaman = (e) => {
    axios
      .delete(`/pengalaman/delete-worker-exp`)
      .then((res) => {
        toast.success("Berhasil Menghapus Pengalaman");
        setAllPengalaman([]);
        getAllPengalaman();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleDeletePortfolio = (e) => {
    axios
      .delete(`/portofolio/delete/${e}`)
      .then((res) => {
        toast.success("Berhasil Menghapus Pengalaman");
        getAllPortfolio();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  return (
    <>
      <Header className="mb-0" />
      <section className="edit__profile mb-0 position-relative">
        <PurpleBackground className="edit__profile--worker" />
        <div className="container">
          <div className="row card__padding">
            <div className="col-12 col-md-4 col-lg-4">
              <Card className="edit__card--profile">
                <div className="card__image--wrapper d-flex justify-content-center flex-column align-items-center">
                  <Image
                    srcImage={"ajkdjklash"}
                    altImage="Profile Image"
                    className="edit__profile--image"
                    imageClass="img-cover rounded-circle"
                  />

                  <p className="username text-center">@{thisWorker.username}</p>

                  <Button className="btn btn__edit__text p-0">
                    <IconPencil
                      width={15}
                      height={15}
                      className="icon__pencil me-2"
                    />
                    Edit
                  </Button>
                </div>

                <MetaWrapper
                  className="meta__data--profile"
                  title={thisWorker.name}
                  jobs={
                    <div className="text__jobs--wrapper">
                      <div className="text__infodata mb-3">
                        <span className="text__infodata--title mb-1">
                          {thisWorker.jobdesk}
                        </span>
                        <span className="text__infodata--gray">
                          {thisWorker.type == "fulltime"
                            ? "Full Time"
                            : "Freelance"}
                        </span>
                      </div>
                      <div className="text__infodata mb-3">
                        {thisWorker.domisili ? (
                          <span className="text__infodata--gray mb-2">
                            <IconLocation className="icon location" />
                            {thisWorker.domisili}
                          </span>
                        ) : (
                          ""
                        )}
                        {thisWorker.nohp ? (
                          <span className="text__infodata--gray">
                            <IconPhone className="icon phone" />
                            {thisWorker.nohp}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  }
                  desc={`${
                    thisWorker.deskripsi == null ? "" : thisWorker.deskripsi
                  }`}
                  classTitle="text__title"
                  classDesc="text__desc"
                />
              </Card>

              <div className="d-flex flex-column" style={{ marginBottom: 50 }}>
                <Button className="btn btn__password">Ubah Password</Button>
                <Button className="btn btn__back">Kembali</Button>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <Card className="edit__card--profile">
                <div className="content__head">
                  <h5 className="content__head--heading">Data diri</h5>
                </div>

                <div className="line w-100"></div>

                <div className="content__form">
                  <div className="form-group position-relative">
                    <label htmlFor="fullname">Nama Lengkap</label>
                    <InputText
                      placeholder="Masukan nama lengkap"
                      name="name"
                      value={formProfile.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="job">Job Desk</label>
                    <InputText
                      placeholder="Masukan job desk"
                      name="jobdesk"
                      value={formProfile.jobdesk}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="domisili">Domisi</label>
                    <InputText
                      placeholder="Masukan domisili"
                      name="domisili"
                      value={formProfile.domisili}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="domisili">Nomor Telefon</label>
                    <InputText
                      placeholder="Masukan domisili"
                      name="nohp"
                      value={formProfile.nohp}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form__socialmedia">
                    <div className="form-group position-relative">
                      <label htmlFor="instagram">Instagram</label>
                      <InputText
                        placeholder="Masukan username instagram"
                        name="url_ig"
                        value={formProfile.url_ig}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="github">Github</label>
                      <InputText
                        placeholder="Masukan username github"
                        name="url_github"
                        value={formProfile.url_github}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="gitlab">Gitlab</label>
                      <InputText
                        placeholder="Masukan username gitlab"
                        name="url_gitlab"
                        value={formProfile.url_gitlab}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group position-relative d-flex flex-column">
                    <label htmlFor="desc">Deskripsi Singkat</label>
                    <textarea
                      name="deskripsi"
                      placeholder="Masukan deskripsi disini..."
                      className="form__description"
                      value={formProfile.deskripsi}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-end ">
                    <Button
                      className="btn__auth save"
                      onClick={handleClickProfile}
                    >
                      Simpan
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className="edit__card--profile">
                <div className="content__head">
                  <h5 className="content__head--heading">Skill</h5>
                </div>

                <div className="line w-100"></div>

                <div className="content__form skills">
                  <div className="form-group position-relative">
                    <InputText
                      placeholder="Masukan Nama Skill"
                      name="nama_skill"
                      onChange={handleChangeSkill}
                    />
                  </div>
                  <div className="ms-auto">
                    <Button
                      className="btn__auth save skill"
                      style={{ marginBottom: 30 }}
                      onClick={handleSubmitSkill}
                      value={formSkill.nama_skill}
                    >
                      Simpan
                    </Button>
                  </div>
                </div>
                <div className="wrapper__button">
                  {allSkill.map((e) => (
                    <Button
                      className="btn btn__skill--added"
                      onClick={() => handleDeleteSkill(e.id)}
                    >
                      {e.nama_skill}
                      <IconTrashVector
                        width={18}
                        height={18}
                        className="ms-5 "
                      />
                    </Button>
                  ))}
                  {/* {console.log(allSkill)} */}
                </div>
              </Card>
              <Card className="edit__card--profile">
                <div className="content__head">
                  <h5 className="content__head--heading">Pengalaman kerja</h5>
                </div>

                <div className="line w-100"></div>

                <div className="content__form">
                  <div className="form__experience">
                    <div className="form-group position-relative">
                      <label htmlFor="company">Nama Perusahaan</label>
                      <InputText
                        placeholder="Masukan nama perusahaan"
                        onChange={handleChangePengalaman}
                        name="nama_perusahaan"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="position">Posisi</label>
                      <InputText
                        placeholder="Masukan posisi anda"
                        onChange={handleChangePengalaman}
                        name="posisi"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="date__in">Tanggal Keluar</label>
                      <InputText
                        onChange={handleChangePengalaman}
                        name="tgl_masuk"
                        type="date"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="date__out">Tanggal Keluar</label>
                      <InputText
                        onChange={handleChangePengalaman}
                        name="tgl_keluar"
                        type="date"
                      />
                    </div>
                  </div>

                  <div className="form-group position-relative d-flex flex-column">
                    <label htmlFor="desc">Deskripsi singkat</label>
                    <textarea
                      onChange={handleChangePengalaman}
                      name="deskripsi"
                      placeholder="Deskripsikan pekerjaan anda disini"
                      className="form__description"
                    ></textarea>
                  </div>

                  <hr
                    className="w-100"
                    style={{ color: "#E2E5ED", height: 2 }}
                  />
                  <Button
                    className="btn__auth save experience"
                    onClick={handleSubmitPengalaman}
                  >
                    Tambah pengalaman kerja
                  </Button>
                  <hr
                    className="w-100"
                    style={{ color: "#E2E5ED", height: 2 }}
                  />
                </div>
                {allPengalaman.map((e) => (
                  <>
                    <div className="card card-body mt-5">
                      <div className="content__form skills">
                        <div className="form-group position-relative">
                          {e.nama_perusahaan}
                        </div>
                        <div className="ms-auto">
                          <button
                            className="btn btn-danger"
                            style={{ width: "120px" }}
                            onClick={() => handleDeletePengalaman(e.id)}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </Card>
              <Card className="edit__card--profile">
                <div className="content__head">
                  <h5 className="content__head--heading">Portofolio</h5>
                </div>

                <div className="line w-100"></div>

                <div className="content__form">
                  <div className="form-group position-relative">
                    <label htmlFor="aplikasi">Nama Aplikasi</label>
                    <InputText
                      placeholder="Masukan nama aplikasi"
                      name="nama_applikasi"
                      onChange={handleChangePortfolio}
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="repo">Link Repository</label>
                    <InputText
                      placeholder="Masukan link repository"
                      name="link_repository"
                      onChange={handleChangePortfolio}
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="image">Upload Gambar</label>
                    <InputText
                      type="file"
                      name="image"
                      name="image"
                      onChange={onImageChange}
                    />
                  </div>
                  <hr
                    className="w-100"
                    style={{ color: "#E2E5ED", height: 2 }}
                  />
                  <Button
                    className="btn__auth save portfolio mt-4 mt-md-5"
                    onClick={handleSubmitPortfolio}
                  >
                    Tambah portofolio
                  </Button>
                  {allPortfolio.map((e) => (
                    <>
                      <div className="card card-body mt-5">
                        <div className="content__form skills">
                          <div className="form-group position-relative">
                            {e.nama_applikasi}
                          </div>
                          <div className="ms-auto">
                            <button
                              className="btn btn-danger"
                              style={{ width: "120px" }}
                              onClick={() => handleDeletePortfolio(e.id)}
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  worker: state.worker,
});

const mapDispatchToProps = {
  profilePekerja,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileWorker);
