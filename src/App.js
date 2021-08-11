import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Button, CssBaseline, IconButton, Toolbar } from '@material-ui/core';
import logo from './images/shilipai_logo_p.svg';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import Home from './component/home/Home';
import EntPoint from './component/testHelper/EntPoint';
import Operator from './component/testHelper/Operator';
import Worker from './component/testHelper/Worker';
import OperatorResult from './component/testHelper/OperatorResult';
import WorkerResult from './component/testHelper/WorkerResult';

const theme = createTheme(
  {
    CssBaseline: {

    },
    palette: {
      primary: {
        main: 'hsla(292, 59%, 60%, 1)',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'Noto Sans TC',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  }
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <AppBar 
          color="transparent"
          style={{backdropFilter: 'blur(55px)', background: 'linear-gradient(115.95deg, rgba(255, 255, 255, 0.5) 30.03%, rgba(255, 255, 255, 0.3) 96.4%)',}}
          >
          <Toolbar>
            <IconButton
              component={Link}
              to="/"
            >
              <img src={logo} alt=""/>
            </IconButton>
            <div style={{flexGrow: 1}}></div>
            <Button
              color="primary"
            >
              登入/註冊
            </Button>
          </Toolbar>
          
        </AppBar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/testEntPoint' component={EntPoint}/>
          <Route exact path='/operator' component={Operator}/>
          <Route exact path='/worker' component={Worker}/>
          <Route exact path='/operatorResult' component={OperatorResult}/>
          <Route exact path='/workerResult' component={WorkerResult}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
