import React from "react";
import { motion } from "framer-motion";
import "../styles/playerStats.css";

const PlayerStats = () => {
    return (
        <motion.div
            id="playerStats"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
            <motion.h1
                className="glow-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                SARAVANAN M <span>LEVEL 24</span>
            </motion.h1>

            <div id="playerStats__lines">
                <span id="playerStats__lines__thick" />
                <span id="playerStats__lines__thin" />
            </div>

            <motion.h2
                className="glow-subtext"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Fullstack Developer
            </motion.h2>

            <motion.a
                href="https://github.com/MONSTER-SARAVANAN"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                GITHUB
            </motion.a>
        </motion.div>
    );
};

export default PlayerStats;
