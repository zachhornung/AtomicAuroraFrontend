import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { getRoutes } from "./routes";
import { cloneElement } from "react";

function App() {
  const routes = useRoutes(getRoutes());
  // const adminRoutes = useRoutes()
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AnimatePresence mode="wait">
        {cloneElement(routes || <></>, { key: location.pathname })}
      </AnimatePresence>
    </>
  );
}

export default App;
