import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function Buttonb({ colors, text, size }) {
  return (
    <Button variant="contained" color={colors} size={size}>
      {text}
    </Button>
  );
}
Buttonb.propTypes = {
  colors: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
