import { all } from "redux-saga/effects";
import songSaga from "./songSaga";

export default function* rootSaga() {
  yield all([
    songSaga(),
  ]);
}
