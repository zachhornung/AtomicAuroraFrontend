import "./App.css";
import 'react-toastify/dist/ReactToastify.css'
import { useLocation, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { appStorePersistor, store } from "./state/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { AnimatePresence } from "framer-motion";
import { getRoutes } from "./routes";
import { cloneElement } from "react";

function App() {
  const routes = useRoutes(getRoutes());
  // const adminRoutes = useRoutes()
  const location = useLocation();
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={appStorePersistor}>
          <ToastContainer />
          <AnimatePresence mode="wait">
            {cloneElement(routes || <></>, { key: location.pathname })}
          </AnimatePresence>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
