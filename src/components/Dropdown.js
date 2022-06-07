import * as React from 'react';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Dropdown() {
    const [anchorPosition, setAnchorPosition] = React.useState({ left: 0, top: 0 });
    const [scrollPosition, setScrollPosition] = React.useState({ scLeft: 0, scTop: 0 });
    const [open, setOpen] = React.useState(false);

    
    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        const getScrollAmount = () => {

            return scrollPosition;
        };
        const handleScroll =(event) => {
            // console.log("We scrolled!");
            // console.log("How much horizontal?", window.scrollX)
            // console.log("How much?", window.scrollY)
            setScrollPosition({scLeft:window.scrollX, scTop:window.scrollY});
            console.log("New pos?", getScrollAmount())
        };

        const handleClick = (event) => {
            let xcoord = event.pageX - getScrollAmount()["scLeft"]
            let ycoord = event.pageY - getScrollAmount()["scTop"]
            console.log("Click x:"+ event.pageX);
            console.log("Click y:"+ event.pageY);
            console.log("Scroll x:"+ getScrollAmount()["scLeft"]);
            console.log("Scroll y:"+ getScrollAmount()["scTop"]);
            console.log("Menu x:"+ xcoord);
            console.log("Menu y:"+ ycoord);
            setAnchorPosition({left:xcoord, top:ycoord});
    
            setOpen(prevState => !prevState);
        };
        // attact the event listener
        document.getElementById("gameplay-container").addEventListener("click", handleClick);
        window.addEventListener("scroll", handleScroll);
        
        // remove the event listener when the component is unmounted
        //return () =>
            //document.getElementById("gameplay-container").removeEventListener("click", handleClick);
            //document.removeEventListener("scroll", handleScroll);
    }, [scrollPosition]);
    

    

    return (
        <div>
        <Menu
            id="basic-menu"
            anchorReference='anchorPosition'
            anchorPosition={anchorPosition}
            onClick={handleClose}
            open={open}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
    );
}
