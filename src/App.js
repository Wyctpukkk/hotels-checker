import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/pages/Loginpage';
import { Main } from './components/pages/Main';
import { RequireAuth } from './components/hoc/RequireAuth';
import { AuthProvider } from './components/hoc/AuthProvider';

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
