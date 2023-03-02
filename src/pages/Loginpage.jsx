import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/hook/useAuth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    const password = form.password.value;
    const regexp = /[^a-z]/;
    password.length >= 8 &&
    !password.toLowerCase().match(regexp) &&
    user.includes('@')
      ? signin(user, () => navigate('/'))
      : alert('не правильный логин или пароль');
  };

  return (
    <>
      <div className="background">
        <div className="background__filter"></div>
      </div>
      <div className="login">
        <p className="login__title">Simple Hotel Check</p>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">
            Логин <input className="login__input" name="username"></input>
          </label>
          <label className="login__label">
            Пароль <input className="login__input" name="password"></input>
          </label>
          <button className="login__btn" type="submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
};
