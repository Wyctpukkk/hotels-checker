import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [nameWrong, setNameWrong] = useState('');
  const [pass, setPass] = useState('');
  const [passWrong, setPassWrong] = useState('');

  useEffect(() => {
    // регулярные выражения
    const regexpPass = /^[а-я]/;
    const regexpName =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // валидация name
    name.toLowerCase().match(regexpName) || name === ''
      ? setNameWrong('')
      : setNameWrong('Не корректный @email');

    // валидация пасс
    pass.length < 8 && pass !== ''
      ? setPassWrong('Менее 8 символов')
      : pass.match(regexpPass)
      ? setPassWrong('Содержит кириллицу')
      : setPassWrong('');
  }, [pass, name]);

  function sendUser() {
    // валидация name и pass + добавление USER в Storage
    !nameWrong && !passWrong && pass !== '' && name !== ''
      ? dispatch({
          type: 'SET_USER',
          payload: name,
        })
      : console.log('x');
  }

  return (
    <>
      <div className="background">
        <div className="background__filter"></div>
      </div>
      <div className="login">
        <p className="login__title">Simple Hotel Check</p>
        <div className="login__form">
          <label className="login__label">
            Логин
            <input
              className="login__input"
              onChange={(e) => setName(e.target.value)}
            />
            <span>{nameWrong}</span>
          </label>
          <label className="login__label">
            Пароль
            <input
              className="login__input"
              onChange={(e) => setPass(e.target.value)}
            />
            <span>{passWrong}</span>
          </label>
          <button className="login__btn" onClick={() => sendUser()}>
            Войти
          </button>
        </div>
      </div>
    </>
  );
};
