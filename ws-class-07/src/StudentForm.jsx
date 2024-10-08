import { useState } from "react";

export default function StudentForm({ addNewData }) {
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
    addNewData(formData);
    setFormData({
      firstname: "",
      middlename: "",
      lastname: "",
      age: "",
      email: "",
      adharnum: "",
    });
  };

  return (
    <form
      className="d-flex flex-column w-50 mx-auto border border-3 py-4 px-5"
      onSubmit={handleSubmit}
    >
      <label htmlFor="fName">Your First Name:</label>
      <input
        className="mb-2 ps-4 rounded-pill border border-0 py-2"
        required
        type="text"
        id="fName"
        placeholder="Enter Your Name"
        value={formData.firstname}
        name="firstname"
        onChange={handleInputChange}
      />

      <label htmlFor="mName">Your Middle Name:</label>
      <input
        className="mb-2 ps-4 rounded-pill border border-0 py-2"
        required
        type="text"
        id="mName"
        placeholder="Enter Your Middle Name"
        value={formData.middlename}
        name="middlename"
        onChange={handleInputChange}
      />

      <label htmlFor="lName">Your Last Name:</label>
      <input
        className="mb-2 ps-4 rounded-pill border border-0 py-2"
        required
        type="text"
        id="lName"
        placeholder="Enter Your Last Name"
        value={formData.lastname}
        name="lastname"
        onChange={handleInputChange}
      />

      <label htmlFor="age">Your Age:</label>
      <input
        className="mb-2 ps-4 rounded-pill border border-0 py-2"
        required
        type="number"
        id="age"
        placeholder="Enter Your age"
        value={formData.age}
        name="age"
        onChange={handleInputChange}
      />

      <label htmlFor="email">Your Email:</label>
      <input
        className="mb-2 ps-4 rounded-pill border border-0 py-2"
        required
        type="email"
        id="email"
        placeholder="Enter Your Email"
        value={formData.email}
        name="email"
        onChange={handleInputChange}
      />

      <label htmlFor="Anumber">Your Adhar Number:</label>
      <input
        className="mb-2 ps-4 rounded-pill border border-0 py-2"
        required
        type="number"
        id="Anumber"
        placeholder="Enter Your Adhar Number"
        value={formData.adharnum}
        name="adharnum"
        onChange={handleInputChange}
      />

      <input
        className="mx-auto w-50 rounded-3 border-0 py-2 mt-2"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
