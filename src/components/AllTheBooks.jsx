import { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Horror from "../data/horror.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {Horror.map((book) => {
            return (
              <Col key={book.asin} xxl={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Badge bg="success">{book.price}$</Badge>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
