import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 1; // Increment progress
      });
    }, 30); // Adjust speed (30ms * 100 = ~3 seconds)

    return () => clearInterval(interval);
  }, []);

  // Navigate to onboarding when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => navigate("/onboarding"), 500); // Small delay before navigation
    }
  }, [progress, navigate]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-deep-green px-4">
      <h1 className="text-xl mb-4 text-beige">Loading...</h1>
      <div className="w-full max-w-xs bg- rounded-full h-2">
        <div
          className="bg-[#faf64c] h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
