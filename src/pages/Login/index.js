import React, { useState } from "react";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import FormRecruiter from "components/Auth/RightColumn/FormRecruiter";
import FormWorker from "components/Auth/RightColumn/FormWorker";
import Button from "components/UI/Button";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

export default function Login(props) {
  useScrollTop();

  const [showRecruiter, setShowRecruiter] = useState(false);

  const handeShowClick = () => setShowRecruiter(!showRecruiter);

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
                  isLoggedin
                  classForgot="forgot__password"
                  classBtnForgot="btn btn__auth--link"
                />
              ) : (
                <FormWorker
                  isLoggedin
                  classForgot="forgot__password"
                  classBtnForgot="btn btn__auth--link"
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
