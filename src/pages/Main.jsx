import React from 'react';
import { useAuth } from '../components/hook/useAuth';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../components/Filter';
import { Favorite } from '../components/Favorite';
import { Result } from '../components/Result';
import exit from '../img/exit.png';

export const Main = () => {
  const navigate = useNavigate();
  const { signout } = useAuth();

  return (
    <>
      <div className="logout">
        <p className="logout__title">Simple Hotel Check</p>
        <button
          className="logout__btn"
          onClick={() => signout(() => navigate('/login'))}
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
