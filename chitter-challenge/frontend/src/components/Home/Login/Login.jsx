import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../utils/peepAPICalls';
import '../../css/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import AppError from '../../Static/AppError';

const Login = ({ user, setUser, loggedIn, setLoggedIn }) => {
  const [password, setPassword] = useState(``);
  const [email, setEmail] = useState(``);
  const [error, setError] = useState([]);
  const nav = useNavigate();

  const doLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    if (email && password) {
      const res = await login(user);
      if (res.user) {
        setUser(res.user);
        setLoggedIn(true);
      }
      if (res.error) {
        setError(res.error.data);
      }
      return;
    }
    alert(`Invalid data`);
  };

  useEffect(() => {
    if (loggedIn) nav('/');
  }, [loggedIn, nav]);

  const loginApproved = () => {
    return email.length && password.length;
  };

  return (
    <>
      <div className='formDivDC container h-100'>
        <h3 className='text-center'>Sign in to Chitter</h3>
        <div className='d-flex justify-content-center'>
          <form onSubmit={doLogin}>
            <div className='form-group'>
              <FontAwesomeIcon className='fontAwesomeIcon' icon={faEnvelope} />
              <label htmlFor='sign-in-email'>Email address</label>
              <input
                type='email'
                className='inputDivDC'
                aria-describedby='emailHelp'
                id='sign-in-email'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Your email'
              />
              <br />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <br />
            <div className='form-group'>
              <FontAwesomeIcon className='fontAwesomeIcon' icon={faLock} />
              <label htmlFor='sign-in-password'>Password</label>
              <input
                type='password'
                className='inputDivDC'
                id='sign-in-password'
                name='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder='Your password'
              />
            </div>
            <br />
            <div className='form-group'>
              <button
                className='btn btn-info'
                type='submit'
                disabled={!loginApproved}
                onClick={doLogin}
              >
                Submit
              </button>
            </div>
            <small className='form-text text-muted'>
              <Link to='/signup'>No account? Register now!</Link>
            </small>
          </form>
        </div>
      </div>
      {error.length > 0 && <AppError errors={error} />}
    </>
  );
};

export default Login;
