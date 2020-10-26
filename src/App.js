import React from "react";
import AppHome from "./screens/AppHome";
import "./App.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton edge="start" className='icon-button' color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography component="h1" variant="h5">
              Oggle Party App
            </Typography>
          </Toolbar>
        </AppBar>
        <AppHome />
      </div>
    </ThemeProvider>
  );
}
export default App;
