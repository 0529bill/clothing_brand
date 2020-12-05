import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuth } from '../ContextApi';

function Navs() {
  const { currentUser, logout, counts } = useAuth();

  return (
    <Navbar expand="lg" style={{ textDecoration: 'none !important' }}>
      <Link
        to="/clothing_brand/home"
        className="m-3"
        style={{
          fontFamily: 'Creepster, cursive',
          fontSize: '1.5rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        B&P
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ textDecoration: 'none' }}>
          <Link
            className="m-3"
            style={{
              fontFamily: 'Kanit, sans-serif',
              color: 'black',
              textDecoration: 'none',
            }}
            to="/clothing_brand/home"
          >
            Home
          </Link>

          <Link
            className="m-3"
            style={{
              fontFamily: 'Kanit, sans-serif',
              color: 'black',
              textDecoration: 'none',
            }}
            to="/clothing_brand/shop"
          >
            Shop
          </Link>

          <Link
            className="m-3"
            style={{
              fontFamily: 'Kanit, sans-serif',
              color: 'black',
              textDecoration: 'none',
            }}
            to="/clothing_brand/signIn"
          >
            {currentUser ? (
              <div onClick={() => logout()} style={{ color: 'red' }}>
                Sign Out
              </div>
            ) : (
              <div style={{ color: '#28a745' }}>Sign In</div>
            )}
          </Link>

          <Link
            className="m-2"
            style={{
              fontFamily: 'Kanit, sans-serif',
              color: 'black',
              textDecoration: 'none',
              position: 'relative',
            }}
            to="/clothing_brand/cart"
          >
            <p
              style={{
                position: 'absolute',
                color: 'white',
                left: '18px',
              }}
            >
              {counts ? counts : 0}
            </p>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navs;
