import GameImage from "./GameImage";
import Dropdown from "./Dropdown";
import Cursor from "./Cursor";
import CursorContextProvider from "../contexts/CursorContextProvider";
import Appbar from "./Appbar";
import { CssBaseline } from "@mui/material";

const GamePlay = () => {
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