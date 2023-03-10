import { apply, call, put, takeEvery, select } from 'redux-saga/effects';
// Воркеры

export function* loadHotelsList({ payload }) {
  // получили данные
  const { location, checkIn, checkOut, count } = payload;
  const state = yield select((store) => store);

  // сделали запрос
  const request = yield call(
    fetch,
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
  );
  const data = yield apply(request, request.json);

  // добавили в объекты ключи запроса для дальнейшего сравнения
  data.map((obj, _) => {
    obj.isActive = '';
    obj.checkIn = checkIn;
    obj.count = +count;
  });

  // проверка совпадения ответа с текущими избранными
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

  // Добавили в стейт
  yield put({ type: 'LOAD_HOTELS_SUCCESS', payload: data });
}

export function* addFavorite({ payload }) {
  // получили данные
  const state = yield select((store) => store);

  // пометили объект избранным среди массива отелей
  const activeHotels = state.hotels.map((obj, id) => {
    if (obj === payload) {
      return { ...obj, isActive: 'active' };
    }
    return obj;
  });

  // добавили объект в массив избранных
  const data = {
    ...payload,
    isActive: 'active',
  };

  yield put({ type: 'ADD_FAVOR_SUCCESS', payload: data });
  yield put({ type: 'LOAD_HOTELS_SUCCESS', payload: activeHotels });
}

export function* delFavorite({ payload }) {
  // получили данные
  const state = yield select((store) => store);
  const { checkIn, count, hotelId } = payload;

  // отфильтровали такой же объект в массиве избранных и убрали из отелей
  const data1 = state.favor.filter(
    (obj, _) =>
      obj.hotelId !== hotelId || obj.checkIn !== checkIn || obj.count !== count
  );
  // отфильтровали такой же объект в массиве отелей и убрали из избранных
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
  // получили данные
  const { key, type } = payload;
  const state = yield select((store) => store);

  // отсортировали
  const sorted = type
    ? state.favor.sort((fav1, fav2) => (fav1[key] > fav2[key] ? 1 : -1))
    : state.favor.sort((fav1, fav2) => (fav1[key] > fav2[key] ? -1 : 1));

  yield put({ type: 'SORT_FAVOR_SUCCESS', payload: sorted });
}

export function* setUser({ payload }) {
  // добавили юзера в storage
  yield localStorage.setItem('user', payload);
}

export function* checkUser() {
  // получили юзера из storage
  const user = yield localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null;
  yield put({ type: 'CHECK_USER_SUCCESS', payload: user });
}

export function* deleteUser() {
  // удалили юзера из storage
  yield localStorage.removeItem('user');
}

export default function* rootSaga() {
  // вотчеры
  yield takeEvery('LOAD_HOTELS', loadHotelsList);
  yield takeEvery('ADD_FAVOR', addFavorite);
  yield takeEvery('DEL_FAVOR', delFavorite);
  yield takeEvery('SORT_FAVOR', sortFavorite);
  yield takeEvery('SET_USER', setUser);
  yield takeEvery('CHECK_USER', checkUser);
  yield takeEvery('DEL_USER', deleteUser);
}
