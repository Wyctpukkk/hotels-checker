import React, { useEffect, useState } from 'react';
import { useAuth } from '../components/hook/useAuth';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../components/Filter';
import { Favorite } from '../components/Favorite';
import { Result } from '../components/Result';
import exit from '../img/exit.png';

export const Main = () => {
  const navigate = useNavigate();
  const { signout } = useAuth();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function getHotels() {
      let getHotelList = await fetch(
        `http://engine.hotellook.com/api/v2/cache.json?location=${'Moscow'}&currency=rub&checkIn=${'2023-03-10'}&checkOut=${'2023-03-12'}&limit=10`
      );
      let hotelList = await getHotelList.json();
      setHotels(hotelList);
    }
    getHotels();
  }, []);

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
        <Result hotels={hotels} />
      </section>
    </>
  );
};
