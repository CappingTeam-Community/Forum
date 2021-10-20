
import {Container, Grid, Typography} from '@mui/material';
import { Box } from '@mui/material';
import DiscoveryComponet from './DiscoveryComponet';
import styles from './DiscoveryPage.module.css';
import React from "react";
import Axios from "axios";


class DiscoveryPage extends React.Component<{}, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                this.setState({data})
            })
    }

    render() {
        return (
            <Container className={styles.DiscoveryPage} sx={{display: 'block'}}>
                <Typography variant='h3' color='text.primary' sx={{textAlign: 'center', p: 5}}>
                    Discover
                </Typography>
                <div className={styles.centerGrid}>
                    <Box sx={{width:'100%'}}>
                        <Grid container spacing={2}>
                            {this.state.data.map((category: any, index: number) => {
                                return (
                                    <Grid item key={index}>
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
}

export default DiscoveryPage;