import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure new letter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="your email" className="footer-input"/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
              <Link to='sign-up'>How it works</Link>
              <Link>Testimonials</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
              <Link to='sign-up'>How it works</Link>
              <Link>Testimonials</Link>
          </div>
        </div>
      </div>
      <sectoin className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              어케했Sub <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">어케했Sub 2021 by KHJ</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to='/' target='_blank' aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>
        </div>
      </sectoin>
    </div>
  )
}

export default Footer
