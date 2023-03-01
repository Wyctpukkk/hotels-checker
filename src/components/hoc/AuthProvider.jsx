import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('user') ? localStorage.getItem('user') : null
  );

  const signin = (newUser, cb) => {
    localStorage.setItem('user', newUser);
    setUser(newUser);
    cb();
  };

  const signout = (cb) => {
    localStorage.removeItem('user');
    setUser(null);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
