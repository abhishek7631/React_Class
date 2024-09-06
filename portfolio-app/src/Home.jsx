import myImg from "./Abhi.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div id="about">
        <img src={myImg} alt="myImg" className="myImg" />
        <div id="about_content">
          <h1>About me!</h1>
          <p>
            Hi my name is <b>Abhishek Kumar Choudhary.</b>
            <br></br>
            <br></br>
            As a fresh Frontend Web developer, I am excited to leverage my
            skills to create visually appealing and intuitive user interfaces.
            My passion for coding and technology has led me to pursue a career
            in web development. my focus is on designing and developing websites
            that look great and well design. i am skilled in a programming
            languages such as HTML, CSS, Javascript, Bootstrap.
            <br></br>
            <br></br>I enjoy working with other web developers and designers to
            achieved the client's brand and business objectives. I am committed
            to keeping up with latest technology and industry trends. and I
            attend professional web development courses to improve my skills. I
            always keep practice to improve my skill sets.
            <br></br>
            <br></br>
            My Goal is to create website/web applications that both visually
            appealing and easy to use. I take pride in exceeding client
            expectations and delivering projects on time.
            <br></br>
            <br></br>If you are looking for frontend web developer with relevant
            skill sets. then please feel free to get in touch with me.
          </p>
        </div>
      </div>

      <div id="education">
        <h1>Eductaion</h1>
      </div>

      <div id="bachelor">
        <h2>Bachelor of Technology (B.Tech)</h2>
        <h3>Jawaharlal Nehru Engineering College</h3>
        <h4>12/2020 - 07/2024</h4>
        <p>Courses: "COMPUTER SCIENCE ENGINEERING"</p>
      </div>

      <div id="inter">
        <h2>12th Grade</h2>
        <h3>Mahatma Gandhi College</h3>
        <h4>06/2016 - 06/2018</h4>
      </div>

      <div id="tenth">
        <h2>10th Grade</h2>
        <h3>V S B High School</h3>
        <h4>05/2016</h4>
      </div>

      <div id="skills">
        <h1>Skills</h1>
      </div>

      <ul id="list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>SQL</li>
        <li>DBMS</li>
        <li>OOPS</li>
        <li>GIT</li>
        <li>GITHUB</li>
      </ul>
    </div>
  );
}
