import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import Homepage from "./pages/home-page";
import Team from "./pages/team";
import Partnerships from "./pages/partnerships";
import ScrollToHash from "./components/scroll-to-hash";
import Footer from "./components/footer";
import Impacts from "./pages/impacts";
import Chapters from "./pages/chapters";
import Gallery from "./pages/gallery";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <NavBar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
