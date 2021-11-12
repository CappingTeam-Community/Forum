
import {Container, Grid, Paper, Typography} from '@mui/material';
import { Box } from '@mui/material';
import { useTheme } from "@mui/styles";
import DiscoveryComponet from './DiscoveryComponet';
import styles from './DiscoveryPage.module.css';
import React, {useEffect, useState} from "react";
import Axios from "axios";


function DiscoveryPage () {
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
                                    <DiscoveryComponet
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

export default DiscoveryPage;