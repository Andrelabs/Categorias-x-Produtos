import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Deals = props => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getCardData();
  }, [])

  const getCardData = async () => {
    try {
      const response = await fetch('/products/discount/0');
      const data = await response.json();
      console.log(data);
      setCardData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container fluid>
      <Jumbotron className="my-3">
        <h1>New Sales</h1>
        <p>
          Try on some budget styles that won't put a hole in your pocketbook!
        </p>
        <p>
          <Button 
            variant="primary"
            onClick={getCardData}
          >
            Deals Deals Deals
          </Button>
        </p>
      </Jumbotron>
      <Row className="mt-5 mb-3 justify-content-center">
        {
          cardData && cardData.map((item) => {
            const imageUrl = `/assets/images/${item.image_url}`;
            return (
              <Col className="col-4">
              <Card style={{ width: '18rem' }} className="mx-5">
                <Card.Img variant="top" src={imageUrl} style={{ height: '20rem' }} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button variant="primary">Browse Here!</Button>
                </Card.Body>
              </Card>
            </Col>
            )
          })
        }
      
      </Row>
    </Container>
  );
}

export default Deals;