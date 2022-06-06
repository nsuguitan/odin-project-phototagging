
//https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b
import { Button, IconButton } from "@mui/material";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState, useRef, useEffect } from "react";
import { formatTime } from "../utils/formatTime";

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const countRef = useRef(null);

    useEffect(() => {
        //console.log("Hello")
        handlePause();
      }, []);

    const handlePause = () => {
        if(isPaused){
            console.log("Howdy")
            setIsPaused(false);
            countRef.current = setInterval(() => {
              setTimer((timer) => timer + 1)
            }, 1000);
        }
        else{
            setIsPaused(true);
            clearInterval(countRef.current);
        }
    };

  

    // const handleReset = () => {

    // }; 
    //<Button onClick={handleReset} variant="contained" id="reset-button" > Reset Game </Button>

    return(
        <div className="timer-container">
            <h2 id="timer">{formatTime(timer)}</h2>
            <IconButton aria-label="play/pause" id="pause-button" onClick={handlePause}>
            {
                isPaused ? <PlayCircleOutlineIcon sx={{ height: 38, width: 38 }} /> : <PauseCircleOutlineIcon sx={{ height: 38, width: 38 }} />
            }
                
            </IconButton>
            
        </div>
    )
};

export default Timer;