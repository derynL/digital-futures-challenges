import PropTypes from 'prop-types';

const PeepBody = ({ peepMsg }) => {
  return (
    <>
      <div className='card-body'>
        <p className='card-text'>{peepMsg}</p>
      </div>
    </>
  );
};

export default PeepBody;

PeepBody.propTypes = {
  peepMsg: PropTypes.string.isRequired,
};
