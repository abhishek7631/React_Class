import { useState } from "react";
import CommentsForm from "./CommentsForm";

export default function Comments() {
  let [comment, setComment] = useState([
    {
      userName: "@abhishek7631",
      remarks: "Great Job!",
      rating: "4",
    },
  ]);

  let addNewComments = () => {
    setComment((currComment) => [...currComment, comment]);
  };

  return (
    <div>
      <h1>All Comments</h1>
      {comment.map((comment, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid black",
            width: "200px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <span>{comment.remarks}</span>
          &nbsp;
          <span>(Rating = {comment.rating})</span>
          <p>- {comment.userName}</p>
        </div>
      ))}

      <CommentsForm addNewComments={addNewComments}></CommentsForm>
    </div>
  );
}
