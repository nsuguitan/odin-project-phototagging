import { Button, Modal } from '@mui/material';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';

const GameStartMenu = () => {

    const goToGame = (levelId) => {
        console.log("Starting ", levelId);
        //document.getElementById("carousel-modal").open = false;
    };  
    // window.onload = function () {
    // document.getElementById("button-l1").addEventListener("click", goToGame("L1"))
    // }
    return(
                <Carousel>
                    <Link to="/Game">
                        <Button className="menuButton">
                            <img src="./images/pokemon-level1.jpeg" alt="http://placecorgi.com/250" className="menuImage" />
                        </Button>
                    </Link>
                    <Button className="menuButton">
                        <img src="./images/pokemon-level2.webp" alt="http://placecorgi.com/250" className="menuImage"/>
                    </Button>
                        <Button className="menuButton">
                    <img src="./images/pokemon-level3.jpeg" alt="http://placecorgi.com/250" className="menuImage"/>
                    </Button>
                </Carousel>

    );
}
export default GameStartMenu;