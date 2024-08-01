import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = [
  {
    id: 1,
    title: "Hardware Tracking System",
    image: projectOne,
    description: (
      <>
        <p>
          This Project will manage the database of Computers working in a Company.
          This will keep tracking of System by Configuration,Warranty Details, AMC details and department system vice problems.
        </p>
      </>
    ),
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Efficient BookStore Management",
    image: projectTwo,
    description: (
      <>
        <p>
          This Project is basically used to build an web application program which help people to find and
          buy latest design of Books with different categories like Biography, Programming, Management.
        </p>
      </>
    ),
    github: "https://github.com",
  },
  {
    id: 3,
    title: "SmallProjects",
    image: projectThree,
    description: (
      <>
        <p>
          This Project is basically used to build an web application program which help people to find and
        </p>
      </>
    ),
    github: "https://github.com",
  },
];

export default projects;