import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';

export default class FeaturesDetails extends React.Component {
  constructor(props) {
    super(props);
    const { features } = this.props;
    this.state = {
      activeIndex: "0",
    };
    this.handleFeatureChange = this.handleFeatureChange.bind(this);
  }

  handleFeatureChange(e) {
    // const { features } = this.props;
    const newActiveIndex = e.target.parentNode.attributes.index.value;

    this.setState({ activeIndex: newActiveIndex });
  }

  render() {
    const { header, features } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className={style.wrapper}>
        <h3 className={style.header}>{header}</h3>
        <ul className={style.features}>
          {features.map((feature, index) => (
            <li className={this.state.activeIndex == index ? `${style.feature} ${style.active}` : `${style.feature}`} key={`${feature.posX}${feature.posY}`} index={index}>
              <h4 className={style.feature_heading} onClick={this.handleFeatureChange}>
                {feature.heading}
              </h4>
              <div className={style.feature_description}>
                {feature.description}
              </div>
            </li>
          ))}

        </ul>
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

// export default FeaturesDetails;
