import React, { useState, useEffect } from "react";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import Button from "components/UI/Button";
import FormWorker from "components/Auth/RightColumn/FormWorker";
import FormRecruiter from "components/Auth/RightColumn/FormRecruiter";
import useScrollTop from "hooks/useScrollTop";

import axios from "helpers/axios";

import "./index.scss";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  username: "",
  email: "",
  nohp: "",
  password: "",
  confirm_password: "",
  companyName: "",
  filed: "",
};

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function Register(props) {
  useScrollTop();

  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);
  const [showRecruiter, setShowRecruiter] = useState(false);

  const handeShowClick = () => setShowRecruiter(!showRecruiter);

  const {
    name,
    username,
    email,
    nohp,
    password,
    confirm_password,
    companyName,
    filed,
  } = form;

  useEffect(() => {
    document.title = "Peworld | Register";
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitWorker = async (e) => {
    e.preventDefault();
    setStatus(statusList.process);
    try {
      if (password !== confirm_password) {
        return toast.error("Konfirmasi password tidak sama");
      }
      setStatus(statusList.idle);

      const res = await axios.post("/auth/register", {
        name,
        username,
        email,
        nohp,
        password,
        confirm_password,
      });

      toast.success(res.value.data.msg);
      setStatus(statusList.error);
    } catch (err) {
      err.response.data.msg && toast.error(err.response.data.msg);
      setStatus(statusList.error);
      setForm({
        name,
        username,
        email,
        nohp,
        password,
        confirm_password,
      });
    }
    setStatus(statusList.success);
  };

  const handleSubmitRecruiter = async (e) => {
    e.preventDefault();

    setStatus(statusList.process);
    try {
      if (password !== confirm_password) {
        return toast.error("Konfirmasi password tidak sama");
      }
      const res = await axios.post("/auth/register-recruiter", {
        name,
        username,
        email,
        nohp,
        password,
        confirm_password,
        companyName,
        filed,
      });

      setStatus(statusList.idle);

      toast.success(res.value.data.msg);
      setStatus(statusList.error);
    } catch (err) {
      err.response.data.msg && toast.error(err.response.data.msg);
      setForm({
        name,
        username,
        email,
        nohp,
        password,
        confirm_password,
        companyName,
        filed,
      });
    }
    setStatus(statusList.success);
  };

  return (
    <section className="register">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-lg-7">
            <LeftColumn />
          </div>

          <div className="col-md-5 col-lg-5 p-0">
            <RightColumn
              greeting={showRecruiter ? "Halo, Recruiter!" : "Halo, Pekerja!"}
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
            >
              {showRecruiter ? (
                <FormRecruiter
                  onSubmit={handleSubmitRecruiter}
                  onChange={handleChange}
                  valueName={form.name}
                  valueEmail={form.email}
                  valueCompany={form.companyName}
                  valueBidang={form.filed}
                  valueNohp={form.nohp}
                  valuePassword={form.password}
                  valueConfirmPassword={form.confirm_password}
                  isLoading={status === statusList.process}
                />
              ) : (
                <FormWorker
                  onSubmit={handleSubmitWorker}
                  onChange={handleChange}
                  valueName={form.name}
                  valueUsername={form.username}
                  valueEmail={form.email}
                  valueNohp={form.nohp}
                  valuePassword={form.password}
                  valueConfirmPassword={form.confirm_password}
                  isLoading={status === statusList.process}
                />
              )}

              <hr />
              <Button
                className="btn__auth text__only mb-4"
                onClick={handeShowClick}
              >
                Daftar Sebagai {showRecruiter ? "Pekerja" : "Recruiter"}?
              </Button>

              <Button className="btn btn__auth--link" type="link" href="/login">
                Anda sudah punya akun? <span>Masuk disini</span>
              </Button>
            </RightColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
