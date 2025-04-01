import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Onboarding from "./pages/Onboarding";
import StorySelection from "./pages/StorySelection";
import Map from "./pages/Map";
import Plant from "./pages/Plant";

function App() {
  return (
    <Router basename="/botanical-garden">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/story-selection" element={<StorySelection />} />
        <Route path="/map" element={<Map />} />
        <Route path="/plant" element={<Plant />} />
      </Routes>
    </Router>
  );
}

export default App;
