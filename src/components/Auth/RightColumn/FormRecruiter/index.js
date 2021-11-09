import React from "react";
import { useSelector } from "react-redux";
import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";

export default function FormRecruiter(props) {
  const { isLoading } = useSelector((state) => state.auth);
  if (props.isLoggedin) {
    return (
      <form className="form__input" onSubmit={props.onSubmit}>
        <div className="form-group position-relative">
          <label htmlFor="email">Email</label>
          <InputText
            placeholder="Masukan alamat email"
            name="email"
            type="email"
            value={props.valueEmail}
            onChange={props.onChange}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="password">Kata Sandi</label>
          <InputText
            placeholder="Masukan Kata sandi"
            name="password"
            type="password"
            value={props.valuePassword}
            onChange={props.onChange}
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

        <Button className="btn btn__auth w-100" isLoading={isLoading}>
          Masuk
        </Button>
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
        <label htmlFor="email">Email</label>
        <InputText
          placeholder="Masukan alamat email"
          name="email"
          type="email"
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="company">Perusahaan</label>
        <InputText placeholder="Masukan nama perusahaan" name="company" />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="bidang">Bidang Perusahaan</label>
        <InputText placeholder="Bidang perusahaan anda" name="bidang" />
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
      <Button className="btn__auth w-100" isLoading={isLoading}>
        Masuk
      </Button>
    </form>
  );
}
