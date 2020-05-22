import {
  HTTP_FINDXYZ_FETCHING,
  HTTP_FINDXYZ_SUCCESS,
  HTTP_FINDXYZ_FAILED,
  server,
  OK
} from "../constants";
import { httpClient } from "./../utils/HttpClient";

export const setFindXYZStateToFetching = () => ({
  type: HTTP_FINDXYZ_FETCHING
});

export const setFindXYZStateToSuccess = payload => ({
  type: HTTP_FINDXYZ_SUCCESS,
  payload
});

export const setFindXYZStateToFailed = () => ({
  type: HTTP_FINDXYZ_FAILED
});

export const findXYZ = ( credentail) => {
  return async dispatch => {
    dispatch(setFindXYZStateToFetching());
    try {
      let result = await httpClient.post(server.FINDXYZ_URL, credentail);      
        dispatch(setFindXYZStateToSuccess(result.data.data));
    } catch (error) {
      console.log(error);
        // failed
        dispatch(setFindXYZStateToFailed());
    }
  };
};
