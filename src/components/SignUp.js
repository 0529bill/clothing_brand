import React, { useRef, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../ContextApi';

function SignUp() {
  let { signUp, signupError, signupSuccess } = useAuth();

  let [error, setError] = useState(null);
  let [success, setSuccess] = useState(null);
  let [loading, setLoading] = useState(false);

  const password = useRef();
  const email = useRef();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setSuccess('');
      setLoading(true);
      await signUp(email.current.value, password.current.value);
    } catch {
      alert('something went wrong! Try refresh the window again!');
    }

    setLoading(false);
  };

  return (
    <Container style={{ fontFamily: 'Kanit, sans-serif', maxWidth: '600px' }}>
      <div
        className="text-center"
        style={{ fontFamily: 'Kanit, sans-serif', fontSize: '1.6rem' }}
      >
        SignUp
      </div>
      {signupSuccess && (
        <Alert
          variant="success"
          className="mt-3"
          style={{ overflow: 'scroll', whiteSpace: 'ellipsis' }}
        >
          sign up Successfully!
        </Alert>
      )}
      {signupError && (
        <Alert
          variant="danger"
          width="100%"
          className="mt-3"
          style={{ overflow: 'scroll', whiteSpace: 'ellipsis' }}
        >
          {signupError}
        </Alert>
      )}
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            ref={email}
            type="email"
            placeholder="Enter email"
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
          type="submit"
          disabled={loading}
        >
          Sign Up
        </Button>
      </Form>
      <div className="w-100 text-center mt-4">
        <Link to="/clothing_brand/signin">sign in</Link>
      </div>
    </Container>
  );
}

export default SignUp;
