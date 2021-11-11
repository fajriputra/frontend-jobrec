import axios from "helpers/axios";
import { USER_LOGIN } from "../constans";

export const userLoginWorker = (data) => {
  return {
    type: USER_LOGIN,
    payload: axios.post("/auth/login", data),
  };
};

export const userLoginRecruiter = (data) => {
  return {
    type: USER_LOGIN,
    payload: axios.post("/auth/login-recruiter", data),
  };
};
