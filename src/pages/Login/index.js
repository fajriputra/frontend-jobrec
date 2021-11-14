import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector, connect } from "react-redux";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import FormRecruiter from "components/Auth/RightColumn/FormRecruiter";
import FormWorker from "components/Auth/RightColumn/FormWorker";
import Button from "components/UI/Button";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";
import { userLoginRecruiter, userLoginWorker } from "store/auth/actions";
import { toast } from "react-toastify";
import { getDataWorker } from "store/profile/worker/action";

const initialState = {
  email: "",
  password: "",
};

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const Login = (props) => {
  useScrollTop();

  const [form, setForm] = useState(initialState);
  const [showRecruiter, setShowRecruiter] = useState(false);
  const [status, setStatus] = useState(statusList.idle);
  const auth = useSelector((state) => state.auth);

  const { email, password } = form;

  const dispatch = useDispatch();
  const history = useHistory();

  const handeShowClick = () => setShowRecruiter(!showRecruiter);

  let isAdmin = localStorage.getItem("persist:root");
  console.log(isAdmin);
  // isAdmin = JSON.parse(isAdmin).auth;
  // isAdmin = JSON.parse(isAdmin).username;

  useEffect(() => {
    document.title = "Peworld | Login";
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitWorker = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Mohon di isi untuk keseluruhan field");
      return setStatus(statusList.idle);
    }

    if (password.length < 6) {
      toast.error("Password minimal 6 karakter");
      return setStatus(statusList.idle);
    }
    dispatch(userLoginWorker(form))
      .then((res) => {
        dispatch(getDataWorker(isAdmin));

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

  const handleSubmitRecruiter = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Mohon di isi untuk keseluruhan field");
      return setStatus(statusList.idle);
    }

    if (password.length < 6) {
      toast.error("Password minimal 6 karakter");
      return setStatus(statusList.idle);
    }
    dispatch(userLoginRecruiter(form))
      .then((res) => {
        toast.success(res.value.data.msg);

        setTimeout(() => {
          history.push("/home");
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
              subTitle="Silahkan Login"
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
