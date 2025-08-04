// import { Link, useLocation } from "react-router-dom";
// import astronautHelmet from "../assets/astronaut-helmet.png";
// import deadEye from "../assets/dead-eye.png";
// import stack from "../assets/stack.png";
// import envelope from "../assets/envelope.png";
// import "../styles/nav.css";

// export default function Nav() {
//     const location = useLocation();

//     const getNavPositionClass = () =>{
//         switch (location.pathname) {
//             case "/":
//                 return "nav-about";
//             case "/skills":
//                 return "nav-skills";
//             case "/projects":
//                 return "nav-projects";
//             case "/contact":
//                 return "nav-contact";
//            default:
//                 return  "";
//         }
          
//     };

//     const getPageTitle = () => {
//         switch (location.pathname) {
//             case "/":
//                 return "ABOUT";
//             case "/skills":
//                 return "SKILLS";
//             case "/projects":
//                 return "PROJECTS";
//             case "/contact":
//                 return "CONTACT";
//            default:
//                 return  "";
//     }
// }

//     const navPositionClass = getNavPositionClass();
//     const pageTitle = getPageTitle();

// const isCurrentPage =(navClass) => {
//     return navClass === navPositionClass;
//   };
//   const renderNavLink = (to, imgSrc,altText, navClass) =>{
//     const isCurrent = isCurrentPage(navClass);
//     const linkClass = isCurrent ? "nav-Link current":
//     "nav-link"

//     return (
//         <Link to={to} className={linkClass}>
//         <img src={imgSrc} alt={altText} />
//         {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
//         </Link>
//     );
//   };

//    return (
//     <nav className={`nav ${navPositionClass}`}>
//        {renderNavLink(
//         "/",
//         astronautHelmet,
//         "astronaut helmet icon",
//         "nav-about"
//        )}
//        {renderNavLink(
//         "/skills",
//         deadEye,
//         "deadEye icon",
//         "nav-skills"
//        )}
//        {renderNavLink(
//         "/projects",
//         stack,
//         "stack icon",
//         "nav-projects"
//        )}
//        {renderNavLink(
//         "/contact",
//         envelope,
//         "envelope icon",
//         "nav-contact"
//        )}
    
//     </nav>
//    );
// }





import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => navClass === navPositionClass;

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: [0, 8, -8, 0],
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={to} className={linkClass}>
          <motion.img
            src={imgSrc}
            alt={altText}
            className="nav-icon"
            animate={
              isCurrent
                ? {
                    y: [0, -4, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
          />
          {isCurrent && (
            <motion.h1
              className="page-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {pageTitle}
            </motion.h1>
          )}
        </Link>
      </motion.div>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", astronautHelmet, "astronaut helmet icon", "nav-about")}
      {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
      {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}
    </nav>
  );
}
