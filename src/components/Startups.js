import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Startups = ({ startups }) => {
  const { isLoading } = useSelector((store) => store.startups);

  if (isLoading)
    return (
      <div className="m-5 d-flex justify-content-center">
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
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col" className="bg-transparent">
            #
          </th>
          <th scope="col" className="bg-transparent">
            Startup
          </th>
          <th scope="col" className="bg-transparent">
            Owner
          </th>
          <th scope="col" className="bg-transparent">
            Status
          </th>
          <th scope="col" className="bg-transparent">
            Description
          </th>
          <th scope="col" className="bg-transparent">
            Created
          </th>
        </tr>
      </thead>
      <tbody>
        {startups.map((startup, index) => (
          <tr key={startup._id}>
            <th className="bg-transparent" scope="row">
              {index + 1}
            </th>
            <td className="bg-transparent">{startup.title}</td>
            <td className="bg-transparent">{startup.owner || startup.user}</td>
            <td className="bg-transparent">
              {startup.status ? 'Active' : 'Inactive'}
            </td>
            <td className="bg-transparent">
              {startup.description.substr(0, 30)}...
            </td>
            <td className="bg-transparent">
              {formatDistanceToNow(new Date(startup.createdAt), {
                addSuffix: true,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Startups;
