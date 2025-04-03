import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import next from "/assets/next.svg";
import back from "/assets/backbutton.svg";

export default function PlantMessage() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

    // Handle the "Back to map" action
    const handleBackToMap = () => {
        navigate("/map"); // Navigate to the map page
    };

    const sanitizedClassName = name ? `body-${name.replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "")}` : "default-class";
    console.log(sanitizedClassName);

    const handleGoToChat = () => {
        navigate(`/plant/${name}`)

    };

  // Full message
  const fullMessage = `Greetings, I’m ${name} (Carob Tree, Ceratonia siliqua) — the rebellious daughter of our garden family. I’m a flowering evergreen tree, forever young and full of energy.

    My appearance might seem a bit spiky because of my brown pods, but they serve as a natural chocolate substitute, packed with fiber and calcium. Among my sisters, I grow the tallest — reaching up to 15 meters. My favorite places are Portugal, Italy, and Morocco, where the carob tree is celebrated and widely produced.`;

  // Typing effect states
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 50; // Adjust typing speed (milliseconds per character)

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText((prev) => prev + fullMessage[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullMessage]);

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
            <button onClick={handleGoToChat}>Chat With Me</button>
            <button onClick={handleGoToChat}><img src={next} alt="Next" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}