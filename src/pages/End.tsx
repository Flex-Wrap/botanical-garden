import { useNavigate } from "react-router-dom"
import back from '/assets/backbutton.svg';

export default function End() {
    const navigate = useNavigate();

    return (
        <div 
            className="h-full w-full flex flex-col items-center justify-center bg-white text-white"
            style={{backgroundImage: "url('assets/endBG.png')"}}
        > 
            <div 
                className="back-button self-start ml-4" 
                onClick={() => navigate("/map")}
                >
                <img src={back} alt="Back" />
                <h3 className="text-xl">Back to map</h3>
            </div>
            <div className="chat-container">
                <div className="relative flex flex-row items-center bg-[#e1eed9] w-auto h-[115px] rounded-[16px] px-[10px] py-[10px] mb-[30px] overflow-visible">
                    <img
                        src="assets/end.svg"
                        alt="butterfly"
                    />
                    <h4 className="text-xl text-medium text-black">Congratulations!</h4>
                </div>

                <div className="w-full flex flex-row items-center justify-between gap-x-10 mb-[30px]">
                    <img src="assets/progress.svg" />
                    <h4 className="text-xl text-medium text-black">You have found 6/9 plants!</h4>
                </div>

                <p className="bg-[#294938] px-[14px] py-[10px] rounded-[12px] font-light">
                    Amazing! You've explored a new  garden family. Remember, kindness and teamwork always help families grow happier!
                </p>

                <div className="next-buttons">
                    <button 
                        className="bg-[#faf64c] text-[#292929] font-[Poppins] text-[18px] text-semibold px-[30px] py-[16px] rounded-[100px]"
                        onClick={() => navigate("/map")}
                        >
                            Continue Game
                    </button>
                    <button 
                        className="bg-[#294938] text-white font-[Poppins] text-[18px] text-semibold px-[40px] py-[16px] rounded-[100px]"
                        onClick={() => navigate("/exit", { state: { showPopup: true } })}
                        >
                            Exit
                    </button>
                </div>
            </div>
      </div>
    )
}