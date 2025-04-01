import { ArrowRight } from "lucide-react";
import ProgressMarker from "./ProgressMarker";

type ButtonBarProps = {
  progress: boolean[]; // Progress dots array
  onSkip: () => void; // Callback for the "Skip" button
  onContinue: () => void; // Callback for the "Continue" button
};

const ButtonBar: React.FC<ButtonBarProps> = ({ progress, onSkip, onContinue }) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4">
      {/* Skip Button */}
      <button
        className="text-full-white underline bold"
        onClick={onSkip} // Trigger the onSkip callback
      >
        Skip
      </button>

      {/* Progress Marker */}
      <ProgressMarker
        progress={progress}
        selectedColor="#FAF64C" // Lemon Yellow
        notSelectedColor="#D4D7D6" // Light Gray
      />

      {/* Continue Button */}
      <button
        className="w-12 h-12 flex items-center justify-center bg-lemon-yellow rounded-full shadow-lg"
        onClick={onContinue} // Trigger the onContinue callback
      >
        <ArrowRight className="text-tight-black" />
      </button>
    </div>
  );
};

export default ButtonBar;
