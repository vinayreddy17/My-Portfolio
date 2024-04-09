import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Footer() {
  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/vinayamireddy";
  };

  const handleGithubClick = () => {
    window.location.href = "https://github.com/vinayreddy17";
  };
  return (
    <section>
    <div className="footer">
      <p>React App Made by Vinay Amireddy </p>
      <div className="icon-container">
        <img
          src={linkedin}
          alt="My LinkedIn profile"
          class="icon"
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/vinayamireddy")
          }
        />
        <img
          src={github}
          alt="My Github profile"
          class="icon"
          onClick={() =>
            (window.location.href = "https://github.com/vinayreddy17")
          }
        />
      </div>
    </div>
    </section>
  );
}

export default Footer;
