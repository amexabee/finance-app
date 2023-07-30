import { FaLock } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyStatus = () => {
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

  return (
    <div className="card w-50">
      <h1 className="text-center m-2">My Startup</h1>
      <div className="card-body">
        <h3 className="card-title">{startup.title}</h3>
        <h4 className="card-subtitle mb-2 text-muted">{username}</h4>
        <p className="card-text">{startup.description}</p>
        <div className="d-flex align-items-center">
          <h6>Status:</h6>
          <button
            className={`mx-2 btn btn-sm btn-outline-${
              startup.status ? 'success' : 'danger'
            }`}
          >
            {startup.status ? 'Active' : 'Inactive'}
          </button>
        </div>
        <div className="d-flex m-2 justify-content-center">
          <button className="mx-2 btn btn-sm btn-outline-primary">
            Update details
          </button>
          <button className="mx-2 btn btn-sm btn-outline-danger">
            Delete all details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyStatus;
