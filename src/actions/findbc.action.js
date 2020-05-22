import {
  HTTP_FINDBC_FETCHING,
  HTTP_FINDBC_SUCCESS,
  HTTP_FINDBC_FAILED,
  server,
  OK
} from "../constants";
import { httpClient } from "./../utils/HttpClient";

export const setFindBCStateToFetching = () => ({
  type: HTTP_FINDBC_FETCHING
});

export const setFindBCStateToSuccess = payload => ({
  type: HTTP_FINDBC_SUCCESS,
  payload
});

export const setFindBCStateToFailed = () => ({
  type: HTTP_FINDBC_FAILED
});

export const findBC = ( credentail) => {
  return async dispatch => {
    dispatch(setFindBCStateToFetching());
    try {
      let result = await httpClient.post(server.FINDBC_URL, credentail);      
        dispatch(setFindBCStateToSuccess(result.data.data));
    } catch (error) {
      console.log(error);
        // failed
        dispatch(setFindBCStateToFailed());
    }
  };
};
