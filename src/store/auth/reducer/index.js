import { USER_LOGIN } from "../constans";

const initialState = {
  userId: "",
  username: "",
  isError: "",
  isLoading: false,
  msg: "",
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_LOGIN}_PENDING`: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        userId: "",
        username: "",
        token: null,
      };
    }

    case `${USER_LOGIN}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        userId: action.payload.data.data.id,
        username: action.payload.data.data.username,
        msg: action.payload.data.msg,
        token: action.payload.data.data.token,
      };
    }

    case `${USER_LOGIN}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        userId: "",
        username: "",
        msg: action.payload.response.data.msg,
        token: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default auth;
