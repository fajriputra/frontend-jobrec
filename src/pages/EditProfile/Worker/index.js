import React from "react";

import { ReactComponent as IconPencil } from "assets/images/icons/icon-pencil.svg";
import { ReactComponent as IconPencilVector } from "assets/images/icons/icon-pencil-vector.svg";
import { ReactComponent as IconLocation } from "assets/images/icons/icon-location.svg";
import { ReactComponent as IconPhone } from "assets/images/icons/icon-phone.svg";
import { ReactComponent as IconTrashVector } from "assets/images/icons/icon-trash-vector.svg";
import ProfileImage from "assets/images/opini1.png";

import Card from "components/Card";
import Header from "components/Header";
import PurpleBackground from "components/PurpleBackground";
import Image from "components/Image";

import Button from "components/UI/Button";
import MetaWrapper from "components/MetaWrapper";
import InputText from "components/UI/Form/InputText";

import "./index.scss";

export default function EditProfileWorker(props) {
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
                    srcImage={ProfileImage}
                    altImage="Profile Image"
                    className="edit__profile--image"
                    imageClass="img-cover rounded-circle"
                  />

                  <p className="username text-center">@babangganteng</p>

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
                  title="Louis Tomlinson"
                  jobs={
                    <div className="text__jobs--wrapper">
                      <div className="text__infodata mb-3">
                        <span className="text__infodata--title mb-1">
                          Web Developer
                        </span>
                        <span className="text__infodata--gray">Freelance</span>
                      </div>
                      <div className="text__infodata mb-3">
                        <span className="text__infodata--gray mb-2">
                          <IconLocation className="icon location" />
                          Purwokerto, Jawa Tengah
                        </span>
                        <span className="text__infodata--gray">
                          <IconPhone className="icon phone" />
                          0812 - 3456 - 789
                        </span>
                      </div>
                    </div>
                  }
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at."
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
                      name="fullname"
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="job">Job Desk</label>
                    <InputText placeholder="Masukan job desk" name="job" />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="domisili">Domisi</label>
                    <InputText placeholder="Masukan domisili" name="domisili" />
                  </div>

                  <div className="form__socialmedia">
                    <div className="form-group position-relative">
                      <label htmlFor="instagram">Instagram</label>
                      <InputText
                        placeholder="Masukan username instagram"
                        name="instagram"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="github">Github</label>
                      <InputText
                        placeholder="Masukan username github"
                        name="github"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="gitlab">Gitlab</label>
                      <InputText
                        placeholder="Masukan username gitlab"
                        name="gitlab"
                      />
                    </div>
                  </div>

                  <div className="form-group position-relative d-flex flex-column">
                    <label htmlFor="desc">Deskripsi Singkat</label>
                    <textarea
                      name="desc"
                      placeholder="Masukan deskripsi disini..."
                      className="form__description"
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-end">
                    <Button className="btn__auth save">Simpan</Button>
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
                      placeholder="Masukan nama lengkap"
                      name="fullname"
                    />
                  </div>
                  <div className="ms-auto">
                    <Button
                      className="btn__auth save skill"
                      style={{ marginBottom: 30 }}
                    >
                      Simpan
                    </Button>
                  </div>
                </div>
                <div className="wrapper__button">
                  <Button className="btn btn__skill--added">
                    Python
                    <IconPencilVector
                      width={18}
                      height={18}
                      className="ms-5 me-3"
                    />
                    <IconTrashVector width={18} height={18} />
                  </Button>
                  <Button className="btn btn__skill--added">
                    Python
                    <IconPencilVector
                      width={18}
                      height={18}
                      className="ms-5 me-3"
                    />
                    <IconTrashVector width={18} height={18} />
                  </Button>
                  <Button className="btn btn__skill--added">
                    Python
                    <IconPencilVector
                      width={18}
                      height={18}
                      className="ms-5 me-3"
                    />
                    <IconTrashVector width={18} height={18} />
                  </Button>
                  <Button className="btn btn__skill--added">
                    Python
                    <IconPencilVector
                      width={18}
                      height={18}
                      className="ms-5 me-3"
                    />
                    <IconTrashVector width={18} height={18} />
                  </Button>
                  <Button className="btn btn__skill--added">
                    Python
                    <IconPencilVector
                      width={18}
                      height={18}
                      className="ms-5 me-3"
                    />
                    <IconTrashVector width={18} height={18} />
                  </Button>
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
                        name="company"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="position">Posisi</label>
                      <InputText
                        placeholder="Masukan posisi anda"
                        name="position"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="date__in">Tanggal Keluar</label>
                      <InputText name="date__in" type="date" />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="date__out">Tanggal Keluar</label>
                      <InputText name="date__out" type="date" />
                    </div>
                  </div>

                  <div className="form-group position-relative d-flex flex-column">
                    <label htmlFor="desc">Deskripsi singkat</label>
                    <textarea
                      name="desc"
                      placeholder="Deskripsikan pekerjaan anda disini"
                      className="form__description"
                    ></textarea>
                  </div>

                  <hr
                    className="w-100"
                    style={{ color: "#E2E5ED", height: 2 }}
                  />
                  <Button className="btn__auth save experience">
                    Tambah pengalaman kerja
                  </Button>
                  <hr
                    className="w-100"
                    style={{ color: "#E2E5ED", height: 2 }}
                  />
                </div>
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
                      name="aplikasi"
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="repo">Link Repository</label>
                    <InputText
                      placeholder="Masukan link repository"
                      name="repo"
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="image">Upload Gambar</label>
                    <InputText type="file" name="image" />
                  </div>
                  <hr
                    className="w-100"
                    style={{ color: "#E2E5ED", height: 2 }}
                  />
                  <Button className="btn__auth save portfolio mt-4 mt-md-5">
                    Tambah portofolio
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
