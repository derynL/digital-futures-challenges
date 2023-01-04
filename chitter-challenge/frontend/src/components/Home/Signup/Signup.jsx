import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faUser,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import '../../css/signup.css';
import { addUser } from '../../../utils/peepAPICalls';
import AppError from '../../Static/AppError';

const Signup = () => {
  const [firstName, setfirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [userName, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const [error, setError] = useState(``);
  const [registered, setRegisterd] = useState(false);

  const nav = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const user = { name: { firstName, lastName }, email, password };
      if (firstName && lastName && email && userName && password) {
        const res = await addUser(user);
        if (res.user) {
          setUsername(res.user);
          setRegisterd(true);
        }
        if (res.error) {
          setError(res.error.data);
        }
        return;
      }
    }
  };

  useEffect(() => {
    if (registered) nav('/');
  }, [registered, nav]);

  return (
    <>
      <div className='container h-100'>
        <p className='text-center'>
          Already have an account?&nbsp;<Link to='/'>Login</Link>
        </p>
        <div className='d-flex justify-content-center'>
          <form onSubmit={signup}>
            <div>
              <div className='form-control border-0'>
                <FontAwesomeIcon icon={faUser} />
                <label htmlFor='firstname'>&nbsp;First Name</label>
                <input
                  className='form-control'
                  type='text'
                  id='firstname'
                  value={firstName}
                  onChange={(event) => setfirstName(event.target.value)}
                  required
                />

                <FontAwesomeIcon icon={faUser} />
                <label htmlFor='lastname'>&nbsp;Last Name</label>
                <input
                  className='form-control'
                  type='text'
                  id='lastname'
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />

                <FontAwesomeIcon icon={faUserTag} />
                <label htmlFor='userName'>&nbsp;Username</label>
                <input
                  className='form-control'
                  type='text'
                  id='userName'
                  value={userName}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />

                <FontAwesomeIcon icon={faEnvelope} />
                <label htmlFor='email'>&nbsp;Email</label>
                <input
                  className='form-control'
                  type='email'
                  id='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />

                <FontAwesomeIcon icon={faLock} />
                <label htmlFor='password'>&nbsp;Password</label>
                <input
                  className='form-control'
                  type='password'
                  id='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />

                <FontAwesomeIcon icon={faLock} />
                <label htmlFor='password'>&nbsp;Confirm Password</label>
                <input
                  className='form-control'
                  type='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />

                <button
                  className='btn btn-info mx-auto'
                  onClick={signup}
                  value='Signup'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {error.length > 0 && <AppError errors={error} />}
    </>
  );
};

export default Signup;
