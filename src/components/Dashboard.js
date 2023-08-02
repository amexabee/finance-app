import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Balance from './Balance';
import Startups from './Startups';
import MyStatus from './MyStatus';
import { logOut } from '../features/user/userSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { startups } = useSelector((store) => store.startups);
  const {
    user: { username },
  } = useSelector((store) => store.user);
  const date = new Date();
  const today = new Intl.DateTimeFormat('en-us', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);

  return (
    <div className="container">
      <div className="mt-3 d-flex align-items-center justify-content-between">
        <h3>FINANCIAL DASHBOARD | last year</h3>
        <div className="d-flex">
          {username && (
            <>
              <h5>Welcome, {username} </h5>
              <button
                className="mx-2 btn btn-sm btn-outline-danger"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Sign Out
              </button>
            </>
          )}
          {!username && (
            <>
              <h5>Welcome</h5>
              <Link to="/login" className="mx-2 p-0">
                <button className="btn btn-sm btn-block btn-outline-primary">
                  Log In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <p>{today}</p>
      <h4 className="text-center">REGISTERED STARTUPS</h4>
      <Startups startups={startups} />
      {startups[0] && (
        <div className="d-flex">
          <MyStatus />
          <Balance />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
