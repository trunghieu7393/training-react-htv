import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as taskTypes from '../redux/type';
import { getDatabase, STATUS_CODE } from '../common/actionAPI';
import { postDataAPISuccess, postDataAPIFail, filterTaskSuccess } from '../redux/actions/api';
import { showLoading, hideLoading } from '../redux/actions/ui';
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
		console.log('chayj cais nay')
		yield take(taskTypes.CREATE_REDUX);
		console.log('chayj xong create redux')
		yield put(showLoading())
		//============Block===============//
		console.log('Watching create task');
		console.log('Call API getDatabase');
		///---- try catch API  cách 1---------//
		// var resp = {}
		// try {
		// 	resp = yield call(getDatabase);
		// 	yield delay(500);
		// 	yield put(hideLoading());
		// 	console.log('kết quả của response');
		// 	console.log('resp:', resp);
		// 	const { status, data, err } = resp;
		// 	if (status === STATUS_CODE.SUCCESS) {
		// 		//dispatch any else action
		// 		console.log('call API success')
		// 		yield put(postDataAPISuccess(data));


		// 	} else {
		// 		//call API fail
		// 		yield put(postDataAPIFail(data));


		// 	}
		// }
		// catch (err) {
		// 	yield delay(500);
		// 	console.log('err', err)
		// 	yield put(hideLoading())
		// }
		//-----------------End cách 1---------------//
		//-----------------cách 2-------------------//
		const resp = yield call(getDatabase);
		console.log('kết quả của response');
		console.log('resp:', resp);
		const { status, data, err } = resp;
		if (status === STATUS_CODE.SUCCESS) {
			//dispatch any else action
			console.log('call API success')
			yield put(postDataAPISuccess(data));


		} else {
			//call API fail
			yield put(postDataAPIFail(data));


		}
		yield delay(500);
		yield put(hideLoading())
		//-----------------End cách 2----------------//




	}

}
function* watchReadTaskAction() {
	yield take(taskTypes.READ_REDUX);
	//============Block===============//
	console.log('Watching read Task')
}
function* watchUpdateTaskAction() {
	yield take(taskTypes.UPDATE_REDUX);
	//============Block===============//
	console.log('Watching update Task')
}
function* watchDeleteTaskAction() {
	yield take(taskTypes.DELETE_REDUX);
	//============Block===============//
	console.log('Watching delete Task')
}
function* filterTaskSaga({payload}) {
	
		
	yield delay(500);
	console.log('filterTaskSaga',payload)
	const keyword = payload;
	yield put(showLoading())

	const resp = yield call(getDatabase);
		console.log('kết quả của response');
		console.log('resp:', resp);
		const { status, data, err } = resp;
		if (status === STATUS_CODE.SUCCESS) {
			//dispatch any else action
			console.log('call API success')
			yield put(postDataAPISuccess(data));


		} else {
			//call API fail
			yield put(postDataAPIFail(data));


		}
	const list = yield select(state => state.api.data)
	console.log('list from saga', list);
	const filteredTask = list.filter(data => data.nguoidanhgia.includes(keyword))
	console.log('keyword', keyword);
	console.log('filteredTask', filteredTask);
	yield put(filterTaskSuccess(filteredTask))
	yield delay(500);
		yield put(hideLoading())
}

function* rootSaga() {

	yield fork(watchCreateTaskAction);
	yield fork(watchReadTaskAction);
	yield fork(watchUpdateTaskAction);
	yield fork(watchDeleteTaskAction);
	yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga )
}
export default rootSaga;
