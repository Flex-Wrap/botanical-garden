import towerImage from '../assets/tower.png'; // Import your tower image file

function Onboarding() {
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
      <div className="absolute bottom-0 w-full h-1/2 bg-transparent flex flex-col items-center justify-center px-6 z-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-light-white mb-2">
          Step into a living story!
        </h1>

        {/* Subtitle */}
        <p className="text-base text-light-gray">
          Pick your vibe—playful adventure, romantic stroll, or deep dive into plant wisdom.
        </p>
      </div>
    </div>
  );
}

export default Onboarding;
