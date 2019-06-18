/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import myGoats from './goats';

import GoatCorral from '../components/GoatCorral/GoatCorral';


class App extends React.Component {
  state = {
    goats: [],
  };

  componentDidMount() {
    this.setState({ goats: myGoats });
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <div>Goats Yoga</div>
        <GoatCorral goats={goats} />
      </div>
    );
  }
}

export default App;
