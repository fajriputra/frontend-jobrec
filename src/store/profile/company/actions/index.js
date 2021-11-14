import axios from "helpers/axios";
import { PROFILE_PERUSAHAAN } from "../constans";
import { EDIT_PERUSAHAAN } from "../constans";
import { EDIT_PERUSAHAAN_IMAGE } from "../constans";

export const profilePerusahaan = (id) => {
  return {
    type: PROFILE_PERUSAHAAN,
    payload: axios.get(`/recruiter/${id}`),
  };
};

export const editPerusahaan = (data) => {
  return {
    type: EDIT_PERUSAHAAN,
    payload: axios.patch(`/recruiter/update-profile/`, data),
  };
};

export const editPerusahaanImage = (data) => {
  return {
    type: EDIT_PERUSAHAAN_IMAGE,
    payload: axios.patch(`/recruiter/update-recruiter-image/`, data),
  };
};
