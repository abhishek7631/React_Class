import { useState } from "react";
import StudentData from "./StudentData";
import StudentForm from "./StudentForm";

function App() {
  const [studentData, setStudentData] = useState([]);

  const addNewData = (data) => {
    setStudentData((currData) => [...currData, data]);
  };

  return (
    <div className="bg-info py-4">
      <h1 className="text-center my-2">Student Form</h1>
      <hr />
      <StudentForm addNewData={addNewData} />
      <StudentData studentData={studentData} />
    </div>
  );
}

export default App;
