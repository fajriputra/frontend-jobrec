import React from "react";

import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";

export default function FormWorker(props) {
  if (props.isLoggedin) {
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
        <div className="form-group position-relative">
          <label htmlFor="password">Kata Sandi</label>
          <InputText
            placeholder="Masukan Kata sandi"
            name="password"
            type="password"
          />
        </div>

        <div className={props.classForgot}>
          <Button
            className={props.classBtnForgot}
            type="link"
            href="/reset-password"
          >
            Lupa kata sandi?
          </Button>
        </div>
        <Button className="btn__auth">Masuk</Button>
      </form>
    );
  }

  return (
    <form className="form__input">
      <div className="form-group position-relative">
        <label htmlFor="fullname">Nama</label>
        <InputText placeholder="Masukan nama panjang" name="fullname" />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="username">Username</label>
        <InputText placeholder="Masukan username" name="username" />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="email">Email</label>
        <InputText
          placeholder="Masukan alamat email"
          name="email"
          type="email"
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="phoneNumber">No Handphone</label>
        <InputText
          placeholder="Masukan no handphone"
          name="phoneNumber"
          type="number"
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="password">Kata Sandi</label>
        <InputText
          placeholder="Masukan Kata sandi"
          name="password"
          type="password"
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="confirm_password">Kata Sandi</label>
        <InputText
          placeholder="Masukan Konfirmasi Kata sandi"
          name="confirm_password"
          type="password"
        />
      </div>
      <Button className="btn__auth">Daftar</Button>
    </form>
  );
}
