import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';


export function* fetchSaga(action) {
  try {
    yield put({ type: 'GET_LOADING' });
    const info = yield call(axios.get, action.params.url);
    yield put({ type: 'GET_INFO', list: info.data.list });
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// wacther saga
function* watchSagas() {
  yield takeLatest('FETCH_SAGA', fetchSaga);
}

export default function* rootSaga() {
  yield watchSagas();
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被发起时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
// function* mySaga() {
//   yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  也可以使用 takeLatest

  不允许并发，发起一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
// function* mySaga() {
//   yield* takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }