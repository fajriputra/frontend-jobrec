import { GETDATAWORKER } from "../constans";

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  msg: "",
};

const dataWorker = (state = initialState, action) => {
  switch (action.type) {
    case `${GETDATAWORKER}_PENDING`: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        msg: "",
      };
    }
    case `${GETDATAWORKER}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case `${GETDATAWORKER}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: [],
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default dataWorker;
