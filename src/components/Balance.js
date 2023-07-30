import { FaCheck } from 'react-icons/fa';

const Balance = () => {
  return (
    <div className="p-3 w-50">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0 text-center">CASH BALANCE</p>
        <h4 className="m-0 mb-4">$ 199,258</h4>
      </div>
      <div className="p-3 mb-4 d-flex justify-content-around bg-light">
        <div>
          <p className="m-0 text-center"> REVENUE</p>
          <h5 className="m-1">$ 338,738</h5>
          <div
            className="progress mt-2 mb-4"
            role="progressbar"
            aria-label="Success striped example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-success"
              style={{ width: '50%' }}
            ></div>
          </div>
        </div>
        <div>
          <p className="m-0 text-center">EXPENSES</p>
          <h5 className="m-1">$ 115,569</h5>
          <div
            className="progress mt-2 mb-4"
            role="progressbar"
            aria-label="Success striped example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-danger"
              style={{ width: '25%' }}
            ></div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p className="m-0 text-center">Current Ratio</p>
        <div className="m-2 d-flex align-items-center">
          <span className="bg-success d-flex justify-content-center align-items-center rounded-circle">
            <FaCheck color="white" />
          </span>
          <h3 className="my-0 mx-2">2.07</h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
