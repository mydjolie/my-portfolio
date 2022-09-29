/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import apricot from "./";

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
      {/* แถบ Nav จบ */}
      <main className="cover">
        <div className="left-main">
          <div
            css={css`
              position: absolute;
              width: 449px;
              height: 60px;
              left: 535px;
              top: 263px;
              background: #5562ff;
              opacity: 0.7;
              border-radius: 29px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            `}
          >
            <span
              css={css`
                font-family: "Poppins";
                font-style: normal;
                font-weight: 700;
                font-size: 36px;
                text-align: center;
                color: #ffffff;
              `}
            >
              Full-Stack Developer
            </span>
          </div>
          <div className="upper-left-main">
            <div
              css={css`
                font-family: Poppins;
                font-style: normal;
                font-weight: 700;
                font-size: 5.5633rem;
                line-height: 108px;
                color: #183b56;
                margin-left: 150px;
                position: "relative";
              `}
            >
              Hi! I Am <br />
              Mind Warintorn
            </div>
            <p
              css={css`
                font-style: normal;
                font-weight: 400;
                font-size: 1.75em;
                line-height: 40px;
                margin-left: 150px;
              `}
            >
              A Full-Stack Developer in training <br /> based in Bangkok,
              Thailand with <b>Project Manager</b>
              <br />
              experience and over <b>4 years</b> as a Project Coordinator.
            </p>
            <div
              className="btn-group"
              css={css`
                margin-left: 150px;
              `}
            >
              <button className="hire-me">Hire Me</button>
              <button className="CV-download">Download CV</button>
            </div>
            <div
              className="follow-me"
              css={css`
                margin-left: 150px;
              `}
            >
              <p>Follow me :</p>
              <div id="logos">
                <a href="https://www.facebook.com/myddontmind">
                  <img
                    css={css`
                      height: 100px;
                      width: 100px;
                      margin-right: 45px;
                    `}
                    src="img/fb-logo.svg"
                    alt="facebook-logo"
                  />
                </a>
                <a href="https://github.com/mydjolie">
                  <img
                    css={css`
                      height: 76px;
                      width: 76px;
                      margin-right: 50px;
                    `}
                    src="img/github-logo.png"
                    alt="github-logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/warintorn-sathirasrindh-519348152/">
                  <img
                    css={css`
                      height: 76px;
                      width: 90px;
                      margin-right: 45px;
                    `}
                    src="img/LI-in-bug.png"
                    alt="linkedin-logo"
                  />
                </a>
                <a href="https://www.instagram.com/mydjolie_/">
                  <img
                    css={css`
                      height: 120px;
                      width: 120px;
                      margin-right: 45px;
                      object: fill;
                    `}
                    src="img/Instagram-Logo.wine.svg"
                    alt="instagram-logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="down-left-main">
            <div className="why-hire">
              <h1>Why Hire Me ?</h1>
              <div
                className="orange-underline"
                css={css`
                  width: 272px;
                  height: 68px;
                  left: 586px;
                  top: 1300px;
                `}
              ></div>
            </div>
          </div>
        </div>

        <div
          className="right-main"
          css={css`
            position: relative;
          `}
        >
          <img
            src="img/Untitled_Artwork 3.png"
            alt="an orange parrot cartoon"
            css={css`
              position: absolute;
              top: 300px;
              right: 480px;
              scale: 45%;
              z-index: 0;
              display: none;
            `}
          />
          <p
            css={css`
              position: absolute;
              width: max-content;
              height: 98px;
              left: 150px;
              top: 90px;
              font-family: "DM Sans";
              font-size: 2rem;
              line-height: 49px;
              color: #000000;
            `}
          >
            {" "}
            <b>Learn</b> , <b>Unlearn</b> and <b>Relearn</b> is the <br /> key
            when <b>Life is an Adventure</b> :D
          </p>
          <img
            src="img/vector 129.svg"
            alt="a vertical line"
            css={css`
              position: absolute;
              width: 50px;
              height: 90px;
              z-index: 50;
              right: 270px;
              top: 220px;
              transform: rotate(-175deg);
            `}
          />

          <img
            className="profile-pic"
            src="img/mind-profile-pic.png"
            alt="A very cute girl named Mind Warintorn"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
