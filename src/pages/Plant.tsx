import { useState, useEffect } from "react";
import ChatBot from "../components/ChatBot";
import { useParams } from "react-router-dom";

export default function Plant() {
  const {name} = useParams<{name: string}>();

  const [selectedPlant, setSelectedPlant] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  if (name) {
    {/*Fetch the plant data when the component mounts or the 'name' param changes*/}
    useEffect(() => {
      const fetchPlantData = async () => {
        try {
          const response = await fetch("/assets/characters.json");
          const data = await response.json();
          
          const plant = data.find((plant: { name: string }) => plant.name.toLowerCase() === name.toLowerCase());
          
          if (plant) {
            setSelectedPlant(plant);
          } else {
            console.error("Plant not found");
          }
        } catch (error) {
          console.error("Error fetching the plant data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPlantData();
    }, [name]); 

    if (loading) {
      return <div>Loading...</div>;
    }
}
  if (!selectedPlant) {
    return <div>Plant not found!</div>;
  }

    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-red-900 text-white">
        <ChatBot 
          name={selectedPlant.name}
          prompt={selectedPlant.prompt}
          presetResponses={selectedPlant.presetResponses}
          topMessage={selectedPlant.topMessage}
        />
      </div>
    );
  }
  