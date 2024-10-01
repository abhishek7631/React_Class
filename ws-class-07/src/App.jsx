import { useState } from "react";
import StudentData from "./StudentData";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    age: "",
    email: "",
    adharnum: "",
  });

  const handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstname: "",
      middlename: "",
      lastname: "",
      age: "",
      email: "",
      adharnum: "",
    });
  };

  // const [name, setName] = useState("");
  // const [middlename, setMiddlename] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // const [adharnum, setAdharnum] = useState("");

  // const data = (e) => {
  //   e.preventDefault();
  //   console.log(
  //     `Name: ${name}, mName: ${middlename}, lName: ${lastname}, Age: ${age}, Email: ${email}, aNumber: ${adharnum}`
  //   );
  // };

  return (
    <div className="bg-info py-4">
      <h1 className="text-center my-2">Student Form</h1>
      <hr />
      <form
        className="d-flex flex-column w-50 mx-auto border border-3 py-4 px-5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="fName">Your First Name:</label>
        <input
          className="mb-2"
          type="text"
          id="fName"
          placeholder="Enter Your Name"
          value={formData.firstname}
          name="firstname"
          onChange={handleInputChange}
        />

        <label htmlFor="mName">Your Middle Name:</label>
        <input
          className="mb-2"
          type="text"
          id="mName"
          placeholder="Enter Your Middle Name"
          value={formData.middlename}
          name="middlename"
          onChange={handleInputChange}
        />

        <label htmlFor="lName">Your Last Name:</label>
        <input
          className="mb-2"
          type="text"
          id="lName"
          placeholder="Enter Your Last Name"
          value={formData.lastname}
          name="lastname"
          onChange={handleInputChange}
        />

        <label htmlFor="age">Your Age:</label>
        <input
          className="mb-2"
          type="text"
          id="age"
          placeholder="Enter Your age"
          value={formData.age}
          name="age"
          onChange={handleInputChange}
        />
        <label htmlFor="email">Your Email:</label>
        <input
          className="mb-2"
          type="text"
          id="email"
          placeholder="Enter Your Email"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
        />

        <label htmlFor="Anumber">Your Adhar Number:</label>
        <input
          className="mb-2"
          type="text"
          id="Anumber"
          placeholder="Enter Your Adhar Number"
          value={formData.adharnum}
          name="adharnum"
          onChange={handleInputChange}
        />

        <input
          className="mx-auto w-50 rounded-3 border-0"
          type="submit"
          value={"submit"}
        />
      </form>
      <StudentData></StudentData>
    </div>
  );
}

export default App;
