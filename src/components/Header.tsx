import {
  Box,
  Drawer,
  IconButton,
  AppBar,
  List,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme";
import { useState } from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ShoppingCartOutlined } from "@mui/icons-material";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (v: boolean) => {
    setIsDrawerOpen(v);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        width: "100%",
        height: { xs: "62px", lg: "120px" },
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          p: 0,
          width: { xs: "319px", lg: "1290px" },
          height: { xs: "43px", lg: "58px" },
          alignSelf: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Logo />

        <List
          component="nav"
          sx={{
            display: { xs: "none", lg: "flex" },
            p: "0",
            width: "432px",
            height: "44px",
            backgroundColor: "primary.light",
            borderRadius: "50px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Navbar />
        </List>

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            sx={{
              display: { xs: "flex", lg: "none" },
              width: "34px",
              height: "34px",
              backgroundColor: "white",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            component={Link}
            to='/cart'
            sx={{
              backgroundColor: "secondary.main",
              width: { xs: "34px", lg: "44px" },
              height: { xs: "34px", lg: "44px" },
              textDecoration: 'none',
              "&:hover": {
                color: 'white',
              }
            }}
          >
            <ShoppingCartOutlined />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          component="aside"
          sx={{
            bgcolor: theme.palette.primary.dark,
            width: 250,
            height: "100%",
          }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: 2,
            width: "100%",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
            <Navbar />
            </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
