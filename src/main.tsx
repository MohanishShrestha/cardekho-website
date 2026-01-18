import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store";
import Login from "./pages/Login";
import Login1 from "./pages/Login1";
import Test3 from "./practiseOnly/test3";
import Test2 from "./practiseOnly/Test2";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      {/* <Login /> */}
      {/* <Login1/> */}
    </Provider>

    {/* <CarSpecsCard /> */}
    {/* <Test2 /> */}
    {/* <Test3 /> */}
  </BrowserRouter>
);
