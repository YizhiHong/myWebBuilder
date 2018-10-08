import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h4>Build your Burger now!!!</h4>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
