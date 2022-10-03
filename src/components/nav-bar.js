function NavBar() {
  return (
    <>
      <nav className="navbar" id="home">
        <div>
          <p className="mind-head">
            mydjolie
            <span className="mind-head-point">.</span>
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

        <a href="http://m.me/myddontmind" target="blank">
          <button className="btn-chat-with-me">Chat with Me</button>
        </a>
      </nav>
    </>
  );
}

export default NavBar;
