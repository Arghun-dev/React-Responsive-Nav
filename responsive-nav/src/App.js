import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HttpsIcon from '@material-ui/icons/Https';
import PersonIcon from '@material-ui/icons/Person';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ResponsiveNavigation from './components/ResponsiveNavigation';


function App() {
  const NavLinks = [
    {
      text: 'Home',
      path: '/',
      icon: <HomeIcon />
    },

    {
      text: 'Contact',
      path: '/contact',
      icon: <ContactSupportIcon />
    },

    {
      text: 'About',
      path: '/about',
      icon: <InfoIcon />
    },

    {
      text: 'Blog',
      path: '/blog',
      icon:  <HttpsIcon />
    },

    {
      text: 'Portfolio',
      path: '/portfolio',
      icon: <PersonIcon />
    }
  ]
  return (
    <div className="App">
      <ResponsiveNavigation
        NavLinks={ NavLinks }
        logo={ logo }
      />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
