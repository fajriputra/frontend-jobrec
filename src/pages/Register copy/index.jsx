import React from "react";
import qs from "querystring";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";

import "./index.scss";
import Button from "components/UI/Button";

const Register = (props) => {
  // const urlParams = qs.parse(props.location.search);
  console.log(props);
  return (
    <section className="register">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-lg-7">
            <LeftColumn />
          </div>

          <div className="col-md-5 col-lg-5 p-0">
            <RightColumn>
              <Button className="btn__auth" type="submit">
                Daftar sebagai Recruiter
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
};
export default Register;
