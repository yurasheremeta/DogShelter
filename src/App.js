import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './index.css';
import Home from './containers/Home/HomePageContainer';
import BreedsOverview from './containers/BreedOwerview/BreedsOverview';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/breeds" component={BreedsOverview} />
      </Switch>
    </div>

  );
}

export default App;
