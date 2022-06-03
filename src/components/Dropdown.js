import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Dropdown() {
  const [anchorPosition, setAnchorPosition] = React.useState({ left: 0, top: 0 });
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorPosition({left:event.pageX, top:event.pageY});
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  window.onload = function () {
    document.getElementById("game-image").addEventListener("click", handleClick);
  }
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorReference='anchorPosition'
        anchorPosition={anchorPosition}
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
