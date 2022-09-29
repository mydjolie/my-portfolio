/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fbLogo from "./";
import fbLogo from "./components/Facebook_Logo_(2019).png";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div
          css={css`
            display: inline;
            flex-direction: row;
            justify-content: start;
          `}
        >
          <p
            css={css`
              font-weight: 700;
              font-size: 2.25em;
              display: inline;
            `}
          >
            Mind Warintorn
            <p
              css={css`
                color: #ff8345;
                font-size: 2em;
                display: inline;
              `}
            >
              .
            </p>
          </p>
        </div>
        <div className="navbar-link">
          <p>Home</p>
          <p>Why Me?</p>
          <p>Education & Works</p>
          <p>Skills</p>
        </div>

        <button className="btn-chat-with-me">Chat with Me</button>
      </nav>
      <hr
        css={css`
          border: 3px solid rgba(0, 0, 0, 0.09);
          margin-left: 124px;
          margin-right: 124px;
        `}
      />

      <main className="cover">
        <div className="left-main">
          <div>
            <h1>Hi! I Am Mind Warintorn</h1>
            <p>
              A Full-Stack Developer in training based in Bangkok, Thailand with{" "}
              <b>Project Manager</b> experience and over <b>4 years</b> as a
              Project Coordinator.
            </p>
            <div className="btn-group">
              <button>Hire Me</button>
              <button>Download CV</button>
            </div>
            <div className="follow-me">
              <h3>Follow me</h3>
              <div className="logos">
                <img src="{fbLogo}" alt="facebook-logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-main"></div>
      </main>
    </div>
  );
}

export default Home;
