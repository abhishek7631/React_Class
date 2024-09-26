import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center"
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "20px,",
        backgroundColor: "black",
      }}
    >
      <p>
        <a href="/terms">Terms</a> | <a href="/policy">Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
