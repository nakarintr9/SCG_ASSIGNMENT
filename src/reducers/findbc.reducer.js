import { HTTP_FINDBC_FETCHING, HTTP_FINDBC_SUCCESS, HTTP_FINDBC_FAILED } from "../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_FINDBC_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case HTTP_FINDBC_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case HTTP_FINDBC_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };

    default:
      return state;
  }
};
