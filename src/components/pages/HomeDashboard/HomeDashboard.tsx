import styles from './HomeDashboard.module.css';
import { Button } from '@mui/material';
import * as react from 'react';
import { NavLink } from "react-router-dom";



function HomeDashboard() {
    //Logic


    //Template
    return (
        <div className={styles.HomeDashboard}>

            <h1> Categories</h1>

            <div className={styles.Categories1}>
                <div className={styles.Catbutton}>
                    <Button variant="contained">Sports</Button>
                </div>
                <div className={styles.Catbutton}>
                    <Button variant="contained">Robots</Button>
                </div>
                <div className={styles.Catbutton}>
                    <Button variant="contained">Recipes</Button>
                </div>

            </div>

            <div className={styles.Categories2}>
                <div className={styles.Catbutton}>
                    <Button variant="contained">Games</Button>
                </div>
                <div className={styles.Catbutton}>
                    <Button variant="contained">Soups</Button>
                </div>
                <div className={styles.Catbutton}>
                    <Button variant="contained">Fitness</Button>
                </div>

            </div>
        </div>

    )
};

export default HomeDashboard;