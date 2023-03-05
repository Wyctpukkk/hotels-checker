import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import select from '../img/select.png';

export const Favorite = () => {
  const store = useSelector((state) => state);
  const arr = store.favor;
  const dispatch = useDispatch();

  function stateFavorite(boolean, obj) {
    if (boolean) {
      dispatch({ type: 'DEL_FAVOR', payload: obj });
    } else dispatch({ type: 'ADD_FAVOR', payload: obj });
  }

  return (
    <article className="favorite">
      <p className="favorite__title">Избранное</p>
      <div className="favorite__buttons">
        <button className="favorite__buttons_rating">
          Рейтинг
          <img className="favorite__buttons_up" src={select} alt="arrow" />
          <img className="favorite__buttons_down" src={select} alt="arrow" />
        </button>
        <button className="favorite__buttons_price">
          Цена
          <img className="favorite__buttons_up" src={select} alt="arrow" />
          <img className="favorite__buttons_down" src={select} alt="arrow" />
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
