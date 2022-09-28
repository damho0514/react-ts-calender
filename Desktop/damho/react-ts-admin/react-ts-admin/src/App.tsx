import './App.css';
import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/account/login" />} />

        <Route path="/account/*" element={<Login />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
