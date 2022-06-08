import GameImage from "./GameImage";
import Dropdown from "./Dropdown";
import Cursor from "./Cursor";
import CursorContextProvider from "../contexts/CursorContextProvider";
import Appbar from "./Appbar";
import { CssBaseline } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { MenuContext } from "../contexts/GameMenuContext";

const GamePlay = () => {
    const [anchorPosition, setAnchorPosition] = useState({ left: 0, top: 0 });
    const [scrollPosition, setScrollPosition] = useState({ scLeft: 0, scTop: 0 });
    const [menuOpen, setMenuOpen] = useContext(MenuContext);

    // const handleClose = () => {
    //     console.log('handle close running')
    //     setOpen(!open);
        
    // };

    useEffect(() => {

        const handleScroll = (event) => {
            // console.log("We scrolled!");
            // console.log("How much horizontal?", window.scrollX)
            // console.log("How much?", window.scrollY)
            setScrollPosition({scLeft:window.scrollX, scTop:window.scrollY});
            console.log("New pos?", scrollPosition)
            
        };

        const handleClick = (event) => {
            let xcoord = event.pageX - scrollPosition["scLeft"]
            let ycoord = event.pageY - scrollPosition["scTop"]
            console.log("Click x:"+ event.pageX);
            console.log("Click y:"+ event.pageY);
            console.log("Scroll x:"+ scrollPosition["scLeft"]);
            console.log("Scroll y:"+ scrollPosition["scTop"]);
            console.log("Menu x:"+ xcoord);
            console.log("Menu y:"+ ycoord);
            console.log()
            console.log("-----------------------");
            setAnchorPosition({left:xcoord, top:ycoord});
            setMenuOpen(true);
            
        };
        document.getElementById("gameplay-container").addEventListener("click", handleClick);
        window.addEventListener("scroll", handleScroll);
         return () =>{
                  document.getElementById("gameplay-container").removeEventListener("click", handleClick);
                  window.removeEventListener("scroll", handleScroll);
         };
    });
return(
    <CursorContextProvider>
        <CssBaseline />
        <Appbar />
        <div id="gameplay-container">
            <GameImage />
            <Dropdown anchorPosition={anchorPosition} scrollPosition={scrollPosition} open={menuOpen}/>
            <Cursor />
        </div>
    </CursorContextProvider>
)
}
export default GamePlay;