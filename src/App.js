import React, { Component } from 'react';
import { mockBreeds } from './mock'
import { Title } from './Components/Title';
import Apiclient from './ApiClient';
import { Review } from './Components/Review';
import WithSpinner from './Components/withSpinner';
import './index.css';
import PWithSpinner from './Components/withSpinner';
import Post from './Components/Post';

import Spinner from './Components/withSpinner';
import withSpinner from './Components/withSpinner';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Containers/Home';
import BreedsOverview from './Containers/BreedsOverview';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div id="menu">
        <ul >
        <a  className="menuitem">
          <Link to ="/"  >Home</Link>
        </a>
        <a  className="menuitem">
        <Link to="/firstPage">First Page</Link>
        </a >
        <a className="menuitem">
          <Link to ="/breeds">Breeds Overview</Link>
        </a>
          
        </ul>
          <hr/>
        </div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/breeds" component={BreedsOverview} />
    

    </div>
      </Router>
    
      
    );
  }
}

export default App;