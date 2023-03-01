import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

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
    <div>
      <p>Sign Up</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input name="username"></input>
        </label>
        <label>
          Password: <input name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
