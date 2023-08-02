import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStartups } from './features/startups/startupsSlice';
import Dashboard from './components/Dashboard';
import UpdateStartup from './components/UpdateStartup';
import CreateStartup from './components/CreateStartup';
import Authentication from './auth/auth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const {
    user: { username },
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStartups());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={username ? <Navigate to="/" /> : <Authentication />}
        />
        <Route path="/create" element={<CreateStartup />} />
        <Route path="/update" element={<UpdateStartup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
