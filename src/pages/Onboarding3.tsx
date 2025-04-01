import { useNavigate } from 'react-router-dom';
import onboarding3 from '../assets/onboarding3.png';
import ButtonBar from "../components/buttonBar"; // Import the ButtonBar component

function OnboardingThree() {
    const navigate = useNavigate(); // Initialize the navigate function

    // Callback for Skip button - Navigates to the Map page
    const handleSkip = () => {
      navigate("/map"); // Redirect to the /map route
    };
  
    // Callback for Continue button - Navigates to OnboardingTwo page
    const handleContinue = () => {
      navigate("/map"); // Redirect to the /onboarding2 route
    };

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center bg-lime-green text-white relative"
      style={{
        backgroundImage: `url(${onboarding3})`,
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
        Chat with plants? Yep!
        </h1>

        {/* Subtitle */}
        <p className="text-base text-light-gray">
        Get closer, hear their stories, and have a little convo with nature.
        </p>

        {/* Button Bar at the Bottom */}
        <div className="w-full mt-auto">
          <ButtonBar 
            progress={[false, false, true]} 
            onSkip={handleSkip} // Pass the skip callback
            onContinue={handleContinue} // Pass the continue callback
          />
        </div>
      </div>
    </div>
  );
}

export default OnboardingThree;
