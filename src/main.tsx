import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store";
import ScrollToTop from "./component/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <App />
      {/* <Login1/> */}
    </Provider>
  </BrowserRouter>,
);
