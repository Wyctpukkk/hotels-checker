import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Loginpage';
import { Main } from './pages/Main';
import { RequireAuth } from './components/hoc/RequireAuth';
import { AuthProvider } from './components/hoc/AuthProvider';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
