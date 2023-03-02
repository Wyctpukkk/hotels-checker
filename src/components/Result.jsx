import React from 'react';
import heartEmpty from '../img/heart-empty.png';
import homeImg from '../img/house.png';
import starFill from '../img/star-fill.png';

export const Result = (obj) => {
  console.log(obj.hotels);
  return (
    <article className="result">
      <div className="result__title">
        <span>Отели Москва</span>
        <span>7 июля 2020</span>
      </div>
      <div className="result__slider"></div>
      <span className="result__favorite-info">
        Добавлено в Избранное: 3 отеля
      </span>
      <ul className="favorite__list">
        <li className="favorite__item item">
          <div className="item__home">
            <img src={homeImg} />
          </div>
          <div className="item__title">
            <p>Moscow Marriott Grand Hotel</p>
            <img src={heartEmpty} />
          </div>
          <div className="item__date">
            <span>28 June, 2020</span>
            <span>1 день</span>
          </div>
          <div className="item__price">
            <img src={starFill} />
            <p>
              Price: <span>23 924 ₽</span>
            </p>
          </div>
        </li>
        <li className="favorite__item item">
          <div className="item__home">
            <img src={homeImg} />
          </div>
          <div className="item__title">
            <p>Moscow Marriott Grand Hotel</p>
            <img src={heartEmpty} />
          </div>
          <div className="item__date">
            <span>28 June, 2020</span>
            <span>1 день</span>
          </div>
          <div className="item__price">
            <img src={starFill} />
            <p>
              Price: <span>23 924 ₽</span>
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
};
