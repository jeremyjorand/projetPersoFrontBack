import Button from "@mui/material/Button";

export default function Buttonb({ colors, text, size }) {
  return (
    <Button variant="contained" color={colors} size={size}>
      {text}
    </Button>
  );
}
