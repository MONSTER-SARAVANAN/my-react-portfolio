import projectOne from "../assets/h-2.jpg";
import projectTwo from "../assets/b2.png";
import projectThree from "../assets/X.jpg";
import projectFour from "../assets/chat app.jpg";
import projectFive from "../assets/text to image.png";
import projectSix from "../assets/CarRental.svg";
import projectSeven from "../assets/grocery-delivery.jpg";
import projectEight from "../assets/Virtual-Assistant.png";

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
    image: projectFive,
    description: (
      <>
     <p>
      Easily transform your Ideas into stunning visuals with our MERN stack app. Just type a description, and our AI will generate a unique image for your instantly.
      </p>
      </>
    ),
    github: "https://imagine-rise.vercel.app",
  }, 
   {
    id: 6,
    title: "Car-Rental",
    image: projectSix,
    description: (
      <>
     <p>
       CarRental – Luxury Car Sharing Platform.A modern full-stack MERN application where users can rent, list, and manage luxury cars with secure payments and a smooth booking experience.
     </p>
      </>
    ),
    github: "https://car-rental-pi-gilt.vercel.app",
  }, 
  {
    id: 7,
    title: "Grocery Delivery App",
    image: projectSeven,
    description: (
      <>
     <p>
      Developed a high-performance PERN stack(PostgreSQL, Express, React, Nodejs) grocery delivery web application using Typescript and Tailwind CSS. Built type-safe database schemas using
      Prisma ORM hosted on serverless Neon DB. Integrated Inngest for background task queuing and stripe API for secure, automated payment checkout workflows.
     </p>
      </>
    ),
    github: "https://grocery-deleivery-app.vercel.app",
  },  
  {
    id: 8,
    title: "Virtual Assistant",
    image: projectEight,
    description: (
      <>
     <p>
      A smart virtual assistant built with React and Node.js, designed to help users manage their daily tasks, set reminders, and access information instantly.
     </p>
      </>
    ),
    github: "https://virtual-assistant-iota-ivory.vercel.app",
  },  
];

export default projects;