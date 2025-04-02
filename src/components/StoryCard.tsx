import { useNavigate } from "react-router-dom";
import { useStory } from "../StoryContext";

interface Props {
    icon: string;
    name: string;
    description: string;
}

export default function StoryCard({icon, name, description} : Props) {
    const navigate = useNavigate(); // Initialize the navigate function
    const { setSelectedStory } = useStory();
    const handleContinue = () => {
        setSelectedStory(name);
        navigate("/map", { state: { showPopup: true } }) // Redirect to the /onboarding2 route
      };

    return (
        <div className="flex flex-row gap-5 relative p-4 bg-[#E1EED9] rounded-2xl w-[360px] items-top">
            <img src={icon}/>
            <div>
                <h3 className="text-[20px] font-semibold text-[#294938]">{name}</h3>
                <p className="text-[14px] font-normal text-[#294938]">{description}</p>
            </div>
            <button className="absolute bottom-2 right-2" onClick={handleContinue}><img src="assets/continueButton.svg"/></button>
        </div>
    )
}
