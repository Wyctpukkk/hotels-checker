import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import homeImg from '../img/house.png';
import { Slider } from './Slider';

export const Result = () => {
  const store = useSelector((state) => state);
  const array = store.hotels;
  const slider = store.slider;
  const dispatch = useDispatch();

  function stateFavorite(boolean, obj) {
    if (boolean) {
      dispatch({ type: 'DEL_FAVOR', payload: obj });
    } else dispatch({ type: 'ADD_FAVOR', payload: obj });
  }

  return (
    <article className="result">
      <div className="result__title">
        <span>{`Отели ${store.location}`}</span>
        <span>{store.checkIn}</span>
      </div>
      <Slider slider={slider} />
      <span className="result__favorite-info">
        Добавлено в Избранное: {store.favor.length} отеля
      </span>
      <ul className="favorite__list">
        {array.map((obj, id) => {
          return (
            <li key={id} className="favorite__item item">
              <div className="item__home">
                <img src={homeImg} alt="home img" />
              </div>
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
                <span>{store.checkIn}</span>
                <span>{store.count} день</span>
              </div>
              <div className="item__price">
                <div className="item__stars ">
                  <div className={`star_${obj.stars}`}></div>
                </div>
                <p>
                  Price: <span>{obj.priceFrom} ₽</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
