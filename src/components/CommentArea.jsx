import { Component } from "react";
import { Alert } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  fetchComments = async () => {
    this.setState({ isLoading: true });

    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE2MTdjMjM5YzAwMTUyZjRiNDEiLCJpYXQiOjE3MTk0OTAxMzcsImV4cCI6MTcyMDY5OTczN30.qKiOJ1oiGi6orXP1et27zieWvuYCrTk0tWsu9y7U_qo",
          },
        }
      );

      if (resp.ok) {
        this.setState({ comments: await resp.json() });
      } else {
        throw new Error("errore!");
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>
        <h4>Commenti</h4>
        {this.state.comments.length > 0 ? (
          <CommentList comments={this.state.comments} />
        ) : (
          <Alert bg="info">non ci sono ancora commenti</Alert>
        )}
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
