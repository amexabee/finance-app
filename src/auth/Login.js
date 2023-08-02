import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, error } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser({ username, password, path: '/login' }));
    if (!isLoading && !error) navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input
          className="form-control"
          placeholder="Username"
          type="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-outline mb-4">
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-danger">Incorrect username or password</p>}
      <div className="d-flex justify-content-center">
        <button className="btn btn-success mb-4" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
