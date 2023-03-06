import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import select from '../img/select.png';

export const Favorite = () => {
  const store = useSelector((state) => state);
  const arr = store.favor;
  const dispatch = useDispatch();
  const [type, setType] = useState(0);
  const [category, setCategory] = useState('');

  function stateFavorite(boolean, obj) {
    if (boolean) {
      dispatch({ type: 'DEL_FAVOR', payload: obj });
    } else dispatch({ type: 'ADD_FAVOR', payload: obj });
  }

  function sortFavorite(value) {
    value ? setCategory('stars') : setCategory('priceFrom');
    const obj = {
      key: category,
      type: type,
    };
    dispatch({ type: 'SORT_FAVOR', payload: obj });
    type ? setType(0) : setType(1);
  }

  return (
    <article className="favorite">
      <p className="favorite__title">Избранное</p>
      <div className="favorite__buttons">
        <button
          className={`favorite__buttons_rating ${
            category === 'stars' ? 'active' : ''
          }`}
          onClick={(e) =>
            sortFavorite(e.target.classList.value.includes('rating'))
          }
        >
          Рейтинг
          <img
            className={`favorite__buttons_up ${type === 1 ? 'active' : ''}`}
            src={select}
            alt="arrow"
          />
          <img
            className={`favorite__buttons_down ${type === 0 ? 'active' : ''}`}
            src={select}
            alt="arrow"
          />
        </button>
        <button
          className={`favorite__buttons_price ${
            category === 'priceFrom' ? 'active' : ''
          }`}
          onClick={(e) =>
            sortFavorite(e.target.classList.value.includes('rating'))
          }
        >
          Цена
          <img
            className={`favorite__buttons_up ${type === 1 ? 'active' : ''}`}
            src={select}
            alt="arrow"
          />
          <img
            className={`favorite__buttons_down ${type === 0 ? 'active' : ''}`}
            src={select}
            alt="arrow"
          />
        </button>
      </div>
      <ul className="favorite__list">
        {arr.map((obj, id) => {
          return (
            <li key={id} className="favorite__item item">
              <div className="item__title">
                <p>{obj.hotelName}</p>
                <button
                  className={`item__img ${obj.isActive}`}
                  onClick={(e) => {
                    stateFavorite(e.target.classList.contains('active'), obj);
                  }}
                ></button>
              </div>
              <div className="item__date">
                <span>{obj.checkIn}</span>
                <span>{obj.count} день</span>
              </div>
              <div className="item__price">
                <div className="item__stars ">
                  <div className={`star_${obj.stars}`}></div>
                </div>
                <p>
                  Price: <span>{obj.priceFrom}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
