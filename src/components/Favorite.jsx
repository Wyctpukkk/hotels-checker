import React from 'react';
import select from '../img/select.png';
import star from '../img/star.png';
import heartFill from '../img/heart.png';

export const Favorite = () => {
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
        <li className="favorite__item item">
          <div className="item__title">
            <p>Moscow Marriott Grand Hotel</p>
            <img src={heartFill} />
          </div>
          <div className="item__date">
            <span>28 June, 2020</span>
            <span>1 день</span>
          </div>
          <div className="item__price">
            <img src={star} />
            <p>
              Price: <span>23 924 ₽</span>
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
};
