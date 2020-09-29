import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import FeaturesDetails from './FeaturesDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      features: [],

    };
    this.getFeatures = this.getFeatures.bind(this);
  }

  componentDidMount() {
    this.getFeatures(1);
  }

  getFeatures(id) {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          header: response.data.product_features.header,
          features: response.data.product_features.features,
        });
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  }

  render() {
    const { features, header } = this.state;
    return (
      <div className="App">
        <FeaturesDetails features={features} header={header} />

      </div>
    );
  }
}

export default App;
