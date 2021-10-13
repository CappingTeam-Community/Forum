import styles from './HomeDashboard.module.css';
import React from "react";
import { Button } from '@mui/material';


function HomeDashboard() {
    //Logic

    //Template
    return (
        <div className={styles.HomeDashboard}>
            HomeDashboard Component
            <Button variant="contained">Example of MUI</Button>
        </div>
    )};

export default HomeDashboard;