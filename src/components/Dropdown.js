import * as React from 'react';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useImage } from '../contexts/GameImageContext';
import { doc, getDoc, getFirestore, collection, namedQuery } from "firebase/firestore";

export default function Dropdown() {
    const [anchorPosition, setAnchorPosition] = React.useState({ left: 0, top: 0 });
    const [scrollPosition, setScrollPosition] = React.useState({ scLeft: 0, scTop: 0 });
    const [open, setOpen] = React.useState(false);

    const { 
        state:{pokemon,docId,foundPokemon},
        dispatch,
    } = useImage();


    const handleClose = () => {
        setOpen(false);
        
    };

    const handleSelect = async (event,name) => {
        console.log("Pokemon:",name);
        const docRef = doc(collection(getFirestore(), 'GameLevels'), docId);
        const docSnap = await getDoc(docRef);
        console.log("doc:", docSnap.data())
        console.log("doc:", docSnap.data()[name])
        if(verifyFind(docSnap.data()[name])){
            foundPokemon.push(name);
            };
            console.log("foundPokemon=",foundPokemon);
        };
        

    const verifyFind = (pokemonLoc) =>{
        console.log("pokemonLoc var:",pokemonLoc);
        console.log("anchorPosition State:",anchorPosition);
        if(Math.abs(pokemonLoc[0]-anchorPosition.left-scrollPosition.scLeft) < 20){
            if(Math.abs(pokemonLoc[1]-anchorPosition.top-scrollPosition.scTop) < 40){
                console.log("Yay you caught one!");
                return true;
            };
        };
        console.log("Booooooooo");
        return false;
    }


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
            {
                pokemon.map(p =>{
                    return <MenuItem id={p} onClick={event => handleSelect(event,p)}>{p}</MenuItem>
                })
            }
            {/* <MenuItem id={pokemon[0]} onClick={event => handleSelect(event,pokemon[0])}>{tempPokemon[0]}</MenuItem>
            <MenuItem id={pokemon[1]} onClick={event => handleSelect(event,pokemon[1])}>{tempPokemon[1]}</MenuItem>
            <MenuItem id={pokemon[2]} onClick={event => handleSelect(event,pokemon[2])}>{tempPokemon[2]}</MenuItem> */}
        </Menu>
        </div>
    );
}
