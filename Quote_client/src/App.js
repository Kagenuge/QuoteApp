import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteBox from './components/QuoteBox';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Mainpage from './components/Mainpage';
import Form from './components/Form';
import StartPage from './components/StartPage';
import Pagination from 'react-bootstrap/Pagination';


const App = () => {

  const prevpage = () => {
  }
  const nextpage = () => {
  }

  const pageOne = (event) => {
  }

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/quotes" component={QuoteBox} />
          <Route exact path="/main" component={Mainpage} />
          <Route exact path="/add" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
