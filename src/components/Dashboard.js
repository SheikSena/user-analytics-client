import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core'
import BeerRecipes from './BeerRecipes';

export default function Dashboard() {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} md={8} lg={4}>
                    <Card>
                        <CardContent>
                            <b>CARD-1</b>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Card>
                        <CardContent>
                            <b>CARD-2</b>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Card>
                        <CardContent>
                            <b>CARD-3</b>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br></br>
            <BeerRecipes />
        </div>
    );
}