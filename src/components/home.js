/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import mindPic from "./pic/mind-profile-pic.svg";

const mindPic = "./pic/mind-profile-pic.png";

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
              left: 511px;
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
                margin-left: 120px;
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
                font-size: 24px;
                line-height: 31px;
                margin-left: 120px;
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
                margin-left: 120px;
              `}
            >
              <button className="hire-me">Hire Me</button>
              <button className="CV-download">Download CV</button>
            </div>
            <div
              className="follow-me"
              css={css`
                margin-left: 120px;
              `}
            >
              <p>Follow me</p>
              <div id="logos">
                <img
                  css={css`
                    height: 90px;
                    width: 90px;
                    margin-right: 45px;
                  `}
                  src="https://img.icons8.com/color/192/facebook-new.png"
                  alt="facebook-logo"
                />
                <img
                  css={css`
                    height: 76px;
                    width: 76px;
                    margin-right: 50px;
                  `}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github-logo"
                />
                <img
                  css={css`
                    height: 76px;
                    width: 76px;
                    margin-right: 45px;
                  `}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
                  alt="linkedin-logo"
                />
                <img
                  css={css`
                    height: 76px;
                    width: 76px;
                    margin-right: 45px;
                  `}
                  src="https://seeklogo.com/images/I/instagram-logo-1494D6FE63-seeklogo.com.png"
                  alt="instagram-logo"
                />
              </div>
            </div>
          </div>
          <div className="down-left-main">
            <div className="why-hire">
              <h1>Why Hire Me ?</h1>
            </div>
          </div>
        </div>

        <div className="right-main">
          <img
            className="profile-pic"
            src="https://i.postimg.cc/nc5NLJhq/mind-profile-pic.png"
            alt="A very cute girl named Mind Warintorn"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
