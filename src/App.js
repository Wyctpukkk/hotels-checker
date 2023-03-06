import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Loginpage';
import { Main } from './pages/Main';
import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: 'CHECK_USER',
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={store.user ? <Main /> : <LoginPage />} />
        <Route path="*" element={store.user ? <Main /> : <LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
