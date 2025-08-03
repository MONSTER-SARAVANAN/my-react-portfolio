// import React from "react";
// import "../styles/playerStats.css";

// const PlayerStats = () => {
//     return (
//         <div id ="playerStats">
//             <h1>SARAVANAN M 
//                 LEVEL 24</h1>
//             <div id="playerStats__lines">
//                 <span id="playerStats__lines__thick">

//                 </span>
//                 <span id="playerStats__lines__thin">
                    
//                 </span>
//             </div>
//             <h2>Fullstack Developer</h2>
//             <a href="https://github.com/MONSTER-SARAVANAN">GITHUB</a>
//         </div>
//     );
// };

// export default PlayerStats;



import React from "react";
import { motion } from "framer-motion";
import "../styles/playerStats.css";
import gif from "../assets/giphy.gif"; // ✅ Make sure path matches your structure

const PlayerStats = () => {
  return (
    <motion.div
      id="playerStats"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <motion.img
        src={gif}
        alt="Hologram Avatar"
        className="playerStats__gif"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      />

      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        SARAVANAN M LEVEL 24
      </motion.h1>

      <motion.div
        id="playerStats__lines"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      >
        <span id="playerStats__lines__thick" />
        <span id="playerStats__lines__thin" />
      </motion.div>

      <motion.h2
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Fullstack Developer
      </motion.h2>

      <motion.a
        href="https://github.com/MONSTER-SARAVANAN"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        GITHUB
      </motion.a>
    </motion.div>
  );
};




export default PlayerStats;
