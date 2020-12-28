import React from 'react';
import { Grid } from '@material-ui/core'
import BeerRecipes from './BeerRecipes';

export default function Dashboard() {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} md={8} lg={4}>

                </Grid>
                <Grid item xs={12} md={8} lg={4}>

                </Grid>
                <Grid item xs={12} md={8} lg={4}>

                </Grid>
            </Grid>
            <br></br>
            <BeerRecipes />
        </div>
    );
}