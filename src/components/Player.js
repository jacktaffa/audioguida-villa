import { Play } from 'next/font/google';
import styles from './Player.module.css';
import Script from 'next/script';
import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import useTranslation from 'next-translate/useTranslation';

export function Player({src}){
    const [isPlaying, setIsPlaying] = useState(false)
    const [wasPlaying, setWasPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(src,
        { 
            onend: () => setIsPlaying(false),
          }
        );
    /* function to handling button */
    const playingButton = () =>{
        if (isPlaying){
            pause();
            setIsPlaying(false)
        }
        else{
            play();
            setIsPlaying(true);
        }
    }

    const moveSlider = (how) => {
        if(sound){
            const newTime = sound.seek() + how; // compute the new time
        sound.seek(newTime); // move to the new time
        const min = Math.floor(newTime / 60);
        const sec = Math.floor(newTime % 60);
        setCurrTime({
          min,
          sec,
        });
        }
    }


    const [time, setTime] = useState({
        min: 0,
        sec: 0
      });
      const [currTime, setCurrTime] = useState({
        min: 0,
        sec: 0
      });
    
      const [seconds, setSeconds] = useState();
      
    useEffect(()=>{
        const sec = duration /1000;
        const min = Math.floor(sec/60);
        const secRemain = Math.floor (sec%60);
        const time = {
            min: min,
            sec: secRemain
        };
    },  [isPlaying]);
    
    useEffect(() => {
        const interval = setInterval(() => {
          if (sound) {
            setSeconds(sound.seek([])); // setting the seconds state with the current state
            const min = Math.floor(sound.seek([]) / 60);
            const sec = Math.floor(sound.seek([]) % 60);
            setCurrTime({
              min,
              sec,
            });

            const secD = duration /1000;
            const minD = Math.floor(secD/60 - min);
            var secRemain = Math.floor (secD%60 - sec);
            if(secRemain < 0 ) secRemain = 59 - sec
            const currtime = {
                min: minD,
                sec: secRemain
            };
            console.log(currtime);
            setTime(currtime)

          }
        }, 100);
        return () => clearInterval(interval);
      }, [sound]);

    return (<div className='playerComponent'>
      <div className='flex flex-col'>
        <div className="time">
          <span>
            {currTime.min.toString().padStart(2,'0')}:{currTime.sec.toString().padStart(2,'0')}
          </span>&nbsp;/&nbsp;
          <span>
            {time.min.toString().padStart(2,'0')}:{time.sec.toString().padStart(2,'0')}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline py-5"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
          onMouseDown={
            () => { if(isPlaying){  setWasPlaying(true);  playingButton();} else  setWasPlaying(false); } 
        }
          onMouseUp={() => {
          if(wasPlaying){
            playingButton();
          }
    }}
        />
      </div>
      <div className='playerControllers'>
    <button className='prevTenSecondsButton' onClick={() => moveSlider(-20)}>
        <IconContext.Provider value={{ size:"3em", color: "var(--main-color)"}} >
        <BiSkipPrevious />
        </IconContext.Provider>
    </button>
    {!isPlaying ? (
        <button className="playButton" onClick={playingButton} >
            <IconContext.Provider value={{ size: "3em", color: "var(--main-color)" }}>
                <AiFillPlayCircle />
            </IconContext.Provider>
        </button>
    ) : ( 
        <button className="playButton" onClick={playingButton} >
            <IconContext.Provider value={{ size: "3em", color: "var(--main-color)" }}>
            <AiFillPauseCircle />
            </IconContext.Provider>
        </button>
  )}
    <button className="nextTenSecondsButton" onClick={() => moveSlider(20)}>
            <IconContext.Provider value={{ size: "3em", color: "var(--main-color)" }}>
                <BiSkipNext />
            </IconContext.Provider>
            </button>
        </div>
    </div>)

    
      



}


/*
export  function Player({src}){
    const { t, lang } = useTranslation('common')
    const [isPlaying, setIsPlaying] = useState(false);
    const fileType  = src.split(".").at(-1);
 
    function handleAudio() {
        const audio = document.getElementById("mainAudio");
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          audio.play();
          setIsPlaying(true);
        }
      }

    return (
        <div>
            <div className="player" id="player">
            <div className="content closed"></div>
            <div className="row align-center">
        <div className="players-buttons buttons flex w-full bg-main  rounded-md items-center justify-center p-3 my-3" onClick={handleAudio}>
            <div id="previous-button" className='hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"></path>
                </svg>
            </div>
        <strong data-label='listen' style={{ color : "white" }}>{isPlaying ? t("pause") : t("play")}
</strong><br/>
        <div id="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={20} width={20}>
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" fill="white"></path>
            </svg> 
        </div>
        <div id="pause-button" className="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path>
            </svg>
        </div>
        <div id="next-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
               <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"></path>
            </svg>
        </div>
        </div>
            <audio controls preload="metadata" className="w-full mb-5 rounded-0" id='mainAudio' style={{ position: "relative" }}>
                <source src={src} type={"audio/" + fileType} />
                </audio> 
         </div>
            </div>
            
    </div>
    );
} 

*/