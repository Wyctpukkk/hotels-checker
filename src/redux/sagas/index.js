import { apply, call, put, takeEvery, take, select } from 'redux-saga/effects';

export function* loadHotelsList({ payload }) {
  const { location, checkIn, checkOut } = payload;
  const request = yield call(
    fetch,
    `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
  );
  const data = yield apply(request, request.json);

  yield put({ type: 'LOAD_HOTELS_SUCCESS', payload: data });
}

export default function* rootSaga() {
  yield takeEvery('LOAD_HOTELS', loadHotelsList);
}
