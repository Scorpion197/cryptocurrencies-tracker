import './App.css';
import React from 'react'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components 
import HomePage from './components/HomePage/HomePage';
import News from './components/News/News';
import Exchanges from './components/Exchanges/Exchanges';
import Cryptos from './components/Cryptos/Cryptos';

import { Layout, Typography, Space } from 'antd';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Layout>
              <HomePage />
            </Layout>
          </Route>

          <Route path="/news">
            <News />
          </Route>

          <Route path="/exchanges">
            <Exchanges />
          </Route>

          <Route path="/cryptos">
            <Cryptos />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
