import errorMessages from './errorMessages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './appError.css';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ApplicationError = ({ errorCode }) => {
  const errorMessage =
    errorMessages[errorCode] ??
    `The application could not complete your request.`;

  return (
    <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='mainContainer container'>
          <h1 className='display-4'>An error has occurred...</h1>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <p className='lead'>{errorMessage}</p>
        </div>
      </div>
    </>
  );
};

export default ApplicationError;
