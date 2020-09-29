import React from 'react';
import PropTypes from 'prop-types';

class FeaturesDetails extends React.Component {
  constructor(props) {
    super(props);
    const { features } = this.props;
    this.state = {
      focusedFeature: features[0],
    };
  }

  render() {
    const { header, features } = this.props;
    return (
      <div className="FeaturesDetails">
        <h3 className="FeaturesDetails-header">{header}</h3>
        {features.map((feature, index) => (
          <div key={`${feature.posX}${feature.posY}`}>
            <h4 className="FeaturesDetails-feature-heading">
              {feature.heading}
            </h4>
            <div className="FeaturesDetails-feature-description">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

FeaturesDetails.defaultProps = {
  header: null,
  features: null,
};

FeaturesDetails.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  header: PropTypes.string,
};

export default FeaturesDetails;
