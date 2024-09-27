import "./Content.css";

export default function Content() {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "yellow",
          height: "400px",
        }}
      >
        <div className="content">
          <h1>
            Hi! I'm <span style={{ color: "blue" }}>Abhishek Choudhary.</span>
          </h1>
          <h3>
            A Professional <span style={{ color: "red" }}>Web Developer</span>
          </h3>
          <p>
            I'm 24 years old creative web designer based in New York,<br></br>
            specializing in User Interface Design and Development.I build clean,
            <br></br>
            appealing, and functional interfaces which comply with the latest
            web standards.
          </p>
          <button>Download CV</button>
        </div>
        <img
          src="https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png"
          alt=""
        />
      </section>

      <section>
        <div className="about">
          <h1>About</h1>
        </div>
      </section>
    </>
  );
}
