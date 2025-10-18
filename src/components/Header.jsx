import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({
  text = "Feedback UI",
  bgColor = "rgba(0,0,0,0.4)",
  textColor = "#ff6a95",
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textDecoration: "none",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={headerStyles}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
