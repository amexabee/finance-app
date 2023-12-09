import { FaLock } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStartup } from '../features/startups/startupsSlice';

const MyStatus = () => {
  const dispatch = useDispatch();
  const { startups } = useSelector((store) => store.startups);
  const {
    user: { username },
  } = useSelector((store) => store.user);
  const startup = startups.find((startup) => startup.owner === username);

  if (!username)
    return (
      <div className="card w-50 d-flex flex-column align-items-center justify-content-center">
        <h3 className="m-4">Login to get your details</h3>
        <FaLock size={50} color="gray" />

        <Link to="/login" className="m-4 p-0">
          <button className="btn btn-lg btn-block btn-outline-primary">
            Log In
          </button>
        </Link>
      </div>
    );

  if (!startup)
    return (
      <div className="card w-50 bg-ccc">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="m-4">You don't have a startup !</h1>
          <Link to="/create" className="m-4 p-0">
            <button className="btn btn-lg btn-block btn-outline-primary">
              Create One!
            </button>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="card w-50 bg-ccc">
      <h1 className="text-center m-2">My Startup</h1>
      <div className="card-body">
        <h3 className="card-title">{startup.title}</h3>
        <h4 className="card-subtitle mb-2 text-muted">by {username}</h4>
        <p className="card-text">{startup.description}</p>
        <div className="d-flex align-items-center">
          <h6 className="m-0">Status:</h6>
          <span
            className={`my-0 mx-2 badge bg-${
              startup.status ? 'success' : 'danger'
            }`}
          >
            {startup.status ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="d-flex m-2 justify-content-center">
          <Link to="/" className="m-4 p-0">
            <button className="mx-2 btn btn-block btn-outline-primary">
              Update details
            </button>
          </Link>
          <Link to="/" className="m-4 p-0">
            <button
              onClick={() => dispatch(deleteStartup({ _id: startup._id }))}
              className="mx-2 btn btn-block btn-outline-danger"
            >
              Delete all details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyStatus;
