/*global chrome*/
import React, { useEffect, useState } from 'react';
import { Paper, Grid, FormControlLabel,
        TextField, CssBaseline, Button, Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(\'../../movie_background.jpg\')',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid',
    padding: '30px',
    borderRadius: '6px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    width: '100%'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  startHeading: {

  },
  topRight: {
    margin: theme.spacing(10, 4, 2, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid',
    padding: '30px',
    borderRadius: '6px'
  },
  hostBtn: {
    margin: theme.spacing(3, 0),
  },
  videoWrapper: {
    width: '50vw',
    height: '50vh',
    marginTop: '10%',marginLeft: '8%'
  },
  video: {
  },
  urlInput: {
    marginTop: '50px',
    width: '70%'
  }
}
  ));

function AppHome() {
  const classes = useStyles();
  const [userData, setUserData] = useState();
  const [url, setUrl] = React.useState('https://www.youtube.com/watch?v=E5ln4uR4TwQ&ab_channel=AldrinAyson');
  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const userName = 'nishant'

  // useEffect(() => {
  //   console.log('userInfo', window.chrome);
  //   chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  //     if (msg.action == 'open_dialog_box') {
  //       alert("Message recieved!");
  //     }
  //   });
  // }, [])

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <Typography component="h1" variant="h5">
            Welcome {userName} to the home virtual mini hall experience! 
          </Typography>
          <TextField
                className={classes.urlInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="url"
                label="Paste the URL here"
                name="url"
                autoComplete="url"
                autoFocus
                value={url}
                onChange={handleChange}
              />
          <div className={classes.videoWrapper}>
            <ReactPlayer url={url}
            width='100%'
            height='100%'
            controls
            muted 
            className={classes.video}/>
          </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} spacing={3} sm={8} className={classes.topRight}>
              <Typography component="h1" variant="h5">
                Getting started {userName}
              </Typography>
              <Button variant="contained" color="primary" className={classes.hostBtn}>
                Host a watch party!
              </Button>
        </Grid>
        <Grid item xs={12} spacing={3} sm={16} className={classes.paper}>
            <Avatar className={classes.avatar}>
              <img src="../../logo_128.png" className={classes.logo}></img>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up with us!
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="What's your email?"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="What should we call you?"
                name="username"
                autoComplete="username"
                placeholder="Enter a profile name!"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Create a password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                type="password"
                id="confirm_password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up!
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default AppHome;
