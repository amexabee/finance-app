const Startups = ({ startups }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Startup</th>
          <th scope="col">Owner</th>
          <th scope="col">Status</th>
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
            <td>{startup.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Startups;
