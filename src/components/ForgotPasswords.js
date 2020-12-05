import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Container, Button, Alert } from 'react-bootstrap';

import { useAuth } from '../ContextApi';

function ForgotPasswords() {
  let { resetPassword, resetSuccess, resetError } = useAuth();

  let [loading, setLoading] = useState(false);

  const password = useRef();
  const email = useRef();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await resetPassword(email.current.value);
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
        Reset passwords
      </div>
      {resetSuccess && (
        <Alert
          variant="success"
          className="mt-3"
          style={{ overflow: 'scroll', whiteSpace: 'ellipsis' }}
        >
          {resetSuccess}
        </Alert>
      )}
      {resetError && (
        <Alert
          variant="danger"
          width="100%"
          className="mt-3"
          style={{ overflow: 'scroll', whiteSpace: 'ellipsis' }}
        >
          {resetError}
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
        <Button
          className="w-100"
          variant="dark"
          type="submit"
          disabled={loading}
        >
          Send
        </Button>
      </Form>
      <div className="w-100 text-center mt-4">
        <Link to="/clothing_brand/signin">sign in</Link>
      </div>
    </Container>
  );
}

export default ForgotPasswords;
