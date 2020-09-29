import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';

export default class FeaturesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.handleFeatureChange = this.handleFeatureChange.bind(this);
  }

  handleFeatureChange(e) {
    e.preventDefault();
    // const { features } = this.props;
    const newActiveIndex = Number(e.target.parentNode.attributes.index.value);

    this.setState({ activeIndex: newActiveIndex });
    //update state in App as well
  }

  render() {
    const { header, features } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className={style.wrapper}>
        <h3 className={style.header}>{header}</h3>
        <ul className={style.features}>
          {features.map((feature, index) => (
            <li className={activeIndex === index ? `${style.feature} ${style.active}` : `${style.feature}`} key={`${feature.posX}${feature.posY}`} index={index}>
              <button type="button" className={style.feature_heading} onClick={this.handleFeatureChange}>
                {feature.heading}
              </button>
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
