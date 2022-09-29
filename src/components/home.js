/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Home() {
  return (
    <div className="home">
      <nav className="navbar" id="home">
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
            mydjolie
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
          <a href="#home">
            <p className="nav-home">Home</p>
          </a>
          <a href="#whyMeScroll">
            <p className="nav-why">Why Me?</p>
          </a>
          <p className="nav-ed">Education & Works</p>
          <p className="nav-skills">Skills</p>
        </div>

        <button className="btn-chat-with-me">Chat with Me</button>
      </nav>
      <hr
        css={css`
          border: 3px solid rgba(0, 0, 0, 0.09);
          margin-left: 7vw;
          margin-right: 7vw;
          align-content: start;
          width: 45vw;
        `}
      />
      {/* แถบ Nav จบ */}
      <main className="cover">
        <div className="left-main">
          <div className="fullStack">
            <span>Full-Stack Developer</span>
          </div>
          <div className="upper-left-main">
            <div className="main-heading">
              Hi! I Am <br />
              Mind Warintorn
            </div>
            <p className="main-description">
              A Full-Stack Developer in training <br /> based in Bangkok,
              Thailand with <b>Project Manager</b>
              <br />
              experience and over <b>4 years</b> as a Project Coordinator.
            </p>
            <div className="btn-group">
              <a href="mailto:myddontmind@gmail.com">
                <button className="hire-me">Hire Me</button>
              </a>

              <a
                href="https://drive.google.com/file/d/1V0r3qcqzlXB7XWhzVoR6x6VWPaHKi-Vh/view?usp=sharing"
                target="blank"
              >
                <button className="CV-download">Download CV</button>
              </a>
            </div>

            <div className="follow-me">
              {/* <p>Follow me :</p> */}
              <div id="logos">
                <a href="https://www.facebook.com/myddontmind" target="blank">
                  <img
                    css={css`
                      height: 50px;
                      width: 50px;
                      margin-right: 45px;
                    `}
                    src="img/fb-logo.svg"
                    alt="facebook-logo"
                  />
                </a>
                <a href="https://github.com/mydjolie" target="blank">
                  <img
                    css={css`
                      height: 40px;
                      width: 40px;
                      margin-right: 50px;
                    `}
                    src="img/github-logo.png"
                    alt="github-logo"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/warintorn-sathirasrindh-519348152/"
                  target="blank"
                >
                  <img
                    css={css`
                      height: 40px;
                      margin-right: 35px;
                    `}
                    src="img/LI-in-bug.png"
                    alt="linkedin-logo"
                  />
                </a>
                <a href="https://www.instagram.com/mydjolie_/" target="blank">
                  <img
                    css={css`
                      height: 60px;
                      width: 60px;
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
          <hr
            className="white-line2"
            css={css`
              border: 3px solid rgba(0, 0, 0, 0.09);
              margin-left: 7vw;
              margin-right: 7vw;
              align-content: start;
              width: 30vw;
            `}
          />
          <div className="down-left-main">
            <div className="why-hire" id="whyMeScroll">
              <h1>
                Why <span className="hire">Hire</span> Me ?
              </h1>
              {/* <div className="orange-underline"></div> */}
            </div>
          </div>
        </div>

        <div className="right-main">
          <p className="quote">
            {" "}
            <b>Learn</b> , <b>Unlearn</b> and <b>Relearn</b> is the <br /> key
            when <b>Life is an Adventure</b> :D
          </p>
          <img
            className="line"
            src="img/vector 129.svg"
            alt="a vertical line"
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
