import { all, takeLatest } from "redux-saga/effects";
import { loadFrase } from "../pages/cats/CatsSaga";

export default function* rootSaga() {
  return yield all([takeLatest("carregarFrase", loadFrase)]);
}
