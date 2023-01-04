import React from 'react';
import PropTypes from 'prop-types';
import './errorModal.css';

const ErrorModal = ({ handleClose, message }) => {
  const showHideClassName = message
    ? `modal display-block`
    : `modal display-none`;

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h3>Chitter</h3>
        <h6>The influential social network...</h6>
        <p>{message}</p>
        <button className='btn btn-info' onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

ErrorModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default ErrorModal;
