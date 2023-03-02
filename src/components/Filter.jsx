import React from 'react';

export const Filter = () => {
  return (
    <article className="filter">
      <form className="filter__form">
        <label className="filter__label">
          Локация
          <input className="filter__input" type="text" name="location"></input>
        </label>
        <label className="filter__label">
          Дата заселения
          <input className="filter__input" type="date" name="date"></input>
        </label>
        <label className="filter__label">
          Количество дней
          <input className="filter__input" type="number" name="days"></input>
        </label>
        <button className="filter__btn" type="submit">
          Найти
        </button>
      </form>
    </article>
  );
};
