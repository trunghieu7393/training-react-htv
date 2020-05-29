// function* helloSaga() {
//     yield true;
//     console.log('This is first saga');
// }

// export default helloSaga  ;


import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
//import { getDatabase, STATUS_CODE } from '../common/actionAPI';
//import { postDataAPISuccess, postDataAPIFail } from '../redux/actions/api';
import { showLoading, hideLoading } from '../actions/ui';
/**
 * B1: Thực thi action fetch task
 * B2: Gọi API
 * B2.1: Hiển thị thanh tiến trình loading
 * B3: Kiểm tra status code
 * Nếu thành công...
 * Nếu thất bại...
 * B4: Tắt loading
 * B5: Thực thi các công việc tiếp theo
 */
function* watchCreateTaskAction() {

  while (true) {
    yield take(taskTypes.LOAD_PAGE);
    console.log('Take saga running');
    //============Block===============//
    yield put(showLoading());
    console.log('show loading');
    yield delay(1000);
    yield put(hideLoading());

    //const resp = yield call(getDatabase);
    //============Block===============//
    //const { status, data } = resp;
    // if (status === STATUS_CODE.SUCCESS) {
    //   //dispatch any else action
    //   console.log('call API success')
    //   //yield put(postDataAPISuccess(data));


    // } else {
    //   //call API fail
    //   //yield put(postDataAPIFail(data));


    // }

  }

}
// function* watchReadTaskAction() {
//   yield take(taskTypes.READ_REDUX);
//   //============Block===============//
//   console.log('Watching read Task')
// }
// function* watchUpdateTaskAction() {
//   yield take(taskTypes.UPDATE_REDUX);
//   //============Block===============//
//   console.log('Watching update Task')
// }
// function* watchDeleteTaskAction() {
//   yield take(taskTypes.DELETE_REDUX);
//   //============Block===============//
//   console.log('Watching delete Task')
// }
function* rootSaga() {

  yield fork(watchCreateTaskAction);
  // yield fork(watchReadTaskAction);
  // yield fork(watchUpdateTaskAction);
  // yield fork(watchDeleteTaskAction);
}
export default rootSaga;

