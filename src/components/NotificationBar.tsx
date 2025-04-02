import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NotificationProps {
  message: string;
  name: string;
  isVisible: boolean;  // Receive visibility from parent
}

const NotificationBar: React.FC<NotificationProps> = ({
  message,
  name,
  isVisible,
}) => {

  const navigate = useNavigate(); // Initialize the navigate function
const handleContinue = () => {
    navigate("/plant"); // Redirect to the /onboarding2 route
};

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-0 left-0 w-80 bg-white bg-opacity-40 rounded-full shadow-lg py-4 px-6 flex items-center space-x-4 mb-8 mx-8"
          style={{ animation: 'slideIn 5s ease-out' }}
          onClick={handleContinue}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/${name}.png`}
            alt="Notification"
            className="absolute -top-15 -left-5 w-25 h-30 object-cover object-top"
          />
          <div className="flex flex-col ml-16">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationBar;
