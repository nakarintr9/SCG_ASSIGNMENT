import { HTTP_FINDXYZ_FETCHING, HTTP_FINDXYZ_SUCCESS, HTTP_FINDXYZ_FAILED } from "../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_FINDXYZ_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case HTTP_FINDXYZ_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case HTTP_FINDXYZ_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };

    default:
      return state;
  }
};
