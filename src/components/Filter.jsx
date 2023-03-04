import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultChekIn, dayCount } from './timeFunc/timeFunc';

export const Filter = () => {
  const [location, setLocation] = useState('Moscow');
  const [checkIn, setCheckIn] = useState(defaultChekIn());
  const [count, setCount] = useState(1);
  const [checkOut, setCheckOut] = useState(dayCount(1, checkIn));
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    store.location = location;
    store.checkIn = checkIn;
    store.checkOut = checkOut;
    store.count = count;
    dispatch({ type: 'LOAD_HOTELS', payload: store });
  }, []);

  function refreshSearch() {
    store.location = location;
    store.checkIn = checkIn;
    store.checkOut = checkOut;
    store.count = count;
    dispatch({ type: 'LOAD_HOTELS', payload: store });
  }

  return (
    <article className="filter">
      <div className="filter__form">
        <label className="filter__label">
          Локация
          <input
            className="filter__input"
            type="text"
            defaultValue={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <label className="filter__label">
          Дата заселения
          <input
            className="filter__input"
            type="date"
            defaultValue={String(checkIn)}
            onChange={(e) => {
              setCheckIn(e.target.value);
              setCheckOut(dayCount(count, e.target.value));
            }}
          ></input>
        </label>
        <label className="filter__label">
          Количество дней
          <input
            className="filter__input"
            defaultValue={count}
            type="number"
            name="days"
            onChange={(e) => {
              setCount(e.target.value);
              setCheckOut(dayCount(+e.target.value, checkIn));
            }}
          ></input>
        </label>
        <button className="filter__btn" onClick={() => refreshSearch()}>
          Найти
        </button>
      </div>
    </article>
  );
};
