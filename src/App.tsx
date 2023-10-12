import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Merch } from "./views/Merch";
import { About } from "./views/About";
import { Listen } from "./views/Listen";
import { Provider } from "react-redux";
import { appStorePersistor, store } from "./state/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <PersistGate persistor={appStorePersistor}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/about" element={<About />} />
              <Route path="/listen" element={<Listen />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
