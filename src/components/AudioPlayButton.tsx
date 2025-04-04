import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

type AudioPlayButtonProps = {
  name: string;
  category: string;
};

const AudioPlayButton: React.FC<AudioPlayButtonProps> = ({ name, category }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioSrc = `${import.meta.env.BASE_URL}assets/audio/${category}_${name}.mp3`;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      console.log(audioSrc);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="flex items-center gap-2 px-4 py-2 bg-lime-green text-white rounded-lg shadow-md hover:bg-blue-600 transition"
    >
      {isPlaying ? <Pause size={20} /> : <Play size={20} />} 
      <span>Play {name}</span>
      <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
    </button>
  );
};

export default AudioPlayButton;
