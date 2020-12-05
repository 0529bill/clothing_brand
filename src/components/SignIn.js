import React, { useRef, useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { Form, Container, Button, Alert } from 'react-bootstrap';

import { useAuth } from '../ContextApi';

function SignIn() {
  const { signIn, signinSuccess, signinError, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const password = useRef();
  const email = useRef();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signIn(email.current.value, password.current.value);
    } catch {
      alert('sign up failed!');
    }
    setLoading(false);
  };

  return (
    <>
      {currentUser ? (
        <Redirect to="/clothing_brand/shop" />
      ) : (
        <>
          <Container
            className="pb-3"
            style={{ fontFamily: 'Kanit, sans-serif', maxWidth: '600px' }}
          >
            <div
              className="text-center"
              style={{ fontFamily: 'Kanit, sans-serif', fontSize: '1.6rem' }}
            >
              SignIn
            </div>
            {signinSuccess && (
              <Alert
                variant="success"
                className="mt-3"
                style={{ overflow: 'scroll', whiteSpace: 'ellipsis' }}
              >
                sign in Successfully!
              </Alert>
            )}
            {signinError && (
              <Alert
                variant="danger"
                width="100%"
                className="mt-3"
                style={{ overflow: 'scroll', whiteSpace: 'ellipsis' }}
              >
                {signinError}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={email}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={password}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button
                className="w-100"
                variant="dark"
                disabled={loading}
                type="submit"
              >
                Sign In
              </Button>
            </Form>
            <div className="w-100 text-center mt-4">
              <Link to="/clothing_brand/forgotpasswords">
                Forgot your passowords?
              </Link>
            </div>
          </Container>
          <Container
            style={{ fontFamily: 'Kanit, sans-serif', maxWidth: '600px' }}
          >
            <div
              className="text-center mt-5"
              style={{ fontFamily: 'Kanit, sans-serif', fontSize: '1.6rem' }}
            >
              New customers?
            </div>
            <div className="pb-5">
              <div
                className="text-center m-3"
                style={{ fontFamily: 'Kanit, sans-serif', fontSize: '1rem' }}
              >
                Sign up now to take discount coupons!
              </div>
              <Link to="/clothing_brand/signup">
                <Button className="w-100" variant="outline-dark">
                  Sign Up
                </Button>
              </Link>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default SignIn;
