// import { createContext, useContext, useEffect, useState } from "react";
// import {
//     getFirestore,
//     collection,
//     addDoc,
//     query,
//     where,
//     get,
//     orderBy,
//     limit,
//     onSnapshot,
//     setDoc,
//     getDocs,
//     updateDoc,
//     doc,
//     serverTimestamp,
//   } from 'firebase/firestore';
// // import { cartReducer } from "./Reducers";

// const Game = createContext();
// const Context = ( {children} ) => {
//     const [gameDetails, setGameDetails] = useState('');
//     const [gameBackground, setGameBackground] = useState('');
//     useEffect(() => {
//         //setGameDetails(loadGame());
//         const temp = loadGame();
//         console.log("Temp:", temp);
//         async function loadGame(){
//             console.log("Try to connect to db");
//             const gameRef = collection(getFirestore(), 'GameLevels');
//             const currentGameQuery = query(gameRef, where("levelId", "==", 1));

//             const querySnapshot = await getDocs(currentGameQuery);
//             querySnapshot.forEach((doc) => {
//             console.log(doc.id, " => ", doc.data());
//             return doc.data();
//         });
      
//         }}, []);

    
// //     const games = [
// //         {
// //             id: 1,
// //             name: "Level 1",
// //             imageURL: "./images/pokemon-level1.jpeg"
// //         }
// //         ,{
// //             id: 2,
// //             name: "Level 2",
// //             imageURL: "./images/pokemon-level2.webp"
// //         }

// //     ]



//     return(
//        <Game.Provider value = {[gameBackground, setGameBackground]}>{children}</Game.Provider>
//     )
// }

// export default Context;

// export const GameState = () => {
//     return useContext(Game);
// };