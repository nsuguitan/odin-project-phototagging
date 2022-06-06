import GameImage from "./GameImage";
import Dropdown from "./Dropdown";
import Cursor from "./Cursor";
import CursorContextProvider from "../contexts/CursorContextProvider";

const GamePlay = () => {
return(
    <CursorContextProvider>
        <div id="gameplay-container">
            <GameImage />
            <Dropdown />
            <Cursor />
        </div>
    </CursorContextProvider>
)
}
export default GamePlay;