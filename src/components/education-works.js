import EducationAndWorksTab from "./education and works tab";

function EducationWorks() {
  return (
    <div className="main-ed" id="EducationAndWorkExperience">
      <div className="head-edWork"></div>
      <div className="head-works">
        <h1 className="title-ed">
          Education & <br /> <span className="work-underline">Work</span>{" "}
          Experiences
        </h1>
        <h1 className="title-ed-small">
          Education & <br /> <span className="work-underline">Work</span>{" "}
          Experiences
        </h1>

        <img
          className="yellow-thing"
          src="/img/yellow-thing.svg"
          alt="yellow curvy thing"
        />
        <img
          className="green-thing"
          src="/img/green-thing.svg"
          alt="green curvy object"
        />
      </div>
      <EducationAndWorksTab />
    </div>
  );
}

export default EducationWorks;
