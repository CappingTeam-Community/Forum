
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import DiscoveryComponet from './DiscoveryComponet';
import styles from './DiscoveryPage.module.css';


function DiscoveryPage(){
    //Logic
    const categories: any = [];


    //Template
    return (
        <div className={styles.DiscoveryPage}>
            <h1> \(!_!)/ waa</h1>
            <div className={styles.centerGrid}>
            <Box sx={{ width: '70%' }}>
                <Grid container spacing={{ md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {categories.map((category: any, index: number) => {
                        return (
                            <Grid item md={6} key={index}>
                                <DiscoveryComponet
                                    title={category.title}
                                    description={category.description}
                                    image={category.image}
                                    link={category.link}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                </Box>
                </div>
        </div>
    )};

export default DiscoveryPage;