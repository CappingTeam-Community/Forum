import styles from './HomeDashboard.module.css';
import * as react from 'react';
import { NavLink } from "react-router-dom";

//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box, { BoxProps } from '@mui/material/Box';


function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                borderRadius: 1,
            }}
            {...other}

        />
    );
}


function HomeDashboard() {
    //Logic
    //create an array of the popular tags and use those to change the display cards

    //Template
    return (


        <div className={styles.HomeDashboard}>
            <h1> Categories</h1>

            
            <div className={styles.Categories1}>
                <div style={{ width: '70%' }}>
                    <Box
                        sx={{
                            justifyContent: "space-evenly",
                            gridArea: "center",
                            alignContent: "center",
                            display: 'grid',
                            columnGap: 5,
                            rowGap: 5,
                            gridTemplateColumns: 'repeat(3, 1fr)',
                        }}
                    >
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea href='/discover'>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="sports photo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sports
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            All about sportss, insert a actual froum here.
                                        </Typography>
                                        
                                        </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium">Explore Topic</Button>
                                </CardActions>
                            </Card>
                        </Item>

                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="sports photo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sports
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            All about sportss, insert a actual froum here.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium">Explore Topic</Button>
                                </CardActions>
                            </Card>
                        </Item>

                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="sports photo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sports
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            All about sportss, insert a actual froum here.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium">Explore Topic</Button>
                                </CardActions>
                            </Card>
                        </Item>

                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="sports photo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sports
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            All about sportss, insert a actual froum here.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium">Explore Topic</Button>
                                </CardActions>
                            </Card>
                        </Item>

                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="sports photo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sports
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            All about sportss, insert a actual froum here.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium">Explore Topic</Button>
                                </CardActions>
                            </Card>
                        </Item>

                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="sports photo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sports
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            All about sportss, insert a actual froum here.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium">Explore Topic</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Box>
                </div>

            </div>

        </div>

    )
};

export default HomeDashboard;