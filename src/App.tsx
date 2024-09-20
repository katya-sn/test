import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Box, Typography } from "@mui/material";

function App() {
  const location = useLocation();

  return (
    <Box bgcolor="primary.main">
      <Header />
      <main>
        {location.pathname === "/" ? (
          <Box component="div" sx={{ padding: 2, textAlign: "center", height: {
            xs: 'auto',
            lg: `calc(100vh - 367px)`
          },}}>
            <Typography variant="h1">Welcome to the Home Page</Typography>
          </Box>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </Box>
  );
}

export default App;
