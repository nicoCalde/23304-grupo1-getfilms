import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';

import HeroSlide from '../components/hero-slide/HeroSlide';

const Home = () => {
  return (
    <>
      <HeroSlide/>
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Películas: Tendencias</h2>
            <Link to='/movie'>
              <OutlineButton className='small'>Ver más</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;