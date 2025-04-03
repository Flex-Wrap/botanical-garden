import React, { useState, useRef } from 'react';

interface AudioPlayerProps {
  name: string;
  category: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ name, category }) => {
  // Build the path to the mp3 file based on name and category
  const audioFilePath = `${import.meta.env.BASE_URL}/assets/audio/${category}_${name}.mp3`;

  // State to track playing status
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play/pause toggle function
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
      {/* Play button (using Lucid React for triangle button) */}
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-blue-500 text-white rounded-full flex justify-center items-center hover:bg-blue-600 focus:outline-none"
      >
        {/* Play triangle icon (using Lucid React icon style or custom) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-6 h-6 ${isPlaying ? 'rotate-180' : ''}`}
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      {/* Audio element */}
      <audio ref={audioRef} src={audioFilePath} />

      {/* Waveform visualization */}
      <div className="flex-grow w-full h-2">
        {/* <AudioWaveform src={audioFilePath} /> */}
      </div>
    </div>
  );
};

export default AudioPlayer;
