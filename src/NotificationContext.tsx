import { createContext, useContext, useState } from "react";

interface Notification {
  message: string;
  name: string;
}

interface NotificationContextType {
  notifications: Notification[];
  currentNotificationIndex: number;
  showNotification: boolean;
  nextNotification: () => void;
  setShowNotification: (visible: boolean) => void; // Add this
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications] = useState<Notification[]>([
    { message: "Hello there! First time here?", name: "Angela" },
    { message: "Come here Amigo! But not too close though.", name: "Pedro" },
    { message: "Uh? Another visitor...", name: "Lily" },
    { message: "Welcome young one!", name: "Old Joe" },
    { message: "Hey there buddy...", name: "Robert the Giant" },
  ]);

  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false); // Add state for visibility

  const nextNotification = () => {
    setCurrentNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length);
    setShowNotification(true); // Ensure it's visible when updating
  };

  return (
    <NotificationContext.Provider value={{ notifications, currentNotificationIndex, showNotification, nextNotification, setShowNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
