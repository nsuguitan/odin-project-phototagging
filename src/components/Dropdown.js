import * as React from 'react';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Dropdown() {
    const [anchorPosition, setAnchorPosition] = React.useState({ left: 0, top: 0 });
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorPosition({left:event.pageX, top:event.pageY});
        setOpen(prevState => !prevState);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
                
        // attact the event listener
        document.getElementById("gameplay-container").addEventListener("click", handleClick);
        
        // remove the event listener when the component is unmounted
        return () =>
            document.getElementById("gameplay-container").addEventListener("click", handleClick);
    }, []);
    

    

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
