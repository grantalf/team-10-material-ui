import React, {useState} from 'react';
import Grid from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 15
    },
    media: {
        height: 140
    }
});

export default function InfoCard({ hobby }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image="../public/grant_placeholder.jpeg"
                title="placeholder image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Hello!  My name is {hobby.name}.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    My favorite hobby is {hobby.interests} and my favorite food is {hobby.favoriteFood}.
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}