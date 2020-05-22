import { HTTP_FINDTHEBESTWAY_FETCHING, HTTP_FINDTHEBESTWAY_SUCCESS, HTTP_FINDTHEBESTWAY_FAILED } from "../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_FINDTHEBESTWAY_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case HTTP_FINDTHEBESTWAY_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case HTTP_FINDTHEBESTWAY_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };

    default:
      return state;
  }
};
