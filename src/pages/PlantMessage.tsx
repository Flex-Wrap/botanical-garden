import { useParams, useNavigate } from 'react-router-dom';
import next from '/assets/next.svg';
import back from '/assets/backbutton.svg';

export default function PlantMessage() {
    const { name } = useParams<{ name: string }>(); // Get the plant name from URL parameters
    const navigate = useNavigate(); // Initialize the navigate function

    // Handle the "Back to map" action
    const handleBackToMap = () => {
        navigate("/map"); // Navigate to the map page
    };

    const handleGoToChat = () => {
        navigate(`/plant/${name}`)

    };

    return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white text-white">
        <div className={`body-${name}`}>
            {/* Back button */}
            <div className="back-button" onClick={handleBackToMap}>
                <img src={back} alt="Back to map" />
                <h3>Back to map</h3>
            </div>

            <div className="chat-container">
                {/* Angela's audio message */}
                <div className="audio-message">
                    <img src={`${import.meta.env.BASE_URL}assets/${name}.png`} alt={`${name} Plant`} />
                </div>

                {/* The message box with plant details */}
                <div className="message-box">
                    <p className="message-text">
                        Greetings, I’m {name} (Carob Tree, Ceratonia siliqua) — the rebellious daughter of our garden family. I’m a flowering evergreen tree, forever young and full of energy.
                        <br />
                        My appearance might seem a bit spiky because of my brown pods, but they serve as a natural chocolate substitute, packed with fiber and calcium. Among my sisters, I grow the tallest — reaching up to 15 meters. My favorite places are Portugal, Italy, and Morocco, where the carob tree is celebrated and widely produced.
                    </p>
                </div>   

                {/* Chat with me button and next icon */}
                <div className="next-buttons" onClick={handleGoToChat}>
                    <button>Chat With Me</button>
                    <img src={next} alt="Next" />
                </div>  
            </div>
        </div>
    </div>
    );
}
