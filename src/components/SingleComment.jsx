import { ListGroupItem } from "react-bootstrap";

const SingleComment = (props) => (
  <ListGroupItem>{props.commentObj.comment}</ListGroupItem>
);

export default SingleComment;
