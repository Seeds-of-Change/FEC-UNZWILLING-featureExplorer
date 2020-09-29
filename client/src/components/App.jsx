import React from 'react';
import PropTypes from 'prop-types';
import FeaturesDetails from './FeaturesDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [{ value: '1' }, { value: '2' }, { value: '3' }],
    };
  }

  render() {
    const { features } = this.state;
    return (
      <div className="App">
        <FeaturesDetails features={features} />

      </div>
    );
  }
}

export const Counter = ({ counter }) => (
  <div>
    <p>{ counter }</p>
  </div>
);

App.propTypes = {

};

export default App;
