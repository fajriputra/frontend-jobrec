import axios from "helpers/axios";
import { PROFILE_PERUSAHAAN } from "../constans";

export const profilePerusahaan = (id) => {
  return {
    type: PROFILE_PERUSAHAAN,
    payload: axios.get(`/recruiter/${id}`),
  };
};
