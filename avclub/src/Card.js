import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: 151,
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const MediaControlCard = (find) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(find.data.album.cover_medium)
  return (
    <Card className={classes.root}>
        <CardContent className={classes.content}>
            <Link href={find.data.link}>{find.data.title} - {find.data.artist.name} </Link>
        </CardContent>
        <CardMedia
            className={classes.cover}
            image={find.data.album.cover}
            title={find.data.album.title}
        />
    </Card>
  );
}
export default MediaControlCard