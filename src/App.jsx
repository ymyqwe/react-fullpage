import React, {Component, PropTypes} from 'react';
import './css/style.scss';
import Fullpage from './slider';

class App extends Component {
  render() {
    const options = {
      type: 1
    };
    return (
      <div className="container">
        <Fullpage {...options}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Fullpage>
      </div>
    );
  }
}

module.exports = App;