import { useState } from "react";

export default function StudentData() {
  const [studentData, setStudentData] = useState([
    {
      firstname: "Abhishek",
      middlename: "Kumar",
      lastname: "Choudhary",
      age: "24",
      email: "abhishek@gmail.com",
      adharnum: "1234567890",
    },
  ]);

  return (
    <div className="d-flex flex-column w-75 mx-auto border border-3 py-4 px-5 my-5">
      <h1 className="text-danger">All Student Data</h1>
      <hr></hr>
      <div className="data">
        <p>Fisrt Name: {studentData[0].firstname}</p>
        <p>{studentData[0].middlename}</p>
        <p>{studentData[0].lastname}</p>
        <p>{studentData[0].age}</p>
        <p>{studentData[0].email}</p>
        <p>{studentData[0].adharnum}</p>
      </div>
    </div>
  );
}
