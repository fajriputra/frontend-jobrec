import React, { useEffect, useState } from "react";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import FormResetPassword from "components/Auth/RightColumn/FormResetPassword";
import { toast } from "react-toastify";
import axios from "helpers/axios";

import "./index.scss";
import useScrollTop from "hooks/useScrollTop";

export default function ResetPassword(props) {
  const [form, setForm] = useState({
    email: "",
  });
  useScrollTop();
  useEffect(() => {
    document.title = "Peworld | Reset Password";
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `/auth/forgot-password-process?email=${form.email}`
      );
      toast.success(res.data.msg);
    } catch (err) {
      console.log(err.response);
      err.response.data.msg && toast.error(err.response.data.msg);
    }
  };

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
              <FormResetPassword
                onChange={handleChange}
                onSubmit={handleSubmitForgot}
              />
            </RightColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
