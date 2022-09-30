import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import EducationAndWorksTab from "./education and works tab";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function EducationWorks() {
  return (
    <>
      <h1
        css={css`
          font-family: Poppins;
          font-size: 100px;
          text-align: center;
        `}
      >
        COMING SOON!
      </h1>
      <div>
        <EducationAndWorksTab />
      </div>
    </>
  );
}

export default EducationWorks;
