import {fork, take, call} from 'redux-saga/effects';
import * as taskTypes from '../redux/type';
function* watchCreateTaskAction(){
    yield take(taskTypes.CREATE_REDUX);
    //============Block===============//
    console.log('Watching create task');
    // const resp = yield call();
    // //============Block cho đến khi call xong===============// 
    // console.log('resp:',resp);
}
function* watchReadTaskAction(){
    yield take(taskTypes.READ_REDUX);
    //============Block===============//
    console.log('Watching read Task')
}
function* watchUpdateTaskAction(){
    yield take(taskTypes.UPDATE_REDUX);
    //============Block===============//
    console.log('Watching update Task')
}
function* watchDeleteTaskAction(){
    yield take(taskTypes.DELETE_REDUX);
    //============Block===============//
    console.log('Watching delete Task')
}
function* rootSaga() {
    
    yield fork(watchCreateTaskAction);
    yield fork(watchReadTaskAction);
    yield fork(watchUpdateTaskAction);
    yield fork(watchDeleteTaskAction);
    
}
export default rootSaga;