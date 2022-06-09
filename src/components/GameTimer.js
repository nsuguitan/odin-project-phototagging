
//https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b
import { Button, IconButton } from "@mui/material";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState, useRef, useEffect } from "react";
import { formatTime } from "../utils/formatTime";
import { useImage } from "../contexts/GameImageContext";
import { doc, getDoc, getFirestore, collection, updateDoc, arrayUnion, deleteField } from "firebase/firestore";
import { TempleBuddhist } from "@mui/icons-material";

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const countRef = useRef(null);
    const [gameComplete, setGameComplete] = useState(false);
    const { 
        state:{foundPokemon, level},
    } = useImage();
    const highScoresRef = doc(collection(getFirestore(), 'GameLevels'), "highScoresCompiled");


    useEffect(() => {
        if(foundPokemon.length === 3){
            clearInterval(countRef.current);
            let timerString = "Completed in: " + formatTime(timer);
            document.getElementById("timer").innerHTML = timerString;
            document.getElementById("timer").style.color = "Green"
            console.log("We did it!");
            if(!gameComplete){
                addHighScore();
                setGameComplete(true);
            };
        };
        handlePause();
      }, [foundPokemon.length]);

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

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    const addHighScore = async() => {
        console.log("Data to load --> level: "+ level +" timer: "+ timer);
        const docSnap = await getDoc(highScoresRef);
        console.log("Doc", docSnap.data());
        let newField = generateString(3)+"-"+level;
        var obj = {};
        obj[newField] = timer;
         await updateDoc(highScoresRef, obj);
    }





  

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