import { useState, useEffect } from 'react';
import '../../css/peepBox.css';
import PeepModel from '../../../utils/peep.model.js';

const PeepBox = ({ submitPeep, user }) => {
  const [peepPost, setPeepPost] = useState(``);
  const [peepLengthError, setPeepLengthError] = useState(`length ok`);

  const handleSubmit = (event) => {
    event.preventDefault();
    const peepToSubmit = new PeepModel(
      peepPost,
      new Date().toISOString(),
      Object.keys(user).length > 0 ? user.userName : ''
    );
    submitPeep(peepToSubmit);
    setPeepPost('');
  };

  useEffect(() => {
    if (peepPost.length > 450)
      setPeepLengthError(`You have exceeded the maximum of 450 characters`);
    else setPeepLengthError(`length ok`);
  }, [peepPost]);

  return (
    <>
      <div className='d-flex justify-content-center'>
        <form>
          <div className='form-control border-0'>
            <textarea
              className='card'
              id='peepPost'
              name='peePost'
              placeholder="What's on your mind?"
              rows={5}
              onChange={(event) => setPeepPost(event.target.value)}
              value={peepPost}
            ></textarea>
            <div className='row'>
              {peepPost.length > 0 && (
                <p className={peepLengthError}>{`${peepPost.length}/450`}</p>
              )}
            </div>
            <br />
            <button
              type='submit'
              className='btn mx-auto btn-primary'
              value='Submit Peep'
              onClick={handleSubmit}
              disabled={peepPost.length === 0}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

// PeepBox.propTypes = {
//   getPeep: PropTypes.func.isRequired,
//   getUser: PropTypes.object.isRequired,
// };
export default PeepBox;
