import ChatBot from "../components/ChatBot";

function Plant() {
  const presetResponses={
    "For how long have you been living here?": "Oh, darling, I haven’t been here too long, just enough time to make my mark. A few seasons, but trust me, I’ve already got the whole place buzzing with my energy.",
    "Do you like anybody from the garden?": "Oh, I’ve got my eye on that lavender! But, let’s be real, no one quite matches my wild energy. I’m my own favorite, you know?😌",
    "What do you like about your neighbours?": "Well, Pedro the Cactus is prickly like me, so we get each other. The roses? They’ve got drama, and I love it!"
}
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-red-900 text-white">
        <ChatBot 
          name="Angela" 
          prompt="You are a rebellious carob tree. You're spiky, energetic, love gossip, and are proud of your bold, lesbian personality. You're tall, love places like Portugal, Italy, and Morocco, and aren't afraid to speak your mind.  Don't answear too long."
          presetResponses={presetResponses}
          topMessage="Oh, my friend! Got any juicy gossip to share?"
        />
      </div>
    );
  }
  
  export default Plant;
  