import Header from './Header';
import PeepFeed from './Peeps/PeepFeed';
import '../css/home.css';
import { useEffect, useState } from 'react';

const Home = () => {
  const [peepData, setPeepData] = useState([]);

  return (
    <div className='container-fluid'>
      <Header />
      <PeepFeed peepData={peepData} />
    </div>
  );
};

export default Home;
