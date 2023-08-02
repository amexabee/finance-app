import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Startups = ({ startups }) => {
  const { isLoading } = useSelector((store) => store.startups);

  if (isLoading)
    return (
      <div class="m-5 d-flex justify-content-center">
        <div className="loading"></div>
        <div className="loading"></div>
        <div className="loading"></div>
      </div>
    );

  if (!startups.length)
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="m-4">No Startup Found!</h1>
        <Link to="/create" className="m-4 p-0">
          <button className="btn btn-lg btn-block btn-outline-primary">
            Create One!
          </button>
        </Link>
      </div>
    );

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Startup</th>
          <th scope="col">Owner</th>
          <th scope="col">Status</th>
          <th scope="col">Description</th>
          <th scope="col">Created</th>
        </tr>
      </thead>
      <tbody>
        {startups.map((startup, index) => (
          <tr key={startup._id}>
            <th scope="row">{index + 1}</th>
            <td>{startup.title}</td>
            <td>{startup.owner || startup.user}</td>
            <td>{startup.status ? 'Active' : 'Inactive'}</td>
            <td>{startup.description.substr(0, 30)}...</td>
            <td>{startup.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Startups;
