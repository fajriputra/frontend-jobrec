import React from "react";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import FormResetPassword from "components/Auth/RightColumn/FormResetPassword";

import "./index.scss";

export default function ConfirmPassword(props) {
  return (
    <section className="confirm__password">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-lg-7 p-0">
            <LeftColumn />
          </div>

          <div className="col-md-5 col-lg-5">
            <RightColumn
              greeting="Reset Password"
              subTitle="You need to change your password to activate your account.
"
            >
              <FormResetPassword confirmPassword />
            </RightColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
