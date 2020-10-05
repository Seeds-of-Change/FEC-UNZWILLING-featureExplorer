import React from 'react';
import axios from 'axios';
import style from './styles.css';
import FeaturesDetails from './FeaturesDetails/FeaturesDetails';
import ImageViewer from './ImageViewer/ImageViewer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: undefined,
      features: [],
      activeIndex: 0,
      productImage: undefined,

    };
    this.getFeatures = this.getFeatures.bind(this);
    this.updateActive = this.updateActive.bind(this);
  }

  componentDidMount() {
    this.getFeatures(1);
  }

  getFeatures(id) {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          header: response.data.product_features.header,
          features: response.data.product_features.features,
          productImage: response.data.image,
        });
      })
      .catch((error) => {
        console.log('ERROR: ');
      });
  }

  updateActive(index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const {
      features, header, activeIndex, productImage,
    } = this.state;
    return (
      <div className={style.featuresDetails}>
        <ImageViewer
          features={features}
          activeIndex={activeIndex}
          updateActive={this.updateActive}
          productImage={productImage}
        />
        <FeaturesDetails
          features={features}
          header={header}
          activeIndex={activeIndex}
          updateActive={this.updateActive}
        />
      </div>
    );
  }
}
