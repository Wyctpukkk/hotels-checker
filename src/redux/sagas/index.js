import { apply, call, put, takeEvery, select } from 'redux-saga/effects';

export function* loadHotelsList({ payload }) {
  const { location, checkIn, checkOut, count } = payload;
  const state = yield select((store) => store);

  const request = yield call(
    fetch,
    `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
  );
  const data = yield apply(request, request.json);

  data.map((obj, _) => {
    obj.isActive = '';
    obj.checkIn = checkIn;
    obj.count = +count;
  });

  if (state.favor.length) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < state.favor.length; j++) {
        if (
          data[i].hotelId === state.favor[j].hotelId &&
          data[i].count === state.favor[j].count &&
          data[i].checkIn === state.favor[j].checkIn
        ) {
          data[i].isActive = state.favor[j].isActive;
          break;
        }
      }
    }
  }
  yield put({ type: 'LOAD_HOTELS_SUCCESS', payload: data });
}

export function* addFavorite({ payload }) {
  const state = yield select((store) => store);

  const activeHotels = state.hotels.map((obj, id) => {
    if (obj === payload) {
      return { ...obj, isActive: 'active' };
    }
    return obj;
  });

  const data = {
    ...payload,
    isActive: 'active',
  };

  yield put({ type: 'ADD_FAVOR_SUCCESS', payload: data });
  yield put({ type: 'LOAD_HOTELS_SUCCESS', payload: activeHotels });
}

export function* delFavorite({ payload }) {
  const state = yield select((store) => store);
  const { checkIn, count, hotelId } = payload;

  const data1 = state.favor.filter(
    (obj, _) =>
      obj.hotelId !== hotelId || obj.checkIn !== checkIn || obj.count !== count
  );
  const data2 = state.hotels.map((obj, id) => {
    if (
      obj.hotelId === hotelId &&
      obj.checkIn === checkIn &&
      obj.count === count
    ) {
      return { ...obj, isActive: '' };
    }
    return obj;
  });

  yield put({ type: 'DEL_FAVOR_SUCCESS', payload: data1 });
  yield put({ type: 'LOAD_HOTELS_SUCCESS', payload: data2 });
}

export function* sortFavorite({ payload }) {
  const { key, type } = payload;
  const state = yield select((store) => store);
  const sorted = type
    ? state.favor.sort((fav1, fav2) => (fav1[key] > fav2[key] ? 1 : -1))
    : state.favor.sort((fav1, fav2) => (fav1[key] > fav2[key] ? -1 : 1));

  yield put({ type: 'SORT_FAVOR_SUCCESS', payload: sorted });
}

export default function* rootSaga() {
  yield takeEvery('SORT_FAVOR', sortFavorite);
  yield takeEvery('DEL_FAVOR', delFavorite);
  yield takeEvery('ADD_FAVOR', addFavorite);
  yield takeEvery('LOAD_HOTELS', loadHotelsList);
}
