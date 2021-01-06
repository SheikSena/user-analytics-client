import React from 'react';
import { Grid, Card, CardContent, CardActionArea, Typography, CardActions, Button } from '@material-ui/core'
import BeerRecipes from './BeerRecipes';
export default function Dashboard() {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} md={8} lg={4}>
                    <Card>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    SunSet
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    SunSet are a widespread group of squamate reptiles, with over 6,000 species, ranging
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

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    SunRise
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    SunRise are a widespread group of squamate reptiles, with over 6,000 species, ranging
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
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Fog
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Fog are a widespread group of squamate reptiles, with over 6,000 species, ranging
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
            <BeerRecipes />
        </div>
    );
}