import StoryCard from "../components/StoryCard";
import { useNavigate } from "react-router-dom";

function StorySelection() {
    const navigate = useNavigate();

    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-red-900 text-white"
      style={{
        backgroundImage: "url(assets/storyBG.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <div className="flex flex-col gap-6">
          <StoryCard 
            icon="assets/romantic.svg" 
            name="Romantic" 
            description="Are you ready to fall in love with Botanical Garden?"
          />
          <StoryCard 
            icon="assets/family.svg" 
            name="Family" 
            description="Let’s explore the Garden secret family."
          />
          <StoryCard 
            icon="assets/academic.svg" 
            name="Academic" 
            description="Do you want to hear interesting facts from our habitants?"
          />
        </div>
        {/* Navigate Button */}
        <button 
          className="absolute bottom-4 bg-white text-red-900 px-6 py-2 rounded font-bold"
          onClick={() => navigate("/map", { state: { showPopup: true } })}
        >
          Go to Map
        </button>
      </div>
    );
}
  
export default StorySelection;
