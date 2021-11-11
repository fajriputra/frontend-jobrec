import React from "react";

import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";

export default function FormResetPassword(props) {
  if (props.confirmPassword) {
    return (
      <form className="form__input" onSubmit={props.onSubmit}>
        <div className="form-group position-relative">
          <label htmlFor="password">Kata Sandi</label>
          <InputText
            placeholder="Masukan kata sandi"
            name="password"
            type="password"
            onChange={props.onChange}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="confirm__password">Konfirmasi new password</label>
          <InputText
            placeholder="Masukan konfirmasi kata sandi"
            name="confirmPassword"
            type="password"
            onChange={props.onChange}
          />
        </div>

        <Button className="btn__auth">Reset password</Button>
      </form>
    );
  }

  // console.log(props);
  return (
    <form className="form__input" onSubmit={props.onSubmit}>
      <div className="form-group position-relative">
        <label htmlFor="email">Email</label>
        <InputText
          placeholder="Masukan alamat email"
          name="email"
          type="email"
          onChange={props.onChange}
        />
      </div>

      <div className="form-group position-relative ">
        <label htmlFor="email">Email</label>
        <select class="form-select p-3" name="type" onChange={props.onChange}>
          <option value="worker">Woker</option>
          <option value="recruiter">Recruiter</option>
        </select>
      </div>

      <Button className="btn__auth" type="submit">
        Send password reset email
      </Button>
    </form>
  );
}
