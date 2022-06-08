import * as React from 'react';
import { useEffect, useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useImage } from '../contexts/GameImageContext';
import { doc, getDoc, getFirestore, collection } from "firebase/firestore";
import { MenuContext } from "../contexts/GameMenuContext";

export default function Dropdown({anchorPosition,scrollPosition}) {
    const [menuOpen, setMenuOpen] = useContext(MenuContext);


    const { 
        state:{pokemon,docId,foundPokemon},
        dispatch,
    } = useImage();




    const handleSelect = async (event,name) => {
        console.log("Pokemon:",name);
        setMenuOpen(false);
        if(name){
            const docRef = doc(collection(getFirestore(), 'GameLevels'), docId);
            const docSnap = await getDoc(docRef);
            console.log("doc:", docSnap.data())
            console.log("doc:", docSnap.data()[name])
            if(verifyFind(docSnap.data()[name])){
                foundPokemon.push(name);
                };  
        }

            console.log("foundPokemon=",foundPokemon);
        };
        

    const verifyFind = (pokemonLoc) =>{
        console.log("pokemonLoc var:",pokemonLoc);
        console.log("anchorPosition State:",anchorPosition);
        if(Math.abs(pokemonLoc[0]-anchorPosition.left-scrollPosition.scLeft) < 20){
            if(Math.abs(pokemonLoc[1]-anchorPosition.top-scrollPosition.scTop) < 60){
                console.log("Yay you caught one!");
                return true;
            };
        };
        console.log("Booooooooo");
        return false;
    }


    return (
        <Menu
            id="basic-menu"
            anchorReference='anchorPosition'
            anchorPosition={anchorPosition}
            open={menuOpen}
            onClick={event => handleSelect(event,'')}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {/* {
                pokemon.map(p =>{
                    return <MenuItem id={p} onClick={event => handleSelect(event,p)}>{p}</MenuItem>
                })
            } */}
            <MenuItem id={pokemon[0]} onClick={event => handleSelect(event,pokemon[0])}>{pokemon[0]}</MenuItem>
            <MenuItem id={pokemon[1]} onClick={event => handleSelect(event,pokemon[1])}>{pokemon[1]}</MenuItem>
            <MenuItem id={pokemon[2]} onClick={event => handleSelect(event,pokemon[2])}>{pokemon[2]}</MenuItem>
        </Menu>
    );
}
