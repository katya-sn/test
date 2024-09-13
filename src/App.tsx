import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <Box component='body' bgcolor='primary.main'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
