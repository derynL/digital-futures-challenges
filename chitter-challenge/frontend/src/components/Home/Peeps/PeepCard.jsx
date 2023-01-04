import '../../css/peep.css';
import PropTypes from 'prop-types';

const PeepCard = ({ peep }) => {
  return (
    <>
      <div className='peepCard mx-auto'>
        <div className='card-subtitle mb-2 text-muted'>
          <p>Posted on {new Date(peep.date).toLocaleString('en-GB')}</p>
        </div>
        <div className='card-text'>
          <p dangerouslySetInnerHTML={{ __html: peep.peepMsg }} />
        </div>
        <div className='card-subtitle mb-2 text-muted'>
          {peep.userName.length > 0 && (
            <h6
              className='font-weight-bold mb-1 d-inline-block'
              dangerouslySetInnerHTML={{ __html: `Posted by ${peep.userName}` }}
            />
          )}
        </div>
      </div>
    </>
  );
};

PeepCard.propTypes = {
  peepPost: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export default PeepCard;
