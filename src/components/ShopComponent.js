import React from 'react';

import { Button, Card, Col, Row } from 'react-bootstrap';
import { useAuth } from '../ContextApi';

function ShopComponent() {
  const { showStore, addToCart, getFromCart } = useAuth();

  let newStore = showStore();

  let addedStore = getFromCart();

  let handleButtonClick = (id) => {
    addToCart(id);
  };

  return (
    <>
      <Row>
        {newStore.map((items, key) => (
          <Col className="text-center mb-3" xs={12} md={4} key={key}>
            <Card
              className="m-1 text-center bg-dark"
              style={{ color: 'white' }}
            >
              <Card.Img
                variant="top"
                src={items.img}
                // src={window.location.origin + `/cartImg/${items.img}`}
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Text>{`$${items.price}`}</Card.Text>
              </Card.Body>
              <div className="mb-3">
                {addedStore.find((prop) => prop.id === items.id) ? (
                  <Button variant="danger" disabled={true}>
                    item added
                  </Button>
                ) : (
                  <Button
                    variant="light"
                    onClick={() => handleButtonClick(items.id)}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ShopComponent;
