import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import ShopComponents from './ShopComponent';

import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuth } from '../ContextApi';

function ShopLayout() {
  const [showScroll, setShowScroll] = useState(false);
  const { counts } = useAuth();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  });
  const handleScroll = () => {
    if (!showScroll && window.pageYOffset > 450) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 450) {
      setShowScroll(false);
    }
  };

  return (
    <>
      <Container>
        <p
          className="text-center"
          style={{ fontFamily: 'Kanit, sans-serif', fontSize: '1.6rem' }}
        >
          Shop
        </p>
        <p className="text-center">This is the store page</p>
        <ShopComponents />
        <Link
          className="shopLayout__scrollCart m-2"
          style={{
            fontFamily: 'Kanit, sans-serif',

            textDecoration: 'none',

            width: '40px',
            height: '40px',
            position: 'fixed',
            right: '50px',
            bottom: '100px',
            display: showScroll ? null : 'none',
            fontFamily: 'Kanit, sans-serif',
          }}
          to="/clothing_brand/cart"
        >
          <p
            style={{
              position: 'absolute',

              left: '18px',
            }}
            className="shopLayout__scrollCart--text"
          >
            {counts ? counts : 0}
          </p>
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="2x"
            className="fontawesome__shoppingCart"
          />
        </Link>
      </Container>
    </>
  );
}

export default ShopLayout;
