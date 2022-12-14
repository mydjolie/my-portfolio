function WhyMe() {
  return (
    <body>
      <div className="why-me-whole">
        <h3 className="why-hire-small">
          <div className="blue-box"></div>
          Why <span className="hire-small">Hire</span> Me ?
        </h3>
        <div className="why-me">
          <div className="why-me-box">
            <div className="why-1">
              <img
                src="img/energy.png"
                alt="`icons of lightning"
                className="why-me-img"
              />
              <div className="why-me-content">
                <p className="why-heading">Energetic and Accountable</p>
                <p className="why-description">
                  Capable of dealing with unexpected situations and
                  multi-tasking optimistically.
                </p>
              </div>
            </div>
            <div className="why-2">
              <img
                src="img/heart.png"
                alt="`icons of heart and brain"
                className="why-me-img"
              />
              <div className="why-me-content">
                <p className="why-heading">Flexible and Open-minded</p>
                <p className="why-description">
                  Comfortable both when working independently and with a team.
                </p>
              </div>
            </div>
            <div className="why-3">
              <img
                src="img/teamwork2.svg"
                alt="`icons of 3 hands in the middle"
                className="why-me-img"
              />
              <div className="why-me-content">
                <p className="why-heading">Talkative and Friendly</p>
                <p className="why-description">
                  Have interpersonal skill with customer service skills and
                  service mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="why-me-quote">
          "It is not the strongest or most intelligent who will survive but
          those who can best manage change.??? <br />
          <span>??? Charles Darwin</span>
        </h2>
      </div>
    </body>
  );
}
export default WhyMe;
