import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography
} from '@mui/material';
import { Box } from '@mui/material';
import styles from './Discover.module.css';
import React, {useEffect, useState} from "react";
import Axios from "axios";

function Discover () {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                setData(data)
            })
    }, []);


    return (
        <Container className={styles.DiscoveryPage} sx={{display: 'block'}}>
            <Typography sx={{color:'black', fontSize: 50, textAlign: 'center', p: 5}}>
                Discover
            </Typography>
            <div className={styles.centerGrid}>
                <Box sx={{width:'100%'}}>
                    <Grid container>
                        {data.map((category: any, index: number) => {
                            return (
                                <Grid item md={4} key={index}>
                                    <Category
                                        id={category.CategoryID}
                                        title={category.CategoryName}
                                        description={category.Description}
                                        image={category.CategoryImage}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </div>
        </Container>
    )
}

// Category Component
interface PropsCategory {
    id: number;
    title: string,
    description: string,
    image: string
}
function Category (props:PropsCategory) {
    const route = '/category/' + (props.id).toString()
    return (
        <Container>
            <Card sx={{ mb:2, height:300, width: 250 }}>
                <CardActionArea href={route}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="medium">Explore Topic</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Discover;