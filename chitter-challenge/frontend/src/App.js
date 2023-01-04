import './App.css';
import Header from './components/Home/Header';
import PeepFeed from './components/Home/Peeps/PeepFeed';
import Login from './components/Home/Login/Login';
import PeepBox from './components/Home/Peeps/PeepBox';
import ErrorModal from './utils/ErrorModal';
import NotFound from './utils/NotFound';
import { useEffect, useState } from 'react';
import Signup from './components/Home/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import { getPeeps } from './utils/peepAPICalls';
import axios from 'axios';

function App() {
  const [peepData, setPeeps] = useState([]);
  const [error, setError] = useState({ type: ``, message: `` });
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const getPeepsHandler = async () => {
    const res = await getPeeps();
    if (res?.error) {
      setError([{ msg: res.error.message }]);
    } else {
      setError(``);
    }
    const peepResults = res?.peeps ? res.peeps : [];
    setPeeps(peepResults);
  };

  useEffect(() => {
    getPeepsHandler();
  }, []);

  const submitPeep = async (peep) => {
    try {
      await axios.post(`${'http://localhost:4000'}/post`, peep);
    } catch (e) {
      setError(e);
    } finally {
      await getPeepsHandler();
    }
  };

  return (
    <>
      {error.type && (
        <ErrorModal
          handleClose={() => setError({ type: ``, message: `` })}
          message={error.message}
        />
      )}
      <div className='container-fluid'>
        <div className='container'>
          <Header
            user={user}
            setUser={setUser}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        </div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <>
                  {loggedIn ? (
                    <PeepBox submitPeep={submitPeep} user={user} />
                  ) : (
                    <Login
                      user={user}
                      setUser={setUser}
                      loggedIn={loggedIn}
                      setLoggedIn={setLoggedIn}
                    />
                  )}
                </>
                <>
                  {peepData?.length === 0 ? (
                    <NotFound />
                  ) : (
                    <PeepFeed peepData={peepData} />
                  )}
                </>
              </>
            }
          />
          <Route path='/signup' element={<Signup setUser={setUser} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
