import towerImage from '../assets/tower.png';
import ButtonBar from "../components/ButtonBar"; // Import the ButtonBar component

function Onboarding() {
  // Callback for Skip button
  const handleSkip = () => {
    console.log("Skip button clicked");
    // Add logic for Skip button (e.g., navigate to another page)
  };

  // Callback for Continue button
  const handleContinue = () => {
    console.log("Continue button clicked");
    // Add logic for Continue button (e.g., proceed to next step)
  };

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center bg-lime-green text-white relative"
      style={{
        backgroundImage: `url(${towerImage})`,
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
