import lost from '../components/images/lost.png';
import './notFound.css';

const NotFound = () => {
  return (
    <>
      <div>
        <h3 style={{ textAlign: 'center' }}>Sorry... can't find that one</h3>
      </div>
      <div className='text-center'>
        <img className=' img-fluid lost' src={lost} alt='Not found' />
      </div>
    </>
  );
};

export default NotFound;
