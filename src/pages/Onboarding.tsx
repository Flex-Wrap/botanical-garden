import { useNavigate } from 'react-router-dom';
import ButtonBar from "../components/ButtonBar"; // Import the ButtonBar component

function Onboarding() {
  // Callback for Skip button
  const navigate = useNavigate(); // Initialize the navigate function

  // Callback for Skip button - Navigates to the Map page
  const handleSkip = () => {
    navigate("/map"); // Redirect to the /map route
  };

  // Callback for Continue button - Navigates to OnboardingTwo page
  const handleContinue = () => {
    navigate("/onboarding2"); // Redirect to the /onboarding2 route
  };

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center bg-lime-green text-white relative"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/onboarding1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#294938]/70 to-[#294938]"></div>

      {/* Bottom Content (On Top of Everything) */}
      <div className="absolute bottom-0 w-full h-3/8 bg-transparent flex flex-col items-center justify-center px-6 z-10 pb-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-light-white mb-2">
          Step into a living story!
        </h1>

        {/* Subtitle */}
        <p className="text-base text-light-gray">
          Pick your vibe—playful adventure, romantic stroll, or deep dive into plant wisdom.
        </p>

        {/* Button Bar at the Bottom */}
        <div className="w-full mt-auto">
          <ButtonBar 
            progress={[true, false, false]} 
            onSkip={handleSkip} // Pass the skip callback
            onContinue={handleContinue} // Pass the continue callback
          />
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
