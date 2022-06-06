import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Card, CardMedia } from '@mui/material';
import { Image } from '@mui/icons-material';
import { Grid, Row, Col } from '@mui/material';

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
                            image="./images/sudowoodo.png"
                            alt="sudowoodo"
                            />
                            <Typography gutterBottom variant="body2" component="div">
                                Sudowoodo
                            </Typography>
                        </Card>
                </Grid>
                <Grid item>
                        <Card>
                            <CardMedia
                            component="img"
                            height="80"
                            image="./images/dratini.webp"
                            alt="dratini"
                            />
                            <Typography gutterBottom variant="body2" component="div">
                                dratini
                            </Typography>
                        </Card>
                </Grid>
                <Grid item>
                        <Card>
                            <CardMedia
                            component="img"
                            height="80"
                            image="./images/porygon.png"
                            alt="porygon"
                            />
                            <Typography gutterBottom variant="body2" component="div">
                                porygon
                            </Typography>
                        </Card>
                </Grid>                
            </Grid>
            <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
            </IconButton>
            <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}