import React, { useState, useEffect } from 'react';

interface NotificationProps {
  message: string;
  targetLatitude: number;
  targetLongitude: number;
  radius: number;
  imageUrl: string;
  name: string;
  duration?: number;
}

const NotificationBar: React.FC<NotificationProps> = ({
  message,
  targetLatitude,
  targetLongitude,
  radius,
  imageUrl,
  name,
  duration = 3000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string | null>(null); // To store geolocation error message

  // Get the user's current location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
        },
        (error) => {
          // Handle the error based on error code
          if (error.code === error.PERMISSION_DENIED) {
            setError("Location access denied. Please enable location access.");
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            setError("Unable to determine location. Please check your GPS signal.");
          } else if (error.code === error.TIMEOUT) {
            setError("Location request timed out. Please try again.");
          } else {
            setError("An unknown error occurred while retrieving your location.");
          }
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  // Check if user is within the specified radius
  useEffect(() => {
    if (userLocation) {
      const distance = getDistance(
        userLocation.latitude,
        userLocation.longitude,
        targetLatitude,
        targetLongitude
      );

      if (distance <= radius) {
        setIsVisible(true);

        const timer = setTimeout(() => {
          setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
      }
    }
  }, [userLocation, targetLatitude, targetLongitude, radius, duration]);

  return (
    <>
      {error && <div className="fixed bottom-0 left-0 w-full bg-red-600 text-white py-2 text-center">{error}</div>}
      {isVisible && !error && (
        <div
          className="fixed bottom-0 left-0 w-full bg-white bg-opacity-40 rounded-t-xl shadow-lg py-4 px-6 flex items-center space-x-4"
          style={{ animation: 'slideIn 0.5s ease-out' }}
        >
          <img
            src={imageUrl}
            alt="Notification"
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance * 1000; // Convert to meters
};

export default NotificationBar;
