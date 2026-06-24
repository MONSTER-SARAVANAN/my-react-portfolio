import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import certificate from "../assets/certificate.png";
import resume from "../assets/resume.png";
import envelope from "../assets/envelope.png";

import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      title: "ABOUT",
      icon: astronautHelmet,
      alt: "about icon",
    },

    {
      path: "/skills",
      title: "SKILLS",
      icon: deadEye,
      alt: "skills icon",
    },

    {
      path: "/projects",
      title: "PROJECTS",
      icon: stack,
      alt: "projects icon",
    },

    {
      path: "/certificates",
      title: "CERTIFICATES",
      icon: certificate,
      alt: "certificate icon",
    },

    {
      path: "/resume",
      title: "RESUME",
      icon: resume,
      alt: "resume icon",
    },

    {
      path: "/contact",
      title: "CONTACT",
      icon: envelope,
      alt: "contact icon",
    },
  ];

  return (
    <motion.nav
      className="nav"
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {navItems.map((item) => {
        const active = location.pathname === item.path;

        return (
          <motion.div
            key={item.path}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <Link
              to={item.path}
              className={`nav-link ${active ? "current" : ""}`}
            >
              <motion.img
                src={item.icon}
                alt={item.alt}
                className="nav-icon"
                animate={
                  active
                    ? {
                        y: [0, -4, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <motion.span
                className="page-title"
                initial={false}
                animate={{
                  opacity: active ? 1 : 0.75,
                }}
              >
                {item.title}
              </motion.span>

              {active && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeIndicator"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28,
                  }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}