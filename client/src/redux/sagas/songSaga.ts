import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  fetchStatsStart,
  fetchStatsSuccess,
  fetchStatsFailure, } from "../slices/songSlice";
import { AxiosResponse } from "axios"; 


function* fetchSongsSaga(): Generator<any, void, AxiosResponse> {
  try {
 
    const response: AxiosResponse = yield call(axios.get, "http://localhost:5000/api/songs");
    
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure());
  }
}
function* fetchStatsSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, "http://localhost:5000/api/songs/stats");
    yield put(fetchStatsSuccess(response.data));
  } catch (error) {
    yield put(fetchStatsFailure());
  }
}

function* songSaga(): Generator<any, void, unknown> {
  yield takeLatest(fetchSongsStart.type, fetchSongsSaga);
  yield takeLatest(fetchStatsStart.type, fetchStatsSaga);
}

export default songSaga;

