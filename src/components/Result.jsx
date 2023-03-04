import React from 'react';
import { useSelector } from 'react-redux';
import homeImg from '../img/house.png';

export const Result = () => {
  const store = useSelector((state) => state);
  const array = store.hotels;

  return (
    <article className="result">
      <div className="result__title">
        <span>{`Отели ${store.location}`}</span>
        <span>{store.checkIn}</span>
      </div>
      <div className="result__slider"></div>
      <span className="result__favorite-info">
        Добавлено в Избранное: 3 отеля
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
                <button className="item__img"></button>
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
