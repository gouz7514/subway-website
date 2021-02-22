import React from 'react'
import { Link } from 'react-router-dom';
// import {Button} from './Button';
import './css/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        영화 마니아, 피아니스트이자 풀스택을 정복하고자 하는 개발자
        </p>
        <p className="footer-subscription-text">
          김학재입니다
        </p>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">어케했Sub 2021 by KHJ</small>
          <div className="social-icons">
            <Link className="social-icon-link github" to={{pathname: "https://github.com/gouz7514/subway-website"}} target='_blank' aria-label="github">
              <i className="fab fa-github"></i>
            </Link>
            <Link className="social-icon-link instagram" to={{pathname: "https://www.instagram.com/haaaaaaa_kjae/"}} target='_blank' aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </Link>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
