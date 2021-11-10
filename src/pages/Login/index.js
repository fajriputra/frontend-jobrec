import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import FormRecruiter from "components/Auth/RightColumn/FormRecruiter";
import FormWorker from "components/Auth/RightColumn/FormWorker";
import Button from "components/UI/Button";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";
import { userLoginRecruiter, userLoginWorker } from "store/auth/actions";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

export default function Login(props) {
  useScrollTop();

  const [form, setForm] = useState(initialState);
  const [showRecruiter, setShowRecruiter] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handeShowClick = () => setShowRecruiter(!showRecruiter);

  useEffect(() => {
    document.title = "Peworld | Login";
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitWorker = (e) => {
    e.preventDefault();

    dispatch(userLoginWorker(form))
      .then((res) => {
        toast.success(res.value.data.msg);

        setTimeout(() => {
          history.push("/login");
        }, 2000);

        localStorage.setItem("token", res.value.data.data.token);
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setForm({ email: "", password: "" });
      });
  };

  const handleSubmitRecruiter = (e) => {
    e.preventDefault();
    dispatch(userLoginRecruiter(form))
      .then((res) => {
        toast.success(res.value.data.msg);

        setTimeout(() => {
          history.push("/");
        }, 2000);

        localStorage.setItem("token", res.value.data.data.token);
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setForm({ email: "", password: "" });
      });
  };

  return (
    <section className="login">
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
                  isLoggedin
                  classForgot="forgot__password"
                  classBtnForgot="btn btn__auth--link"
                  onChange={handleChange}
                  valueEmail={form.email}
                  valuePassword={form.password}
                />
              ) : (
                <FormWorker
                  onSubmit={handleSubmitWorker}
                  isLoggedin
                  classForgot="forgot__password"
                  classBtnForgot="btn btn__auth--link"
                  onChange={handleChange}
                  valueEmail={form.email}
                  valuePassword={form.password}
                />
              )}

              <hr />
              <Button
                className="btn__auth text__only mb-4"
                onClick={handeShowClick}
              >
                Masuk Sebagai {showRecruiter ? "Pekerja" : "Recruiter"}?
              </Button>

              <Button
                className="btn btn__auth--link"
                type="link"
                href="/register"
              >
                Anda belum punya akun? <span>Daftar disini</span>
              </Button>
            </RightColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
