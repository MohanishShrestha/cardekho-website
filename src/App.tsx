import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from "./pages/Car";
import CompareDetail from "./component/Scroll/compareko/CompareDetail";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// Footer Pages
import Careers from "./components/footerpages/About Cardekho/Careers";
import PrivacyPolicy from "./components/footerpages/About Cardekho/PrivacyPolicy";
import CorporatePolicies from "./components/footerpages/About Cardekho/CorporatePolicies";
import Investors from "./components/footerpages/About Cardekho/Investors";
import FAQs from "./components/footerpages/About Cardekho/FAQs";
import AboutUs from "./components/footerpages/About Cardekho/AboutUs";
import TermsConditions from "./components/footerpages/About Cardekho/TermsConditions";

function App() {
  return (
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />

        <main className="grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Car />} />
            <Route path="/compare" element={<CompareDetail />} />

            {/* Footer Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/corporate-policies" element={<CorporatePolicies />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;
