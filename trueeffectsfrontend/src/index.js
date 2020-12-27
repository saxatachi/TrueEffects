import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import LoginContainer from './components/LoginContainer';
import DefaultContainer from './components/DefaultContainer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faClipboardList,faWeight,faGavel } from '@fortawesome/fontawesome-free-solid';
import { makeStyles } from '@material-ui/core/styles';

//import MenuIcon from '@material-ui/icons/Menu';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sass/index.scss';
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/(login)" component={LoginContainer}/>
    <Route exact path="/(register)" component={LoginContainer}/>
    <Route component={DefaultContainer} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
