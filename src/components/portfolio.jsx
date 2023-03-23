import React from "react";
import "../components/portfolio.css";
import me1 from "../image/me1.png"

function Portfolio() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
            <div className="nav-left">
                <h3>SB</h3>
            </div>
            <div className="nav-right">
                <p>About me</p>
                <p>Contact me</p>
                <p>My Projects</p>
            </div>
        </div>
        <div className="left">
          <img src={me1} alt=""/>
        </div>
        <div className="right">
          <h1>About Me</h1>
          <h4>A MERN stack Developer</h4>
          <p>
            A <strong className="strong"> full stack developer </strong>with a passion for creating dynamic and
            interactive web applications. I hold a Bachelor of Computer
            Applications (BCA) degree and have a little experience in building
            user-friendly interfaces and optimizing application performance. My
            expertise lies in working with <strong className="strong"> MongoDB, ExpressJs, ReactJs, and
            NodeJs </strong> to deliver high-quality, and scalable web solutions. I am
            committed to keeping up with the latest technologies and industry
            trends, and I am always looking for new ways to enhance my skills
            and knowledge.
          </p>

            <div className="skills">
                <div className="info">
                    <p> <strong>Email: </strong> bhowmiksamiron@gmail.com </p>
                    <p> <strong>Phone: </strong> +91 70025 98597 </p>
                    <p> <strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/samiron-bhowmik-197662198/">samiron-bhowmik-197662198</a>  </p>
                    <p> <strong>Github: </strong> <a href="https://github.com/samironbhowmik"> github.com/samironbhowmik </a> </p>
                </div>
            </div>

        </div>
        <div className="bottom">
            <div className="achievements">
                <section>
                    <h3>500</h3>
                    <p>Happy Clients</p>
                </section>
                <section>
                    <h3>150</h3>
                    <p>Project Completed</p>
                </section>
                <section>
                    <h3>850</h3>
                    <p>Photo Capture</p>
                </section>
                <section>
                    <h3>190</h3>
                    <p>Telephonic Calls</p>
                </section>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
