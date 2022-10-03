import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import EducationAndWorksTab from "./education and works tab";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function EducationWorks() {
  return (
    <div className="main-ed">
      <div className="head-edWork"></div>
      <div
        className="head-edworkk"
        css={css`
          height: 35vh;
        `}
      >
        <h1 className="title-ed">
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
