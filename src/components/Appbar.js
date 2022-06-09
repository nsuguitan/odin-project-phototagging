import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Card, CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
import Timer from './GameTimer';
import { useImage } from '../contexts/GameImageContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function Appbar() {
    const { 
        state:{pokemon,foundPokemon},
        dispatch,
    } = useImage();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <StyledToolbar>
            <Grid id="card-container" container spacing={1}>
                <Grid item>
                        <Card>
                            <CardMedia
                            component="img"
                            height="80"
                            image={foundPokemon.includes(pokemon[0]) ? './images/pokeball.png' : `./images//${pokemon[0]}.png`}
                            alt="oops"
                            />
                            <Typography gutterBottom variant="body2" component="div">
                                {pokemon[0]}
                            </Typography>
                        </Card>
                </Grid>
                <Grid item>
                        <Card>
                            <CardMedia
                            component="img"
                            height="80"
                            image={foundPokemon.includes(pokemon[1]) ? './images/pokeball.png' : `./images//${pokemon[1]}.png`}
                            alt="oops"
                            />
                            <Typography gutterBottom variant="body2" component="div">
                                {pokemon[1]}
                            </Typography>
                        </Card>
                </Grid>
                <Grid item>
                        <Card>
                            <CardMedia
                            component="img"
                            height="80"
                            image={foundPokemon.includes(pokemon[2]) ? './images/pokeball.png' : `./images//${pokemon[2]}.png`}
                            alt="oops"
                            />
                            <Typography gutterBottom variant="body2" component="div">
                                {pokemon[2]}
                            </Typography>
                        </Card>
                </Grid> 
                <Grid item xs={6} id="timer-card">
                    <Card>
                        <Timer />
                    </Card>
                </Grid>
                <Grid item id="return-menu-button">
                    <Link style={{textDecoration: "none", color: "white"}} to='/Menu'>
                        <Button variant="text" color="inherit">
                            Return to Menu    
                        </Button>
                    </Link>
                </Grid>               
            </Grid>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}