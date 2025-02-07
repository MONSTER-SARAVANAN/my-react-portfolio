import projectOne from "../assets/h-2.jpg";
import projectTwo from "../assets/b2.png";
import projectThree from "../assets/m1.jpg";
import projectFour from "../assets/Travel Diaries.jpg";


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
    // github: "https://github.com",
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
    // github: "https://github.com",
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
  {
    id: 4,
    title: "Travel Diaries",
    image: projectFour,
    description: (
      <>
     <p>
          Travel Diaries is a platform for sharing travel experinences through Photos, Stories.Users can Document  Their journeys.
    </p>
      </>
    ),
    github: "https://github.com",
  },   
];

export default projects;