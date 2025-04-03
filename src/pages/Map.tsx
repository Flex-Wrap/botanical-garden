import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotificationBar from "../components/NotificationBar";
import { ArrowLeft, X } from "lucide-react";
import { useStory } from "../StoryContext"; // Import the context hook

interface Notification {
  message: string;
  name: string;
}

function Map() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedStory } = useStory(); // Access selectedStory from context
  const [showPopup, setShowPopup] = useState(
    location.state?.showPopup || false
  );
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [concept, setConcept] = useState<string | null>(null);

  const notifications: Notification[] = [
    { message: "Hello there! First time here?", name: "Angela" },
    { message: "Come here Amigo! But not too close though.", name: "Pedro" },
    { message: "Uh? Another visitor...", name: "Lily" },
    { message: "Welcome young one!", name: "Old Joe" },
    { message: "Hey there buddy...", name: "Robert the Giant" },
  ];

  const handleShowNotification = () => {
    setShowNotification(true);
    setCurrentNotificationIndex(
      (prevIndex) => (prevIndex + 1) % notifications.length
    );
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  {
    /* THIS IS THE STORY READER USEEFFECT */
  }
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
            setConcept(matchedStory.concept);
          }
        })
        .catch((error) => console.error("Error loading story data:", error));
    }
  }, [selectedStory]);

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center bg-deep-green text-white"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/map.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Navigation Bar */}
      <div className="absolute top-3 left-0 w-full bg-transparent p-4 flex items-center gap-5">
        <button onClick={() => navigate("/story-selection")}>
          <ArrowLeft className="text-tight-black" />
        </button>
        <span className="text-deep-green text-lg">Choose another story</span>
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <div
          className="absolute inset-0 flex items-start justify-center pt-10 w-full h-full"
          style={{
            backgroundColor: "rgba(47, 84, 55, 0.5)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="w-4/5 max-w-md bg-white text-black p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-lime-green text-lg font-bold">
                Greetings, adventurer!
              </h2>
              <button onClick={() => setShowPopup(false)}>
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            <p className="mt-2 text-sm">{concept || "Loading..."}</p>
          </div>
        </div>
      )}

      {/* Check Button */}
      {!showNotification && (
        <button
          className="absolute bottom-0 mb-8 bg-lemon-yellow text-deep-green font-bold py-2 px-8 rounded-full mt-4"
          onClick={handleShowNotification}
        >
          Check
        </button>
      )}
      {showNotification && (
        <NotificationBar
          message={notifications[currentNotificationIndex].message}
          name={notifications[currentNotificationIndex].name}
          isVisible={showNotification}
        />
      )}
    </div>
  );
}

export default Map;
