import React, { useState } from "react";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";

import "./index.scss";
import Button from "components/UI/Button";
import FormWorker from "components/Auth/RightColumn/FormWorker";
import FormRecruiter from "components/Auth/RightColumn/FormRecruiter";
import useScrollTop from "hooks/useScrollTop";

export default function Register(props) {
  useScrollTop();
  const [showRecruiter, setShowRecruiter] = useState(false);

  const handeShowClick = () => setShowRecruiter(!showRecruiter);

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
              {showRecruiter ? <FormRecruiter /> : <FormWorker />}

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
