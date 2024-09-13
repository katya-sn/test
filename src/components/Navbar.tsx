import { Link, useLocation} from "react-router-dom";
import { navbarData } from "../data/navbarData";
import { ListItemButton, ListItemText } from "@mui/material";

export const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {navbarData.map((item) => (
        <ListItemButton
          component={Link}
          to={item.to}
          aria-label={item.name}
          key={item.name}
          alignItems="center"
          sx={{
            height: "100%",
            width: "90px",
            borderRadius: "50px",
            display: "flex",
            bgcolor: location.pathname === item.to ? 'secondary.main' : 'inherit',
            "&:hover": {
              bgcolor: '#97CEBD',
            },
          }}
        >
            <ListItemText
              sx={{ typography: "h4", textAlign: "center", color: {xs: 'primary.light', lg: 'primary.contrastText'} }}
              primary={item.name}
            />
        </ListItemButton>
      ))}
    </>
  );
};
