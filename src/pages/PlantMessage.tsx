import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import next from "/assets/next.svg";
import back from "/assets/backbutton.svg";
import { useStory } from "../StoryContext";

export default function PlantMessage() {
  const { name } = useParams<{ name: string }>();
  const { selectedStory } = useStory(); // Access selectedStory from context
  const [story, setStory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedStory) {
      fetch(`${import.meta.env.BASE_URL}/assets/stories.json`)
        .then((res) => res.json())
        .then((data) => {
          const matchedStory = data.find(
            (story: any) =>
              story.storytype.toLowerCase() === selectedStory.toLowerCase()
          );
          if (matchedStory) {
            const character = matchedStory.characters.find(
                (character: any) => character.name.toLowerCase() === name?.toLowerCase()
                
            );
            if (character) {
                setStory(character.story);
            }
          }
        })
        .catch((error) => console.error("Error loading story data:", error));
    }
  }, [selectedStory, name]);

    // Handle the "Back to map" action
    const handleBackToMap = () => {
        navigate("/map"); // Navigate to the map page
    };

    const sanitizedClassName = name ? `body-${name.replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "")}` : "default-class";

    const handleGoToChat = () => {
        navigate(`/plant/${name}`)

    };

  // Typing effect states
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 50; // Adjust typing speed (milliseconds per character)

  useEffect(() => {
    if (story) {
      setDisplayedText(""); // Reset displayed text before typing starts
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + story[index]); 
        index++;
        if (index >= story.length) clearInterval(interval);
      }, typingSpeed);
  
      return () => clearInterval(interval);
    }
  }, [story]); // Depend on `story` instead of `[selectedStory, name]`

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white text-white">
        <div className={sanitizedClassName}>
            {/* Back button */}
            <div className="back-button" onClick={handleBackToMap}>
                <img src={back} alt="Back to map" />
                <h3>Back to map</h3>
            </div>

        <div className="chat-container">
          {/* Angela's audio message */}
          <div className="audio-message">
            <img
              src={`${import.meta.env.BASE_URL}assets/${name}.png`}
              alt={`${name} Plant`}
            />
          </div>

          {/* Message box with typing effect */}
          <div className="message-box">
            <p className="message-text">{displayedText}</p>
          </div>

          {/* Chat with me button and next icon */}
          <div className="next-buttons">
            <button 
                onClick={handleGoToChat}
                className="bg-[#faf64c] text-[#292929] font-[Poppins] text-[18px] px-4 py-1 rounded-[20px]"
                >
                    Chat With Me 
            </button>
            <button onClick={handleGoToChat} className="bg-none"><img src={next} alt="Next" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}