import { Link } from "react-router-dom";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div className={`header ${darkMode ? "dark" : "light"}`}>
        <div className="left">
          <Link to={"/"}>
            <h5 className={`${darkMode ? "dark" : "light"}`}>
              Where in the world
            </h5>
          </Link>
        </div>
        <div className="right" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
