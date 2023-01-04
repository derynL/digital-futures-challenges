import PeepBox from './Peeps/PeepBox';
import authService from '../../services/auth.service';

const Welcome = () => {
  const currentUser = authService.getCurrentUser();
  return (
    <>
      <div className='container'>
        {!currentUser && <p>Not logged in</p>}
        {currentUser && (
          <>
            <h3>
              <strong>Welcome back, {currentUser.username}</strong>
            </h3>
            <div className='card mx-auto'>
              <PeepBox />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Welcome;
