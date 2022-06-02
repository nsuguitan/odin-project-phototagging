//Gets current mouse position and sets it to state
//So whenever the position moves, cursor should re-render
//https://medium.com/@jaredloson/custom-javascript-cursor-in-react-d7ffefb2db38
import { useState, useEffect } from "react"

const useMousePosition = () => {
    const [position, setPosition] = useState({
        clientX: 0,
        clientY: 0,
    });

    const updatePosition = event => {
        const { pageX, pageY, clientX, clientY } = event;

        setPosition({ clientX, clientY, });
    };

    //similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //eventListener for movement of the mouse, with (type, listener, no options)
        document.addEventListener("mousemove", updatePosition, false)

        return () => {
            document.removeEventListener("mousemove", updatePosition)
        }
    }, []);//this will run once on mount
    
    return position;
};

export default useMousePosition;