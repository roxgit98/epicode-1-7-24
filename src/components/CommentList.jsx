import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => (
  <ListGroup>
    {props.comments.map((commentObj) => (
      <SingleComment key={commentObj._id} commentObj={commentObj} />
    ))}
  </ListGroup>
);

export default CommentList;
