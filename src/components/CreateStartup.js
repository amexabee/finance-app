import { useDispatch, useSelector } from 'react-redux';
import { createStartup, setError } from '../features/startups/startupsSlice';
import { useState } from 'react';

const CreateStartup = () => {
  const {
    user: { _id: userID },
  } = useSelector((store) => store.user);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [income, setIncome] = useState(0);
  const [spending, setSpending] = useState(0);
  const { error } = useSelector((store) => store.startups);
  const dispatch = useDispatch();

  const create = (e) => {
    e.preventDefault();

    if (income < 0 || spending < 0) {
      dispatch(setError("You can't enter negative value"));
      return;
    }

    dispatch(createStartup({ userID, title, description, income, spending }));
  };

  return (
    <main className="container mt-4">
      <form onSubmit={create}>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            placeholder="Startup Title"
            type="text"
            id="username"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            placeholder="Description"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            placeholder="Revenue"
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            className="form-control"
            placeholder="Spending"
            type="number"
            id="spending"
            value={spending}
            onChange={(e) => setSpending(e.target.value)}
          />
        </div>
        {error && <p className="text-danger">All fields are required.</p>}
        <div className="d-flex justify-content-center">
          <button className="btn btn-success mb-4" type="submit">
            Create
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateStartup;
