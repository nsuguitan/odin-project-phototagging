import React, { useContext, useCallback } from "react";
import { CursorContext } from "../contexts/CursorContextProvider";
import Dropdown from "./Dropdown";

const GameImage = () => {
    const [, setCursor] = useContext(CursorContext);

    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    });

    return(
        <div id="gameImage-container" className="gameImage-container" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
            <img id="game-image" src="./images/pokemon-level1.jpeg" alt='oops'></img>
        </div>
    )
};

export default GameImage;