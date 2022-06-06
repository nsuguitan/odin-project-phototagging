import React, { useState, useEffect } from "react"; 
import useMousePosition from "../hooks/useMousePosition";

const Cursor = () => {
    const { pageX, pageY} = useMousePosition();
    const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter",   handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

    return(
           <svg
            width={50} 
            height={50} 
            viewBox="0 0 50 50" 
            style={{
                position: "absolute", 
                left: pageX,
                top: pageY,
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
    );
};
export default Cursor;