import React, { useState, useEffect } from "react";

const TextToSpeech: React.FC<{ text: string }> = ({ text }) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [utterances, setUtterances] = useState<SpeechSynthesisUtterance[]>([]);
  const [displayPlay, setDisplayPlay] = useState<boolean>(true);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const chunks = text.match(/.{1,200}/g); 
    
    const voices = synth.getVoices();

    if (chunks && synth) { 
      const utterances = chunks.map(chunk => {
        const u = new SpeechSynthesisUtterance(chunk);
        u.rate = 1; 
        return u;
      });
      setUtterances(utterances);

      utterances.forEach(utterance => synth.speak(utterance));
    }

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      setDisplayPlay(false)
      utterances.forEach(utterance => synth.resume());
    } else {
      setDisplayPlay(false)
      utterances.forEach(utterance => synth.speak(utterance));

    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    utterances.forEach(utterance => synth.pause());
    setDisplayPlay(true)
    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    utterances.forEach(utterance => synth.cancel());
    setDisplayPlay(true)
    setIsPaused(false);
  };

  if (typeof window.speechSynthesis === 'undefined') {
    console.log("type  ", window.speechSynthesis)
return null
  } else{
    console.log("type  ", window.speechSynthesis)

  }

  return (
    <div className="text-white mt-3 ">
      {displayPlay ? (
        <button onClick={handlePlay} aria-label="Play" title="Play" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-play-circle-fill mr-5  hover:text-green-300 hover:shadow-lg rounded-full hover:shadow-white  "
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
          </svg>
        </button>
      ) : (
        <button onClick={handlePause} aria-label="Pause" title="Pause" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi mr-5 bi-pause-circle-fill hover:text-red-300 hover:shadow-lg rounded-full hover:shadow-white " viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
          </svg>
        </button>
      )}
      <button onClick={handleStop} aria-label="Stop" title="Stop" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stop-circle-fill hover:text-yellow-300 hover:shadow-lg rounded-full hover:shadow-white " viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z"/>
        </svg>
      </button>
    </div>
  );
};

export default TextToSpeech;
