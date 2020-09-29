import React from 'react';

class FeaturesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedFeature: 0,
    };
  }

  render() {
    return (
      <div className="FeaturesDetails">
        {this.props.features.map((feature, index) => <div key={index}>{feature.value}</div>)}
      </div>
    );
  }
}

export default FeaturesDetails;
