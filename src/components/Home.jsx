import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <Header/>
        <div className='container'>
        <Outlet/>
        </div>
          {/* Footer */}
        </div>
    );
};

export default Home;