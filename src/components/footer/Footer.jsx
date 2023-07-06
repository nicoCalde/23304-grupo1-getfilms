import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/getfilms-logo.png';

const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to='/'>Home</Link>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Términos de servicio</Link>
            <Link to='/'>Nosotros</Link>
          </div>
          <div className="footer__content__menu">
            <Link to='/'>Vivo</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Política de privacidad</Link>
          </div>
          <div className="footer__content__menu">
            <Link to='/'>Tenés que ver</Link>
            <Link to='/'>Lanzamientos recientes</Link>
            <Link to='/'>Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;