import { useState } from 'react';
import SignInForm from './Login';
import SignUpForm from './Signup';
import { useDispatch } from 'react-redux';
import { setError } from '../features/user/userSlice';

const Authentication = () => {
  const [register, setRegister] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    const reg = !register;
    setRegister(reg);
    dispatch(setError(null));
  };

  return (
    <div className="container">
      <h3 className="m-4">Join our community.</h3>
      <div className="d-flex flex-column">
        {register ? (
          <>
            <SignUpForm />
            <p className="mt-4 align-self-center">Already Have an Account?</p>
          </>
        ) : (
          <>
            <SignInForm />
            <p className="mt-4 align-self-center">
              Don&apos;t Have Account Yet?
            </p>
          </>
        )}

        <button
          className="btn btn-success align-self-center"
          type="button"
          onClick={handleClick}
        >
          {register ? 'Log In' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default Authentication;
