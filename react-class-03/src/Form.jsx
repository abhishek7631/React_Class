import { useState } from "react";

export default function Form() {
  //   let [fullName, setFullName] = useState("");
  //   let [userName, setUserName] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });

  //   let handleNameChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let handleUserName = (event) => {
  //     setUserName(event.target.value);
  //   };

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      fullName: "",
      userName: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name: </label>
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.fullName}
        name="fullName"
        id="fullName"
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label htmlFor="username">User Name: </label>
      <input
        type="text"
        placeholder="Enter your user name"
        value={formData.userName}
        id="username"
        name="userName"
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <button>Submit</button>
    </form>
  );
}
