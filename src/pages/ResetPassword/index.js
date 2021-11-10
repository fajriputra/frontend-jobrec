import React, { useEffect } from "react";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import FormResetPassword from "components/Auth/RightColumn/FormResetPassword";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

export default function ResetPassword(props) {
  useScrollTop();

  useEffect(() => {
    document.title = "Peworld | Reset Password";
  });

  return (
    <section className="reset__password">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-lg-7 p-0">
            <LeftColumn />
          </div>

          <div className="col-md-5 col-lg-5">
            <RightColumn
              greeting="Reset Password"
              subTitle="Enter your user account's verified email address and we will send you a password reset link.
"
            >
              <FormResetPassword />
            </RightColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
