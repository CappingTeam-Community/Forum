import {
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
import {Redirect} from "react-router-dom";

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
        <Container className={styles.DiscoveryPage} sx={{alignItems:"center", justifyContent:'center', display: 'block'}}>
            <Typography sx={{color:'black', fontSize: 75, textAlign: 'center'}}>
                Discover
            </Typography>
            <div className={styles.centerGrid}>
                <Box sx={{width:'100%'}}>
                    <Grid container sx={{ml: 4}}>
                        {data.map((category: any, index: number) => {
                            return (
                                <Grid item md={6} sm={12} key={index}>
                                    <Category
                                        id={category.CategoryID}
                                        title={category.CategoryName}
                                        description={category.CategoryDescription}
                                        image={category.CategoryImage}
                                        votes={category.CategoryVotes}
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
    image: string,
    votes: string
}

function Category (props:PropsCategory) {
    const [redirect, setRedirect] = useState(false);
    return (
        <Container sx={{alignItems:"center", justifyContent:'center'}}>
            {redirect ? (
                <Redirect to={{
                    pathname:`/`,
                    state: {CategoryID: props.id} }} />
            ) : null}
            <Card sx={{alignItems:"center", justifyContent:'center', mb:2, height:520, width: 450, border: 1, borderColor: "grey.500" }}>
                <CardActionArea onClick={() => {setRedirect(true)}}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={props.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                        {props.description}
                         </Typography>
                        
                    </CardContent>
                </CardActionArea>

                <CardActions>
                <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
                        {props.votes} people in this community.
                         </Typography>
                </CardActions>
               
            </Card>
        </Container>
    )
}

export default Discover;