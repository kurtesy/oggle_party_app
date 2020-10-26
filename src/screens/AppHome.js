import React from 'react';
import { Link, Paper, Box, Grid, Checkbox, FormControlLabel,
        TextField, CssBaseline, Button, Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


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
  }
}));

function AppHome() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <Typography component="h1" variant="h5">
            Welcome to the home virtual mini hall experience! 
          </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} spacing={3} sm={8} className={classes.topRight}>
              <Typography component="h1" variant="h5">
                Getting started
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
                autoFocus
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
