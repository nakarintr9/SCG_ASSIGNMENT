import {
  HTTP_FINDTHEBESTWAY_FETCHING,
  HTTP_FINDTHEBESTWAY_SUCCESS,
  HTTP_FINDTHEBESTWAY_FAILED,
  server,
  OK
} from "../constants";
import { httpClient } from "./../utils/HttpClient";

export const setFindTheBestWayStateToFetching = () => ({
  type: HTTP_FINDTHEBESTWAY_FETCHING
});

export const setFindTheBestWayStateToSuccess = payload => ({
  type: HTTP_FINDTHEBESTWAY_SUCCESS,
  payload
});

export const setFindTheBestWayStateToFailed = () => ({
  type: HTTP_FINDTHEBESTWAY_FAILED
});

export const findTheBestWay = ( credentail) => {
  return async dispatch => {
    dispatch(setFindTheBestWayStateToFetching());
    try {
      let result = await httpClient.post(server.FINDTHEBESTWAY_URL, credentail);      
        dispatch(setFindTheBestWayStateToSuccess(result.data.data));
    } catch (error) {
      console.log(error);
        // failed
        dispatch(setFindTheBestWayStateToFailed());
    }
  };
};
