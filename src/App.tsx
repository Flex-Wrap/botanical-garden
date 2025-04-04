import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Onboarding from "./pages/Onboarding";
import StorySelection from "./pages/StorySelection";
import Map from "./pages/Map";
import Plant from "./pages/Plant";
import OnboardingTwo from "./pages/Onboarding2";
import OnboardingThree from "./pages/Onboarding3";
import PlantMessage from "./pages/PlantMessage";
import End from "./pages/End";
import Exit from "./pages/Exit";

function App() {
  return (
    <Router basename="/botanical-garden">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding2" element={<OnboardingTwo />} />
        <Route path="/onboarding3" element={<OnboardingThree />} />
        <Route path="/story-selection" element={<StorySelection />} />
        <Route path="/map" element={<Map />} />
        <Route path="/plant/:name" element={<Plant />} />
        <Route path="/plantMessage/:name" element={<PlantMessage />} />
        <Route path="/end" element={<End />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </Router>
  );
}

export default App;

