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
    <form className="form__input" onSubmit={props.onSubmit}>
      <div className="form-group position-relative">
        <label htmlFor="name">Nama</label>
        <InputText
          onChange={props.onChange}
          placeholder="Masukan nama panjang"
          name="name"
          defaultValue={props.valueName}
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="email">Email</label>
        <InputText
          onChange={props.onChange}
          placeholder="Masukan alamat email"
          name="email"
          type="email"
          defaultValue={props.valueEmail}
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="companyName">Perusahaan</label>
        <InputText
          onChange={props.onChange}
          placeholder="Masukan nama perusahaan"
          name="companyName"
          defaultValue={props.valueCompany}
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="bidang">Bidang Perusahaan</label>
        <InputText
          onChange={props.onChange}
          placeholder="Bidang perusahaan anda"
          name="bidang"
          defaultValue={props.valueBidang}
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="nohp">No Handphone</label>
        <InputText
          onChange={props.onChange}
          placeholder="Masukan no handphone"
          name="nohp"
          type="number"
          defaultValue={props.valueNohp}
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="password">Kata Sandi</label>
        <InputText
          onChange={props.onChange}
          placeholder="Masukan Kata sandi"
          name="password"
          type="password"
          defaultValue={props.valuePassword}
        />
      </div>
      <div className="form-group position-relative">
        <label htmlFor="confirm_password">Kata Sandi</label>
        <InputText
          onChange={props.onChange}
          placeholder="Masukan Konfirmasi Kata sandi"
          name="confirm_password"
          type="password"
          defaultValue={props.valueConfirmPassword}
        />
      </div>
      <Button className="btn btn__auth w-100" isLoading={props.isLoading}>
        Daftar
      </Button>
    </form>
  );
}
