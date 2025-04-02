import { useState, useEffect } from 'react';
import NotificationBar from "../components/NotificationBar";

interface Notification {
  message: string;
  name: string;
}

function Map() {
  // Create an array of notifications with appropriate images based on plant names
  const notifications: Notification[] = [
    {
      message: "Hello there! First time here?",
      name: "Angela",
    },
    {
      message: "Hello There! First time here?",
      name: "Angela",
    },
    {
      message: "Come here Amigo! But not too close though.", 
      name: "Pedro",
    },
    {
      message: "Uh? Another visitor...", 
      name: "Lily",
    },
    {
      message: "Welcome young one!", 
      name: "Old Joe",
    },
    {
      message: "Hey there buddy...",
      name: "Robert the Giant",
    },
    {
      message: "Hello! Seems you came to the Bamboo Grove!",
      name: "Takara",
    },
    {
      message: "Can you see me? I am over the pond!",
      name: "Sofia",
    },
    {
      message: "Welcome to the Botanical Garden wanderer.",
      name: "Queen Petra",
    },
    {
      message: "Oh! Glad you found me!",
      name: "Jack the Homeless",
    },
  ];

  const [showNotification, setShowNotification] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const handleShowNotification = () => {
    setShowNotification(true);  // Show notification
    // Move to the next notification in the array
    if (currentNotificationIndex < notifications.length - 1) {
      setCurrentNotificationIndex(currentNotificationIndex + 1);
    } else {
      setCurrentNotificationIndex(0); // Reset back to the first notification
    }
  };

  // Hide notification after a specified duration
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false); // Hide the notification
      }, 6000); // The duration is 3000ms or 3 seconds

      return () => clearTimeout(timer);  // Cleanup the timeout if component unmounts or changes
    }
  }, [showNotification]);  // This effect runs when `showNotification` changes

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-deep-green text-white"
    style={{
      backgroundImage: `url(${import.meta.env.BASE_URL}assets/map.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
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
          isVisible={showNotification} // Pass visibility control to the NotificationBar
        />
      )}
    </div>
  );
}

export default Map;
