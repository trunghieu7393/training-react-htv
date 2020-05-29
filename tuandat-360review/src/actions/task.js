import * as taskConstants from '../constants/task';

const fetchLoadTask = (data) => {
  return {
    type: taskConstants.LOAD_PAGE,
    payload: data,
  };
};

export const fetchLoadPage = (data) => {
  return dispatch => {
    dispatch(fetchLoadTask(data));
  }
}