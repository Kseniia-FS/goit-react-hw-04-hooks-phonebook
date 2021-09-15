import { IconButton } from "./Button.styled.jsx";
import PropTypes from "prop-types";
const Button = ({ onDeleteContacts, ariaLabel, type, children }) => {
  return (
    <IconButton type={type} aria-label={ariaLabel} onClick={onDeleteContacts}>
      {children}
    </IconButton>
  );
};

Button.propTypes = {
  onDeleteContacts: PropTypes.func,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
