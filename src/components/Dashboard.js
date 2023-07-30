import Balance from './Balance';
import Startups from './Startups';
import MyStatus from './MyStatus';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../features/user/userSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { startups } = useSelector((store) => store.startups);
  const {
    user: { username },
  } = useSelector((store) => store.user);
  console.log(username);
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
              <button className="mx-2 btn btn-sm btn-outline-primary">
                Log In
              </button>
            </>
          )}
        </div>
      </div>
      <p>{today}</p>
      <h4 className="text-center">REGISTERED STARTUPS</h4>
      <Startups startups={startups} />
      <div className="d-flex">
        <MyStatus />
        <Balance />
      </div>
    </div>
  );
};

export default Dashboard;
