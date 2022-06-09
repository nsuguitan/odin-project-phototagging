import { Button, Modal } from '@mui/material';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import { useImage } from '../contexts/GameImageContext';

const GameStartMenu = () => {
    const { 
        state,
        dispatch,
    } = useImage();

    // window.onload = function () {
    // document.getElementById("button-l1").addEventListener("click", goToGame("L1"))
    // }
    return(
                <div className='carousel-container'>
                <Carousel dragging={true} >
                    <Link to="/Game">
                        <Button className="menuButton" onClick={() => dispatch({type: 'SELECT_GAME_1'})}>
                            <img src="./images/greatball.png" alt="http://placecorgi.com/250" className="menuBallImage" />
                            <img src="./images/pokemon-level1.jpeg" alt="http://placecorgi.com/250" className="menuImage" />
                        </Button>
                    </Link >
                    <Link to="/Game">
                        <Button className="menuButton" onClick={() => dispatch({type: 'SELECT_GAME_2'})}>
                            <img src="./images/ultraball.png" alt="http://placecorgi.com/250" className="menuBallImage" />
                            <img src="./images/pokemon-level2.webp" alt="http://placecorgi.com/250" className="menuImage"/>
                        </Button>
                    </Link>
                    <Link to="/Game">
                        <Button className="menuButton" onClick={() => dispatch({type: 'SELECT_GAME_3'})}>
                        <img src="./images/masterball.png" alt="http://placecorgi.com/250" className="menuBallImage" />
                            <img src="./images/pokemon-level3.jpeg" alt="http://placecorgi.com/250" className="menuImage"/>
                        </Button>
                    </Link>
                        
                </Carousel>
                </div>

    );
}
export default GameStartMenu;