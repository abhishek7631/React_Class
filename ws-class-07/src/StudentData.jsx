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

  let addNewData = (data) => {
    setStudentData((currData) => [...currData, data]);
  };

  return (
    <div className="d-flex flex-column w-75 mx-auto border border-3 py-4 px-5 my-5">
      <h1 className="text-danger">All Student Data</h1>
      <hr></hr>
      {studentData.map((data, idx) => (
        <div className="data" key={idx}>
          <p>
            Fisrt Name: <b>{data.firstname}</b>
          </p>
          <p>
            Middle Name: <b>{data.middlename}</b>
          </p>
          <p>
            Last Name: <b>{data.lastname}</b>
          </p>
          <p>
            Age: <b>{data.age}</b>
          </p>
          <p>
            Email: <b>{data.email}</b>
          </p>
          <p>
            Adhar Num: <b>{data.adharnum}</b>
          </p>
        </div>
      ))}
      <App addNewData={addNewData}></App>
    </div>
  );
}
