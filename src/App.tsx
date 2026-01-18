import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from "./pages/Car";
import CompareDetail from "./component/Scroll/compareko/CompareDetail";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Car />} />
          <Route path="/compare" element={<CompareDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
