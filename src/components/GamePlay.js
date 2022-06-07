import GameImage from "./GameImage";
import Dropdown from "./Dropdown";
import Cursor from "./Cursor";
import CursorContextProvider from "../contexts/CursorContextProvider";
import Appbar from "./Appbar";
import { CssBaseline } from "@mui/material";
import { GameState } from "../contexts/GameContext";

const GamePlay = () => {
    //const gameInfo = GameState();
    //console.log("GameInfo:",gameInfo
    // .then(value => {
    //     console.log(value); //
    //   }).catch(err => {
    //     console.log(err);
    //   })
    //);
return(
    <CursorContextProvider>
        <CssBaseline />
        <Appbar />
        <div id="gameplay-container">
            <GameImage />
            <Dropdown />
            <Cursor />
        </div>
    </CursorContextProvider>
)
}
export default GamePlay;