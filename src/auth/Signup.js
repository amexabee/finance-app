import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setUser } from '../features/user/userSlice';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      dispatch(setError("Username can't be left blank"));
      return;
    }

    if (password.length < 6) {
      dispatch(setError("Password can't be less than 6 characters!"));
      return;
    }

    if (password !== passwordConfirmation) {
      dispatch(setError("Passwords don't match!"));
      return;
    }

    dispatch(setUser({ username, password, path: '/' }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input
          className="form-control"
          placeholder="Username"
          type="text"
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
      <div className="form-outline mb-4">
        <input
          className="form-control"
          placeholder="Confirm password"
          type="password"
          id="password-confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <div className="d-flex justify-content-center">
        <button className="btn btn-success mb-4" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
