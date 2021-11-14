import React, { useEffect, useState, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as IconPencil } from "assets/images/icons/icon-pencil.svg";
import { ReactComponent as IconLocation } from "assets/images/icons/icon-location.svg";
import { ReactComponent as IconPhone } from "assets/images/icons/icon-phone.svg";
import { ReactComponent as IconTrashVector } from "assets/images/icons/icon-trash-vector.svg";
import Card from "components/Card";
import Header from "components/Header";
import PurpleBackground from "components/PurpleBackground";
import Image from "components/Image";
import axios from "helpers/axios";
import { toast } from "react-toastify";
import { apiHost } from "config";

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
  const [image, setImage] = useState(null);
  const [formImage, setFormImage] = useState({
    avatar: "",
  });
  const inputFile = useRef(null);
  const [formPengalaman, setformPengalaman] = useState({
    username: props.auth.username,
    isEdit: false,
  });
  const [formPortfolio, setformPortfolio] = useState({
    username: props.auth.username,
    isEdit: false,
  });

  const [formSkill, setformSkill] = useState({
    username: props.auth.username,
  });
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [formPassword, setFormPassword] = useState({});

  const getWorkerByUsername = () => {
    axios
      .get(`/worker/get-worker/${props.auth.username}`)
      .then((res) => {
        setThisWorker(res.data.data[0]);
        setformProfile(res.data.data[0]);
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };

  const getAllSkill = () => {
    axios
      .get(`/skill/${props.auth.username}`)
      .then((res) => {
        setAllSkill(res.data.data);
      })
      .catch((err) => {
        setAllSkill([]);
        // err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const getAllPengalaman = () => {
    axios
      .get(`/pengalaman/get-worker-exp`)
      .then((res) => {
        setAllPengalaman(res.data.data);
      })
      .catch((err) => {
        setAllPengalaman([]);

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
        setAllPortfolio([]);
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
    const { name, value } = e.target;
    setformProfile({ ...formProfile, [name]: value });
  };
  const handleClickProfile = () => {
    axios
      .patch(`/worker/update-worker`, formProfile)
      .then((res) => {
        toast.success("Berhasil Mengupdate Data Profile");

        getWorkerByUsername();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleChangeSkill = (e) => {
    const { name, value } = e.target;
    setformSkill({ ...formSkill, [name]: value });
  };

  const handleSubmitPortfolio = (e) => {
    const formData = new FormData();
    for (const data in formPortfolio) {
      formData.append(data, formPortfolio[data]);
    }
    axios
      .post(`/portofolio`, formData)
      .then((res) => {
        toast.success("Berhasil Menambahkan Portfolio");
        getAllPortfolio();
        setformPortfolio({
          username: props.auth.username,
          link_repository: "",
          nama_applikasi: "",
          isEdit: false,
        });
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };

  const handleChangeImagePortfolio = (event) => {
    if (event.target.files && event.target.files[0]) {
      setformPortfolio({
        ...formPortfolio,
        [event.target.name]: event.target.files[0],
      });
    }
  };

  const handleDeleteSkill = (e) => {
    axios
      .delete(`/skill/delete/${e}`)
      .then((res) => {
        toast.success("Berhasil Menghapus Skill");
        getAllSkill();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleChangePengalaman = (e) => {
    const { name, value } = e.target;
    setformPengalaman({ ...formPengalaman, [name]: value });
  };
  const handleChangePortfolio = (e) => {
    const { name, value } = e.target;
    setformPortfolio({ ...formPortfolio, [name]: value });
  };
  const handleSubmitPengalaman = (e) => {
    axios
      .post(`/pengalaman/post-worker-exp`, formPengalaman)
      .then((res) => {
        toast.success("Berhasil Menambahkan Pengalaman");
        getAllPengalaman();
        setformPengalaman({
          nama_perusahaan: "",
          posisi: "",
          tgl_keluar: "",
          tgl_masuk: "",
          username: props.auth.username,
          deskripsi: "",
        });
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleDeletePengalaman = (e) => {
    axios
      .delete(`/pengalaman/delete-worker-exp/${e}`)
      .then((res) => {
        toast.success("Berhasil Menghapus Pengalaman");
        // setAllPengalaman([]);
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
        toast.success("Berhasil Menghapus Portfolio");
        getAllPortfolio();
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const handleChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const { name, value } = event.target;
      const formData = new FormData();
      formData.append("avatar", event.target.files[0]);

      setImage(URL.createObjectURL(event.target.files[0]));
      setFormImage({ ...formImage, [name]: value });

      axios
        .patch(`worker/update-avatar`, formData)
        .then((res) => {
          toast.success("Berhasil Mengganti Image Profile");
        })
        .catch((err) => {
          err.response.data.msg && toast.error(err.response.data.msg);
        });
    }
  };

  const handleSubmitSkill = (e) => {
    axios
      .post(`/skill`, formSkill)
      .then((res) => {
        toast.success("Berhasil Menambahkan Skill");
        getAllSkill();
        setformSkill({
          nama_skill: "",
          id: "",
          username: thisWorker.username,
          isEdit: false,
        });
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleClickEditSKill = (id, nama) => {
    setformSkill({ ...formSkill, isEdit: true, id, nama_skill: nama });
  };
  const handleSubmitEditSkill = () => {
    axios
      .patch(`/skill/update/${formSkill.id}`, formSkill)
      .then((res) => {
        toast.success("Berhasil Mengupdate Skill");
        getAllSkill();
        setformSkill({
          nama_skill: "",
          id: "",
          username: thisWorker.username,
          isEdit: false,
        });
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleClickEditPortfolio = (data) => {
    setformPortfolio({ ...data, isEdit: true });
  };
  const handleEditPortfolio = () => {
    axios
      .patch(`/portofolio/update/${formPortfolio.id}`, formPortfolio)
      .then((res) => {
        toast.success("Berhasil Mengubah Portfolio");
        getAllPortfolio();
        setformPortfolio({
          username: props.auth.username,
          link_repository: "",
          nama_applikasi: "",

          isEdit: false,
        });
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
      });
  };
  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setFormPassword({ ...formPassword, [name]: value });
  };
  const handleSubmitPassword = () => {
    if (formPassword.password.length < 6) {
      toast.error("Password Minimal 6 Karakter");
    } else if (formPassword.password !== formPassword.confirm_password) {
      toast.error("Password & Confrim Password Tidak Boleh Berbeda");
    } else {
      axios
        .patch(`/worker/update-password-worker`, formPassword)
        .then((res) => {
          toast.success("Berhasil Mengubah Password");
          setFormPassword({
            password: "",
            confirm_password: "",
          });
        })
        .catch((err) => {
          err.response.data.msg && toast.error(err.response.data.msg);
        });
    }
  };
  const handleClickEditPengalaman = (data) => {
    setformPengalaman({
      ...data,
      tgl_keluar: new Date(data.tgl_keluar).toISOString().slice(0, 10),
      tgl_masuk: new Date(data.tgl_masuk).toISOString().slice(0, 10),
      isEdit: true,
      username: props.auth.username,
    });
  };
  const handleSubmitEditPengalaman = () => {
    axios
      .patch(
        `/pengalaman/update-wroker-exp/${formPengalaman.id}`,
        formPengalaman
      )
      .then((res) => {
        toast.success("Berhasil Mengubah Pengalaman");
        getAllPengalaman();
        setformPengalaman({
          nama_perusahaan: "",
          posisi: "",
          tgl_keluar: "",
          tgl_masuk: "",
          deskripsi: "",

          isEdit: false,
          username: props.auth.username,
        });
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
                    srcImage={
                      image
                        ? image
                        : `${process.env.REACT_APP_HOST}/uploads/avatar/${thisWorker.avatar}`
                    }
                    altImage="Profile Image"
                    className="edit__profile--image"
                    imageClass="img-cover rounded-circle"
                  />
                  <Button
                    className="btn btn__edit__text p-0"
                    onClick={onButtonClick}
                  >
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      id="file"
                      ref={inputFile}
                      name="avatar"
                      onChange={handleChangeImage}
                      style={{ display: "none" }}
                    />

                    <img
                      src="/camera.png"
                      className="rounded-circle"
                      style={{ width: "50px", marginTop: "-40px" }}
                      alt=""
                    />
                  </Button>

                  <p className="username text-center">@{thisWorker.username}</p>
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
                {isChangePassword ? (
                  <Button
                    className="btn btn__password"
                    onClick={() => setIsChangePassword(false)}
                  >
                    Ubah Profile
                  </Button>
                ) : (
                  <Button
                    className="btn btn__password"
                    onClick={() => setIsChangePassword(true)}
                  >
                    Ubah Password
                  </Button>
                )}
                <Link to="/profilePekerja" className="btn btn__back">
                  Kembali
                </Link>
              </div>
            </div>
            {/* !isChangePassword */}
            {isChangePassword ? (
              <div className="col-12 col-md-8 col-lg-8">
                <Card className="edit__card--profile">
                  <div className="content__head">
                    <h5 className="content__head--heading">Change Password</h5>
                  </div>

                  <div className="line w-100"></div>

                  <div className="content__form">
                    <div className="form-group position-relative">
                      <label htmlFor="tt">Password</label>
                      <input
                        className="form-control p-2"
                        type="password"
                        name="password"
                        value={formPassword.password}
                        onChange={handleChangePassword}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="job">Confirm Password</label>
                      <input
                        className="form-control p-2"
                        type="password"
                        name="confirm_password"
                        value={formPassword.confirm_password}
                        onChange={handleChangePassword}
                      />
                    </div>

                    <div className="d-flex justify-content-end ">
                      <Button
                        className="btn__auth save"
                        onClick={
                          formPassword.password == null
                            ? () => toast.error("Password Tidak Boleh Kosong")
                            : handleSubmitPassword
                        }
                      >
                        Simpan Password
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ) : (
              // EDIT PROFILE
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
                      <label htmlFor="job">Type</label>
                      <select
                        onChange={handleChange}
                        class="form-select p-3"
                        aria-label="Default select example"
                        name="type"
                      >
                        <option value="freelance">Freelance</option>
                        <option value="fulltime">Full Time</option>
                      </select>
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
                        value={formSkill.nama_skill}
                        onChange={handleChangeSkill}
                      />
                    </div>
                    <div className="ms-auto">
                      {formSkill.isEdit ? (
                        <Button
                          className="btn__auth save skill"
                          style={{ marginBottom: 30 }}
                          onClick={handleSubmitEditSkill}
                          value={formSkill.nama_skill}
                        >
                          Update
                        </Button>
                      ) : (
                        <Button
                          className="btn__auth save skill"
                          style={{ marginBottom: 30 }}
                          onClick={handleSubmitSkill}
                          value={formSkill.nama_skill}
                        >
                          Tambah
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="wrapper__button">
                    {allSkill.map((e) => (
                      <Button className="btn btn__skill--added">
                        {e.nama_skill}
                        <Button
                          className="ms-5 btn btn-success btn-sm"
                          onClick={() =>
                            handleClickEditSKill(e.id, e.nama_skill)
                          }
                        >
                          <IconPencil width={18} height={18} />
                        </Button>
                        <Button
                          className="btn btn-danger ms-2 btn-sm"
                          onClick={() => handleDeleteSkill(e.id)}
                        >
                          <IconTrashVector width={18} height={18} />
                        </Button>
                      </Button>
                    ))}
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
                          value={formPengalaman.nama_perusahaan}
                        />
                      </div>
                      <div className="form-group position-relative">
                        <label htmlFor="position">Posisi</label>
                        <InputText
                          placeholder="Masukan posisi anda"
                          onChange={handleChangePengalaman}
                          name="posisi"
                          value={formPengalaman.posisi}
                        />
                      </div>
                      <div className="form-group position-relative">
                        <label htmlFor="date__in">Tanggal Keluar</label>
                        <InputText
                          onChange={handleChangePengalaman}
                          name="tgl_masuk"
                          type="date"
                          value={formPengalaman.tgl_masuk}
                        />
                      </div>
                      <div className="form-group position-relative">
                        <label htmlFor="date__out">Tanggal Keluar</label>
                        <InputText
                          onChange={handleChangePengalaman}
                          name="tgl_keluar"
                          type="date"
                          value={formPengalaman.tgl_keluar}
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
                        value={formPengalaman.deskripsi}
                      ></textarea>
                    </div>

                    <hr
                      className="w-100"
                      style={{ color: "#E2E5ED", height: 2 }}
                    />
                    {formPengalaman.isEdit ? (
                      <Button
                        className="btn__auth save experience"
                        onClick={handleSubmitEditPengalaman}
                      >
                        Edit pengalaman kerja
                      </Button>
                    ) : (
                      <Button
                        className="btn__auth save experience"
                        onClick={handleSubmitPengalaman}
                      >
                        Tambah pengalaman kerja
                      </Button>
                    )}
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
                            <div class="row">
                              <div className="col-6">
                                <button
                                  className="btn btn-success"
                                  onClick={() => handleClickEditPengalaman(e)}
                                >
                                  Edit
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDeletePengalaman(e.id)}
                                >
                                  Hapus
                                </button>
                              </div>
                            </div>
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
                        value={formPortfolio.nama_applikasi}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="repo">Link Repository</label>
                      <InputText
                        placeholder="Masukan link repository"
                        name="link_repository"
                        onChange={handleChangePortfolio}
                        value={formPortfolio.link_repository}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="image">Upload Gambar</label>
                      <InputText
                        type="file"
                        name="image"
                        onChange={handleChangeImagePortfolio}
                      />
                    </div>
                    <hr
                      className="w-100"
                      style={{ color: "#E2E5ED", height: 2 }}
                    />
                    {formPortfolio.isEdit ? (
                      <Button
                        className="btn__auth save portfolio mt-4 mt-md-5"
                        onClick={handleEditPortfolio}
                      >
                        Edit Portofolio
                      </Button>
                    ) : (
                      <Button
                        className="btn__auth save portfolio mt-4 mt-md-5"
                        onClick={handleSubmitPortfolio}
                      >
                        Tambah Portofolio
                      </Button>
                    )}
                    {allPortfolio.map((e) => (
                      <>
                        <div className="card card-body mt-5">
                          <div className="content__form skills">
                            <div className="form-group position-relative">
                              {e.nama_applikasi}
                            </div>
                            <div className="ms-auto">
                              <div class="row">
                                <div className="col-6">
                                  <button
                                    className="btn btn-success"
                                    onClick={() => handleClickEditPortfolio(e)}
                                  >
                                    <IconPencil width={18} height={18} />
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeletePortfolio(e.id)}
                                  >
                                    <IconTrashVector width={18} height={18} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </Card>
              </div>
            )}
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

export default connect(mapStateToProps, null)(EditProfileWorker);
