import React, { useState, useEffect } from 'react';

import {
  faLeaf,
  faTrophy,
  faDumbbell,
  faAppleAlt,
  faBalanceScale,
  faGlobe,
  faGhost,
  faAtom,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button } from 'react-bootstrap';
import skate from '../img/skating.jpg';
import skateboard from '../img/skateboard.jpg';
import black from '../img/black.jpg';

import { Link } from 'react-router-dom';
import './FrontLayout.css';

function FrontLayout() {
  const [showScroll, setShowScroll] = useState(false);

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
    <div style={{ scrollBehavior: 'smooth' }}>
      <Container style={{ padding: '0 0' }} className="mt-3" id="home">
        <Col style={{ padding: '0 0' }}>
          <img
            src={skate}
            alt="model"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
        </Col>
        <Col className="FrontLayout__Title align-self-center mt-3 pb-3 ">
          <div className="text-center pt-4">
            <span
              style={{ fontSize: '1.7rem', fontFamily: 'Creepster, cursive' }}
            >
              Bywater & Paige
            </span>
          </div>
          <p
            className="text-center mt-3"
            style={{
              fontFamily: 'Permanent Marker , cursive',
              fontSize: '1.3rem',
            }}
          >
            Dedicated to bring the best skateboards to the world!
          </p>
        </Col>
      </Container>
      <Container className="mt-3">
        <Row
          style={{ padding: '0', position: 'relative' }}
          className="FrontLayout__shop"
        >
          <img
            src={skateboard}
            style={{
              width: '100%',
              objectFit: 'cover',
              maxHeight: '500px',
            }}
            className="FrontLayout__shop--img"
          />
          <div className="FrontLayout__shop--text">
            <p
              style={{
                fontFamily: 'Kanit, sans-serif',
                fontSize: '2rem',
                color: 'white',
              }}
            >
              New collection
            </p>
            <Link to="/clothing_brand/shop">
              <Button
                variant="light"
                style={{ boxShadow: 'none', fontFamily: 'Kanit, sans-serif' }}
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </Row>

        <Row
          id="about"
          className="FrontLayout__about mt-4 pb-4 align-items-center"
        >
          <Col xs={12} md={4} className="text-center mt-5">
            <FontAwesomeIcon icon={faLeaf} size="lg" />
            <p
              className="mt-1"
              style={{ fontSize: '1.3rem', fontFamily: 'Kanit, sans-serif' }}
            >
              Eco friendly
            </p>
            <p className="mt-2" style={{ fontFamily: 'Kanit, sans-serif' }}>
              " We adopts and promotes sustainable business practices designed
              to reduce our local, regional, national and global environmental
              impact "
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center mt-5">
            <FontAwesomeIcon icon={faTrophy} size="lg" />
            <p
              className="mt-2"
              style={{ fontSize: '1.3rem', fontFamily: 'Kanit, sans-serif' }}
            >
              Best quality
            </p>
            <p className="mt-2" style={{ fontFamily: 'Kanit, sans-serif' }}>
              " We want to ensure that you experience at B&P is always premimum.
              At B&P, we make it our priority to help your skate experiene to
              run smoothly however we can"
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center mt-5">
            <FontAwesomeIcon icon={faDumbbell} size="lg" />
            <p
              className="mt-2"
              style={{ fontSize: '1.3rem', fontFamily: 'Kanit, sans-serif' }}
            >
              Excellent Durability
            </p>
            <p className="mt-2" style={{ fontFamily: 'Kanit, sans-serif' }}>
              " Our skateboards use the best Hinoki wood you can find in the
              market. We promises to deliever the best skateboard you will ever
              see in the market.""
            </p>
          </Col>
        </Row>
        <div className="text-center" style={{ minHeight: '300px' }}>
          <p
            className="mt-5"
            style={{ margin: '0 0', color: 'rgb(138 134 134)' }}
          >
            our clients
          </p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Kanit, sans-serif' }}>
            B&P has been honored to partner up with these companies
          </p>
          <Row className="mt-5">
            <Col>
              <FontAwesomeIcon icon={faAppleAlt} size="lg" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faAtom} size="lg" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faBalanceScale} size="lg" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faGlobe} size="lg" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faGhost} size="lg" />
            </Col>
          </Row>
        </div>
        <div className="FrontLayout__BLM pb-4">
          <div className="pt-5" style={{ textAlign: 'center' }}>
            <img
              src={black}
              style={{ width: '60vw', objectFit: 'cover', maxHeight: '500px' }}
            />
          </div>
          <p className="text-center pt-4" style={{ fontSize: '1.6rem' }}>
            #BlackLivesMatters
          </p>
          <p className="text-center" style={{ fontSize: '1.6rem' }}>
            #TogetherWeStand
          </p>
          <div className="text-center mr-5 ml-5">
            <p
              className="text-center"
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              Black Lives Matter (BLM) is a decentralized political and social
              movement advocating for non-violent civil disobedience in protest
              against incidents of police brutality and all racially motivated
              violence against black people.
            </p>
          </div>
        </div>
      </Container>
      <div
        id="contact"
        className="mt-5"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <div
          className="text-center pt-3"
          style={{ fontSize: '1.5rem', fontFamily: 'Creepster, cursive' }}
        >
          B&P
        </div>
        <div
          className="text-center"
          style={{ fontFamily: 'Kanit, sans-serif', fontSize: '1.5rem' }}
        >
          Contact Us
        </div>
        <div
          className="text-center mt-3"
          style={{ fontFamily: 'Kanit, sans-serif' }}
        >
          1-323-510-4050
        </div>
        <div
          className="text-center"
          style={{ fontFamily: 'Kanit, sans-serif' }}
        >
          451 N Fairfax Ave Los Angeles
        </div>
        <div
          className="text-center"
          style={{ fontFamily: 'Kanit, sans-serif' }}
        >
          0529bill@gmail.com
        </div>
        <div
          className="text-center pb-5 pt-2"
          style={{ fontFamily: 'Kanit, sans-serif' }}
        >
          made by @water
        </div>
      </div>
      <div
        className="FrontLayout__scrollButton text-center"
        onClick={() =>
          window.scrollTo({
            top: '0',
            left: '0',
            behavior: 'smooth',
          })
        }
        style={{
          width: '40px',
          height: '40px',
          position: 'fixed',
          right: '50px',
          bottom: '100px',
          display: showScroll ? null : 'none',
          fontFamily: 'Kanit, sans-serif',
        }}
      >
        Top
      </div>
    </div>
  );
}

export default FrontLayout;
