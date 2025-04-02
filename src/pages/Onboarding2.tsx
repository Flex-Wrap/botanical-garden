import { useNavigate } from 'react-router-dom';
import ButtonBar from "../components/ButtonBar"; // Import the ButtonBar component

function OnboardingTwo() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Callback for Skip button - Navigates to the Map page
  const handleSkip = () => {
    navigate("/map"); // Redirect to the /map route
  };

  // Callback for Continue button - Navigates to OnboardingTwo page
  const handleContinue = () => {
    navigate("/onboarding3"); // Redirect to the /onboarding2 route
  };

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center bg-lime-green text-white relative"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/onboarding2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Bottom Content (On Top of Everything) */}
      <div className="absolute bottom-0 w-full h-8/9 bg-transparent flex flex-col items-center justify-center px-6 z-10 pb-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-deep-green mb-2">
        Move, explore, and discover!
        </h1>

        {/* Subtitle */}
        <p className="text-base text-deep-green">
        Watch yourself on the map as you wander through the garden’s hidden gems.
        </p>

        {/* Button Bar at the Bottom */}
        <div className="w-full mt-auto backdrop-blur-sm rounded-full"
        style={{ backgroundColor: "rgba(47, 84, 55, 0.5)" }}>
        <ButtonBar 
            progress={[false, true, false]} 
            onSkip={handleSkip} // Pass the skip callback
            onContinue={handleContinue} // Pass the continue callback
        />
        </div>

      </div>
    </div>
  );
}

export default OnboardingTwo;
