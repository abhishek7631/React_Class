import { useState } from "react";

export default function CommentsForm(addNewComments) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    addNewComments(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <h1>Give a comments!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br></br> <br></br> <br></br>
        <textarea
          value={formData.remarks}
          placeholder="add few remarks"
          onChange={handleInputChange}
          name="remarks"
        ></textarea>
        <br></br> <br></br> <br></br>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
        />
        <br></br> <br></br> <br></br>
        <button>Add comment</button>
      </form>
    </div>
  );
}
