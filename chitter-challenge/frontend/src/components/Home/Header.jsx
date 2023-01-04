import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/login.css';
import logo from '../images/chitterLogo.png';
import headerTitle from '../images/chitterHeader.png';

const Header = ({ user, setUser, loggedIn, setLoggedIn }) => {
  const logout = () => {
    console.log('Using the function');
    setLoggedIn(false);
  };

  return (
    <>
      <header>
        <nav className='navbar navbar-expand'>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <div className='collapse navbar-collapse' id='menuItems'>
            <div className='middle'>
              <img
                className='banner mx-auto d-none d-md-block'
                src={headerTitle}
                alt='chitter'
              />
            </div>
            <ul className='navbar-nav mr-auto'>
              {loggedIn ? (
                <>
                  <li className='nav-item'>
                    <Link to='/' onClick={logout} className='nav-link'>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                      Login
                    </Link>
                  </li>
                  <li></li>
                  <li className='nav-item'>
                    <Link to='/signup' className='nav-link'>
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
