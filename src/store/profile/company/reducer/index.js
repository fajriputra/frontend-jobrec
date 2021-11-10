import { PROFILE_PERUSAHAAN } from "../constans";

const initialState = {
  isError: "",
  isLoading: false,
  msg: "",
  data: {},
};

const profileCompany = (state = initialState, action) => {
  switch (action.type) {
    case `${PROFILE_PERUSAHAAN}_PENDING`: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        data: {},
      };
    }

    case `${PROFILE_PERUSAHAAN}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }

    case `${PROFILE_PERUSAHAAN}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default profileCompany;
