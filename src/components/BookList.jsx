import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";
import { Row, Form, Col } from "react-bootstrap";
import { Component } from "react";

// const BookList = (props) => (
//   <Container>
//     <Row>
//       {props.books.map((book) => (
//         <SingleBook key={book.asin} book={book} />
//       ))}
//     </Row>
//   </Container>
// );

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  changeSelectedBook = (asin) => {
    this.setState({ selectedBook: asin });
  };

  render() {
    return (
      <>
        <Row>
          <Col md={8}>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={4} className="text-center">
                <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="cerca un libro..."
                    value={this.state.searchQuery}
                    onChange={(e) => {
                      this.setState({ searchQuery: e.target.value });
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              {this.props.books
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((book) => (
                  <Col xs={12} md={4} key={book.asin}>
                    <SingleBook
                      book={book}
                      changeSelectedBook={this.changeSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
