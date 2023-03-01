import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
