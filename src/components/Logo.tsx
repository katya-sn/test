import { Button, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Button
      component={Link}
      to={"/home"}
      sx={{
        textDecoration: 'none',
        display: "flex",
        alignItems: "center",
        gap: { xs: "16px", lg: "29px" },
      }}
    >
      <img src={logo} alt="logo" style={{ height: "43px" }} />
      <Typography variant="h2">LivroMudro</Typography>
    </Button>
  );
};
