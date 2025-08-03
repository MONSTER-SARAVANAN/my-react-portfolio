import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, 
menuItem }) => {
const subContainerClass = `sub-container-${menuItem}`

    return (
      // <div className={classNames(subContainerClass, { "active-subheading":
      //   active })}
      //   >
      //   <h3 onClick={onClick}> {title}</h3>
      //   <div className="p-container">{content}</div>

      // </div>

      <motion.div
            className={classNames(subContainerClass, { "active-subheading": active })}
            layout
          >
            <motion.h3
              onClick={onClick}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              {title}
            </motion.h3>
      
            <AnimatePresence>
              {active && (
                <motion.div
                  className="p-container"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
    );
  };

export default AboutSubheading;
