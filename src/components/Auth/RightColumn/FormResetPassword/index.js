import React from "react";

import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";

export default function FormResetPassword(props) {
  if (props.confirmPassword) {
    return (
      <form className="form__input">
        <div className="form-group position-relative">
          <label htmlFor="password">Kata Sandi</label>
          <InputText
            placeholder="Masukan kata sandi"
            name="password"
            type="password"
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="confirm__password">Konfirmasi new password</label>
          <InputText
            placeholder="Masukan konfirmasi kata sandi"
            name="confirm__password"
            type="password"
          />
        </div>

        <Button className="btn__auth">Reset password</Button>
      </form>
    );
  }

  return (
    <form className="form__input">
      <div className="form-group position-relative">
        <label htmlFor="email">Email</label>
        <InputText
          placeholder="Masukan alamat email"
          name="email"
          type="email"
        />
      </div>

      <Button className="btn__auth">Send password reset email</Button>
    </form>
  );
}
