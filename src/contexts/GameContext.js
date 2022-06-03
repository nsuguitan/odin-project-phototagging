// import { createContext, useContext, useReducer } from "react";
// import { cartReducer } from "./Reducers";

// const Game = createContext();
// const Context = ( {children} ) => {

//     const games = [
//         {
//             id: 1,
//             name: "Level 1",
//             imageURL: "./images/pokemon-level1.jpeg"
//         }
//         ,{
//             id: 2,
//             name: "Level 2",
//             imageURL: "./images/pokemon-level2.webp"
//         }

//     ]



//     return(
//        <Game.Provider value = {{games}}>{children}</Game.Provider>
//     )
// }

// export default Context;

// export const GameState = () => {
//     return useContext(Game);
// };