import img from "./image.jpeg";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1000px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          height: "200px",
          marginTop: "100px",
          border: "2px solid black",
        }}
        src={img}
        alt="image"
      />
      <div>
        <h1>About Me</h1>
        <p style={{ width: "600px", fontFamily: "cursive" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          voluptates ratione perspiciatis, <br></br>necessitatibus aliquam ea
          veritatis commodi at, sunt molestias modi<br></br> dolor. Aspernatur
          ratione impedit magni. Molestias nostrum mollitia similique.
          <br></br>
          <hr></hr>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          voluptates ratione perspiciatis, <br></br>necessitatibus aliquam ea
          veritatis commodi at, sunt molestias modi<br></br> dolor. Aspernatur
          ratione impedit magni. Molestias nostrum mollitia <br></br>similique.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          voluptates ratione perspiciatis, <br></br>necessitatibus aliquam ea
          veritatis commodi at, sunt molestias modi<br></br> dolor. Aspernatur
          ratione impedit magni. Molestias nostrum mollitia similique.
        </p>
      </div>
    </div>
  );
}
