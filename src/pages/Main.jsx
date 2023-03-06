import React from 'react';
import { Filter } from '../components/Filter';
import { Favorite } from '../components/Favorite';
import { Result } from '../components/Result';
import exit from '../img/exit.png';
import { useDispatch } from 'react-redux';

export const Main = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="logout">
        <p className="logout__title">Simple Hotel Check</p>
        <button
          className="logout__btn"
          onClick={() =>
            dispatch({
              type: 'DEL_USER',
            })
          }
        >
          Выйти <img src={exit} alt="exit" />
        </button>
      </div>
      <section className="columns">
        <aside className="aside">
          <Filter />
          <Favorite />
        </aside>
        <Result />
      </section>
    </>
  );
};
