import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export default function* countSaga(action) {
  try {
    console.log(action, 'action');
    yield put({ type: 'INCREASE', action });
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
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