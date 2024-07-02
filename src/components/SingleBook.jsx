import { Component } from "react";
import { Card, Col } from "react-bootstrap";

// import Badge from "react-bootstrap/Badge";
// import CommentArea from "./CommentArea";

//  const SingleBook = (props) => (
//    <Col xxl={4}>
//      <Card>
//        <Card.Img variant="top" src={props.img} className="img-fluid" />
//        <Card.Body>
//          <Card.Title>{props.title}</Card.Title>
//        </Card.Body>
//      </Card>
//    </Col>
//  );

class SingleBook extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: false,
  //   };
  // }

  // toggleSelected = () => {
  //   this.setState((prevState) => ({
  //     selected: !prevState.selected,
  //   }));
  // };

  render() {
    return (
      <Col xxl={4}>
        <Card>
          <Card.Img
            onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
            variant="top"
            src={this.props.book.img}
            className="img-fluid"
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            {/* {this.state.selected && <Badge bg="success">Compra ora!</Badge>}
            {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
