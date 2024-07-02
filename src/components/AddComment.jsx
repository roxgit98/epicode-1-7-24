import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",

        {
          method: "POST",
          body: JSON.stringify(this.state.newComment),

          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE2MTdjMjM5YzAwMTUyZjRiNDEiLCJpYXQiOjE3MTk0OTAxMzcsImV4cCI6MTcyMDY5OTczN30.qKiOJ1oiGi6orXP1et27zieWvuYCrTk0tWsu9y7U_qo",
          },
        }
      );

      if (resp.ok) {
      } else {
        throw new Error("errore!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="inserisci un commento..."
            value={this.state.newComment.comment}
            onChange={(e) => {
              this.setState({
                newComment: {
                  ...this.state.newComment,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={this.state.newComment.rate}
            onChange={(e) => {
              this.setState({
                newComment: { ...this.state.newComment, rate: e.target.value },
              });
            }}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary">
          invia commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
