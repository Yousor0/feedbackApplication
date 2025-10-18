import PropTypes from "prop-types";

export default function Button({
  children,
  isDisabled,
  version = "primary",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn btn-${version} ${isDisabled ? "disabled" : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
