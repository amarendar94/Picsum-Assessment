import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchPicsumImages() {
  const images = yield fetch('https://picsum.photos/v2/list')
        .then(response => response.json());    
  yield put({ type: "ADD_BULK_IMAGES", payload: images, });
}

function* actionWatcher() {
     yield takeLatest('GET_IMAGES', fetchPicsumImages)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}