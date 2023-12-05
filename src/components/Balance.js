import { FaCheck, FaWindowClose } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Balance = () => {
  const { startups } = useSelector((store) => store.startups);
  const {
    user: { _id },
  } = useSelector((store) => store.user);
  const startup = startups.filter((startup) => startup.owner === _id)[0];

  return (
    <div className="p-3 w-50">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0 text-center">CASH BALANCE</p>
        <h4 className="m-0 mb-4">{`$ ${
          startup ? startup.income - startup.spending : 0
        }`}</h4>
      </div>
      <div className="p-3 mb-4 d-flex justify-content-around bg-light">
        <div>
          <p className="m-0 text-center"> REVENUE</p>
          <h5 className="m-1">{`$ ${startup?.income || 0}`}</h5>
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
              style={{
                width: startup?.income
                  ? startup.income / (startup.spending + startup.income)
                  : 0,
              }}
            ></div>
          </div>
        </div>
        <div>
          <p className="m-0 text-center">EXPENSES</p>
          <h5 className="m-1">{`$ ${startup?.spending || 0}`}</h5>
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
              style={{
                width: startup?.spending
                  ? startup.spending / (startup.spending + startup.income)
                  : 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p className="m-0 text-center">Current Ratio</p>
        <div className="m-2 d-flex align-items-center">
          {startup ? (
            <span
              className={`bg-${
                startup.income > startup.spending ? 'success' : 'danger'
              } d-flex justify-content-center align-items-center rounded-circle`}
            >
              {startup.income > startup.spending ? (
                <FaCheck color="white" />
              ) : (
                <FiAlertCircle color="white" size={35} />
              )}
            </span>
          ) : (
            <FaWindowClose color="red" />
          )}
          <h3 className="my-0 mx-2">{`${
            startup?.income
              ? startup?.spending
                ? startup.income / startup.spending
                : 'NA'
              : 'NA'
          }`}</h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
