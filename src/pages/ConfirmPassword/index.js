import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LeftColumn from "components/Auth/LeftColumn";
import RightColumn from "components/Auth/RightColumn";
import FormResetPassword from "components/Auth/RightColumn/FormResetPassword";
import { toast } from "react-toastify";
import axios from "helpers/axios";
import "./index.scss";

export default function ConfirmPassword(props) {
  const history = useHistory();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/auth/forgot-password/${props.match.params.token}`,
        form
      );
      toast.success(res.data.msg);
      setTimeout(() => {
        history.push("");
      }, 2000);
    } catch (err) {
      console.log(err.response);
      err.response.data.msg && toast.error(err.response.data.msg);
    }
  };
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
              <FormResetPassword
                confirmPassword
                onChange={handleChange}
                onSubmit={handleResetPassword}
              />
            </RightColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
