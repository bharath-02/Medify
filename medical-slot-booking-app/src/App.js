import { Outlet, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

function App() {
  const location = useLocation();
  const hideDownloadApp = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      <CssBaseline />
      <Outlet />
      {!hideDownloadApp && <DownloadApp />}
      <Footer />
    </div>
  );
}

export default App;
