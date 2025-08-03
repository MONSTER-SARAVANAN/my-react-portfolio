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
    title: "X-clone",
    image: projectThree,
    description: (
      <>
     <p>
          A Full-stack social media web application inspired by X(twiiter).it allows users to create accounts, post tweets, follow others, like posts, and feed updates.</p>
      </>
    ),
    github: "https://x-clone-k9fb.onrender.com",
  },   
  {
    id: 4,
    title: "Chat-app",
    image: projectFour,
    description: (
      <>
     <p>
      Chat, connect, and share your friends and family through instant messages, photos and vidoes. Our app offers a seamless and secure platform for all your conversations.    
      </p>
      </>
    ),
    github: "https://fullstack-chat-app-bkih.onrender.com",
  },  
  {
    id: 5,
    title: "ImagineRise",
    image: projectFour,
    description: (
      <>
     <p>
      Easily transform your Ideas into stunning visuals with our MERN stack app. Just type a description, and our AI will generate a unique image for your instantly.
      </p>
      </>
    ),
    github: "https://github.com",
  },  
];

export default projects;