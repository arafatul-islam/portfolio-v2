import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Reorder } from "@material-ui/icons";


// import css
import "../Styles/common.css";
import css from "../Styles/navbar.module.css";
const NavbarComp = () => {
  const [hamburger, setHamburger] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setHamburger(false);
  }, [location]);

  console.log(css);
  return (
    <>
      <nav className={css.navbar} id={hamburger ? css["open"] : css["close"]}>
        <div
          className={css.toggleButton}
          onClick={() => setHamburger((prevState) => !prevState)}
        >
          <h2>Arafatul Islam</h2>
          <Reorder />
        </div>
        <div className={css.mobileNav}>
          <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="projects">Projects</Link>
          </div>
          <div>
            <Link to="career">Career</Link>
            <Link to="skills">Skills</Link>
            <Link to="contact">Contact Me</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarComp;
