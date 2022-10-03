import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    Education: [
      {
        id: 1,
        title: "Chula MOOC ",
        date: "May 2021",
        des: "Data Science Pathway (Gold Award)",
      },
      {
        id: 2,
        title: "Chulalongkorn University ",
        date: "July 2013 - July 2017",
        des: "Dramatic Arts Major, Faculty of Arts (Second-class Honor)",
      },
      {
        id: 3,
        title: "Lycée de Mirepoix",
        date: "September 2011 - July 2012",
        des: " Premiere L (Exchange Student) Mirepoix, France	  	",
      },
    ],
    "Work Experience": [
      {
        id: 1,
        title: "Made Your Day Company Limited - Project Manager",
        date: "April 2022 - June 2022",
        des: "Support the work of marketing manager on projects directed at maximizing company profits and developing sales strategies or marketing campaigns.Responsible for Social Media campaign including coordinate with third parties.(Korea Team, Other team and Suppliers).Create contents for website and Landing Page.",
      },
      {
        id: 2,
        title: "Mega Study - Assistant Manager Marketing",
        date: "November 2021 - April 2022",
        des: "Support the work of marketing manager on projects directed at maximizing company profits and developing sales strategies or marketing campaigns.Responsible for Social Media campaign including coordinate with third parties.(Korea Team, Other team and Suppliers).Create contents for website and Landing Page.",
      },
      {
        id: 3,
        title: "Amorn Electronics - Product Marketing and Merchandise",
        date: "May 2021 - November 2021",
        des: "Responsible for sales target, profits and lost including manage stock and control personnel in the store, and other related tasked. Identify trends and insights, and optimize spend and performance based on the insights. Collaborate with other teams such as marketing and designers to create promotional content. Creating with trendy and engaging public relations and media campaigns.",
      },
      {
        id: 4,
        title: "Khoomphalang and Motortracks - Project Coordinator ",
        date: "September 2017 - March 2021",
        des: "Maintaining and monitoring project plans, project schedules, work hours, budgets, and expenditures. Preparing necessary presentation materials for meetings. Ensuring projects adhere to frameworks and all documentation is maintained appropriately for each project. Meeting clients to discuss their advertising needs",
      },
    ],
  });

  return (
    <div className="ed-div">
      <div className="tab">
        <Tab.Group>
          <Tab.List className="tab-list">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "tab-normal",
                    "tab-clicked",
                    selected ? "tab.c" : "tab-d"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="tab-panel">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames("tab-panel-a", "tab-panel-b")}
              >
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="post-id">
                      <div className="head-edWork">
                        <h3 className="post-title">{post.title}</h3>
                        <h3 className="p-date">{post.date}</h3>
                      </div>
                      <ul className="post-description">
                        <li>{post.des}</li>
                      </ul>

                      {/* <a
                        href="#"
                        className={classNames("something-a", "somthing-b")}
                      /> */}
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
