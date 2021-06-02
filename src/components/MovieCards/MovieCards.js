import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./MovieCards.css";
import { useStyles } from "./moviecardsStyles";

export default function MovieCards({ movies }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={6} key={movie.imdbID}>
            <Card className={classes.root}>
              <CardHeader title={movie.Title} subheader={movie.Released} />
              <CardMedia className={classes.mediaCard}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="imgPoster"
                />
                <CardContent className={classes.content}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {movie.Plot}
                  </Typography>
                  <Typography component="h5">Languages</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {movie.Language}
                  </Typography>
                  <Typography component="h5">Actors</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {movie.Actors}
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
