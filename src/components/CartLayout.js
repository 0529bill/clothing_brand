import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Alert,
} from 'react-bootstrap';

import { useAuth } from '../ContextApi';
import { Link } from 'react-router-dom';

function CartLayout() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [forceUpdate, setForceUpdate] = useState(0);
  const { getFromCart, removeFromCart, currentUser, clearCart } = useAuth();
  let newStore = getFromCart();

  let handleOnClick = (id) => {
    removeFromCart(id);

    setForceUpdate(forceUpdate + 1);
  };

  let handleCheckOut = () => {
    clearCart();
    setShow(false);
    setError('Thanks for shopping in B&P!');
  };

  let totalCost = () => {
    let ans = 0;
    newStore.map((items) => (ans += items.price));
    return ans;
  };
  newStore.map((item) => <div>{item.name}</div>);

  return (
    <>
      <Container style={{ fontFamily: 'Kanit, sans-serif' }}>
        <p className="text-center" style={{ fontSize: '1.6rem' }}>
          cart
        </p>
        {error ? <Alert variant="danger">{error}</Alert> : null}

        <Card
          className="bg-dark text-white text-center"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Card.Body>
            <Card.Title>
              {currentUser ? 'You are signed in' : 'You have to sign in first'}
            </Card.Title>
            <Card.Text>You have {newStore.length} items in the cart</Card.Text>
            {currentUser ? (
              <Button
                style={{ boxShadow: 'none', minWidth: '150px' }}
                variant="light"
                size="lg"
                onClick={handleShow}
              >
                Check out
              </Button>
            ) : (
              <Link to="/clothing_brand/signin">
                <Button
                  style={{ boxShadow: 'none', minWidth: '150px' }}
                  variant="danger"
                  size="lg"
                >
                  Sign in to checkout
                </Button>
              </Link>
            )}
          </Card.Body>
        </Card>
        <Row className="mt-3">
          {newStore.map((items, key) => (
            <Col className="text-center mb-3" xs={12} md={4} key={key}>
              <Card className="m-1 text-center">
                <Card.Img
                  variant="top"
                  src={items.img}
                  style={{ objectFit: 'cover', height: '300px' }}
                />
                <Card.Body>
                  <Card.Title>{items.name}</Card.Title>
                  <Card.Text>{`$${items.price}`}</Card.Text>
                </Card.Body>
                <div className="mb-3">
                  <Button
                    variant="danger"
                    onClick={() => handleOnClick(items.id)}
                  >
                    remove from cart
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Check out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {newStore.map((item, index) => (
              <div key={index}>
                <span>{item.name}</span>
                <span className="ml-5">{item.price}</span>
              </div>
            ))}
            <div className="mt-2" style={{ borderTop: 'double' }}>
              <span>Total:</span>
              <span className="ml-5">{` $${totalCost()}`}</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary" onClick={() => handleCheckOut()}>
              check out
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default CartLayout;
