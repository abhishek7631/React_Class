export default function StudentData({ studentData }) {
  return (
    <div className="d-flex flex-column w-75 mx-auto border border-3 py-4 px-5 my-5">
      <h1 className="text-danger">All Student Data</h1>
      <hr></hr>
      {studentData.map((data, idx) => (
        <div className="data" key={idx}>
          <p>
            First Name: <b>{data.firstname}</b>
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
    </div>
  );
}
