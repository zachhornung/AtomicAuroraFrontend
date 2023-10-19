import "./App.css";
import {
  useLocation,
  useRoutes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { appStorePersistor, store } from "./state/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { AnimatePresence } from "framer-motion";
import { getRoutes } from "./routes";
import { cloneElement } from "react";

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={appStorePersistor}>
//         <ToastContainer />
//         <BrowserRouter>
//           <Routes>
//             <Route index element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/shows" element={<ShowsView />} />
//             <Route path="/merch" element={<Merch />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/listen" element={<Listen />} />
//           </Routes>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   );
// }

function App() {
  const element = useRoutes(getRoutes());
  const location = useLocation();
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <PersistGate persistor={appStorePersistor}>
          <AnimatePresence mode="wait">
            {cloneElement(element || (<></>), { key: location.pathname })}
          </AnimatePresence>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
