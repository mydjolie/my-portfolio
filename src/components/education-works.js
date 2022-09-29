import { Tab } from "@headlessui/react";
import { Fragment } from "react";
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
      {/* <Tab.Group>
        <Tab.List>
          <Tab
            css={css`
              background-color: #fe481b;
              font-family: Poppins;
              border-radius: 10px;
              border: 2px solid white;
              color: white;
              font-weight: 700;
              width: 180px;
              height: 50px;
            `}
          >
            <button className="education-button">Education</button>
          </Tab>

          <Tab
            css={css`
              background-color: #fe481b;
              font-family: Poppins;
              border-radius: 10px;
              border: 2px solid white;
              color: white;
              font-weight: 700;
              width: 180px;
              height: 50px;
            `}
          >
            <button className="workEx-button">Work Experience</button>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>"Data Science Pathway Chula MOOC (Gold Award)"</Tab.Panel>
          <Tab.Panel>
            "Dramatic Arts Major, Faculty of Arts Chulalongkorn University "
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group> */}
    </>
  );
}

export default EducationWorks;
