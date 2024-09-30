import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [adharnum, setAdharnum] = useState("");

  const data = (e) => {
    e.preventDefault();
    console.log(
      `Name: ${name}, mName: ${middlename}, lName: ${lastname}, Age: ${age}, Email: ${email}, aNumber: ${adharnum}`
    );
  };

  return (
    <div className="bg-info py-4">
      <h1 className="text-center my-2">Student Form</h1>
      <hr />
      <form
        onSubmit={data}
        className="d-flex flex-column w-50 mx-auto border border-3 py-4 px-5"
      >
        <label htmlFor="name">Your First Name:</label>
        <input
          className="mb-2"
          type="text"
          id="name"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="mName">Your Middle Name:</label>
        <input
          className="mb-2"
          type="text"
          id="mName"
          placeholder="Enter Your Middle Name"
          onChange={(e) => {
            setMiddlename(e.target.value);
          }}
        />

        <label htmlFor="lName">Your Last Name:</label>
        <input
          className="mb-2"
          type="text"
          id="lName"
          placeholder="Enter Your Last Name"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />

        <label htmlFor="age">Your Age:</label>
        <input
          className="mb-2"
          type="text"
          id="age"
          placeholder="Enter Your age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="email">Your Email:</label>
        <input
          className="mb-2"
          type="text"
          id="email"
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="Anumber">Your Adhar Number:</label>
        <input
          className="mb-2"
          type="text"
          id="Anumber"
          placeholder="Enter Your Adhar Number"
          onChange={(e) => {
            setAdharnum(e.target.value);
          }}
        />

        <input
          className="mx-auto w-50 rounded-3 border-0"
          type="submit"
          value={"submit"}
        />
      </form>
    </div>
  );
}

export default App;
