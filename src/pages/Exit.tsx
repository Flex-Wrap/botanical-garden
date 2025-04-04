import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Exit() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(true);

    return (
        <div 
            className="h-full w-full flex flex-col items-center justify-center bg-white text-white"
            style={{backgroundImage: "url('assets/endBG.png')"}}
        > 
        {/* Popup Overlay */}
        {showPopup && (
        <div
          className="absolute inset-0 flex items-start justify-center pt-10 w-full h-full"
          style={{
            backgroundColor: "rgba(47, 84, 55, 0.5)",
            backdropFilter: "blur(1px)",
          }}
        >
            <div className="w-4/5 max-w-md bg-white text-black p-[24px] rounded-[24px] shadow-lg flex flex-col">
                <div className="flex justify-between items-center">
                <h2 className="text-lime-green text-lg font-bold mb-[10px]">
                    Thank you for playing!
                </h2>
                <button onClick={() => setShowPopup(false)}>
                    <X className="w-6 h-6 text-gray-700" />
                </button>
                </div>
                <div className="flex flex-col items-center">
                    <p>Are you sure you want to exit the game?</p>
                    <img 
                        src="assets/exitButton.svg"
                        onClick={() => setShowPopup(false)}
                        className="w-[138px]"
                    />
                </div>
            </div>
        </div>
      )}
        </div>
    )
}