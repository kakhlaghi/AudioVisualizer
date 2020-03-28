import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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

const MediaControlCard = ({data, callbackAudio}) => {
  
  const classes = useStyles();
  const theme = useTheme();

  const setCurrentSong = (event) => {
    event.preventDefault()
    if(data.href){
      callbackAudio(data.href);
    } else {
      callbackAudio(' ');
    }
  }

  return (
    <Card className={classes.root}>
        <CardContent className={classes.content}>
            <Button onClick={(event)=>setCurrentSong(event)}>Queue</Button>
            <Link href={data.artists[0].href}>{data.artists[0].name} : </Link>
            <Link href={data.href}> {data.name} </Link>
        </CardContent>
        <CardMedia
            className={classes.cover}
            image={data.album.cover}
            title={data.album.title}
        />
    </Card>
  );
}
export default MediaControlCard