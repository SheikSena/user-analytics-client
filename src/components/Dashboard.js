import React from 'react';
import { Grid, Card, CardContent, CardActionArea, CardMedia, Typography, CardActions, Button } from '@material-ui/core'
import BeerRecipes from './BeerRecipes';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});


export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} md={8} lg={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br></br>
            <BeerRecipes />
        </div>
    );
}