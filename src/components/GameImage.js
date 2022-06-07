import React, { useContext, useCallback } from "react";
import { CursorContext } from "../contexts/CursorContextProvider";
import { useImage } from "../contexts/GameImageContext";

const GameImage = () => {
    const [, setCursor] = useContext(CursorContext);
    const { 
        state:{imageURL},
        dispatch,
    } = useImage();
    

    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    });

    return(
        <div id="gameImage-container" className="gameImage-container" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
            <img id="game-image" src={imageURL} alt='oops'></img>
        </div>
    )
};

export default GameImage;