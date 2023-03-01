import React from 'react';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();
  const { signout } = useAuth();

  return (
    <div>
      <p>Контент</p>
      <button onClick={() => signout(() => navigate('/login'))}>signout</button>
    </div>
  );
};
