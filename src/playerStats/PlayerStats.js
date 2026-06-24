// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/playerStats.css";

// const PlayerStats = () => {
//     return (
//         <motion.div
//             id="playerStats"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 100, damping: 15 }}
//         >
//             <motion.h1
//                 className="glow-text"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//             >
//                 SARAVANAN M <span>LEVEL 25</span>
//             </motion.h1>

//             <div id="playerStats__lines">
//                 <span id="playerStats__lines__thick" />
//                 <span id="playerStats__lines__thin" />
//             </div>

//             <motion.h2
//                 className="glow-subtext"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//             >
//                 Fullstack Developer
//             </motion.h2>

//             <motion.a
//                 href="https://github.com/MONSTER-SARAVANAN"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="glow-link"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 GITHUB
//             </motion.a>
//         </motion.div>
//     );
// };

// export default PlayerStats;


import React from "react";
import { motion } from "framer-motion";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <motion.div
      id="playerStats"
      initial={{
        opacity: 0,
        x: -80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      {/* Aura */}

      <div className="player-aura" />

      {/* Header */}

      <div className="player-header">

        <motion.div
          className="rank-orb"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div>

          <motion.h1
            className="glow-text"
            animate={{
              textShadow: [
                "0 0 10px #00ddff",
                "0 0 40px #00ddff",
                "0 0 10px #00ddff",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            SARAVANAN M
          </motion.h1>

          <span className="level-tag">

            LEVEL 25

          </span>

        </div>

      </div>

      {/* XP */}

      <div className="xp-container">

        <span>XP</span>

        <div className="xp-bar">

          <motion.div
            className="xp-fill"
            initial={{
              width: 0,
            }}
            animate={{
              width: "86%",
            }}
            transition={{
              duration: 2,
            }}
          />

        </div>

      </div>

      {/* ROLE */}

      <motion.h2
        className="glow-subtext"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        Fullstack Developer
      </motion.h2>

      {/* BUTTON */}

      <motion.a
        href="https://github.com/MONSTER-SARAVANAN"
        target="_blank"
        rel="noreferrer"
        className="glow-link"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: .95,
        }}
      >
        ENTER GITHUB
      </motion.a>

    </motion.div>
  );
};

export default PlayerStats;