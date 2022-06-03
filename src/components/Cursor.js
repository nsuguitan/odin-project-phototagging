import React from "react";
import useMousePosition from "../hooks/useMousePosition";

const Cursor = () => {
    const { clientX, clientY} = useMousePosition();

    return(
       <div
        style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0,
            pointerEvents: "none"
        }} //div is the entire viewport
       >
           <svg
            width={50} 
            height={50} 
            viewBox="0 0 50 50" 
            style={{
                position: "absolute", 
                left: clientX,
                top: clientY,
                transform: "translate(-50%, -50%) scale(2.5)"   
            }}
           >
               <circle 
                cx="25" 
                cy="25" 
                r="8"
                fillOpacity={0}
                stroke= "black"
                strokeWidth={1}
                strokeDasharray="5,5"

               />
               <circle 
                cx="25" 
                cy="25" 
                r="1"
                fillOpacity={1} 
                fill="red" 
               />
           </svg>
       </div> 
    );
};
export default Cursor;