import axios from "helpers/axios";
import { PROFILE_PERUSAHAAN } from "../constans";
import { EDIT_PERUSAHAAN } from "../constans";

export const profilePerusahaan = (id) => {
  return {
    type: PROFILE_PERUSAHAAN,
    payload: axios.get(`/recruiter/${id}`),
  };
};

export const editPerusahaan = (data) => {
  // console.log(data, "fhsjdfhjs");
  return {
    type: EDIT_PERUSAHAAN,
    payload: axios.patch(`/recruiter/update-profile/`, data),
  };
};
