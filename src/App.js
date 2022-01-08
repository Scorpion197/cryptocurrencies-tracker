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
import CryptoDetails from './components/CryptoDetails/CryptoDetails';
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
            <News simplified={false}/>
          </Route>

          <Route path="/exchanges">
            <Exchanges />
          </Route>

          <Route path="/cryptos">
            <Cryptos simplified={false} />
          </Route>

          <Route path="/crypto/:coinId">
            <CryptoDetails />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
