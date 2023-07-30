import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStartups } from './features/startups/startupsSlice';
import Dashboard from './components/Dashboard';
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
        <Route path="/login" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
