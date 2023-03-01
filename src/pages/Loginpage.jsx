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
      <div class="background">
        <div class="background__filter"></div>
      </div>
      <div class="login">
        <p class="login__title">Simple Hotel Check</p>
        <form class="login__form" onSubmit={handleSubmit}>
          <label class="login__label">
            Логин <input class="login__input" name="username"></input>
          </label>
          <label class="login__label">
            Пароль <input class="login__input" name="password"></input>
          </label>
          <button class="login__btn" type="submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
};
