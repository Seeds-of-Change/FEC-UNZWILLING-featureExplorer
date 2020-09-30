import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';

export default function FeaturesDetails(props) {
  const {
    features, header, activeIndex, updateActive,
  } = props;

  const handleFeatureChange = (e) => {
    e.preventDefault();
    const newActiveIndex = Number(e.target.parentNode.attributes.index.value);

    updateActive(newActiveIndex);
  };

  return (
    <div className={style.wrapper}>
      <h3 className={style.header}>{header}</h3>
      <ul className={style.features}>
        {features.map((feature, index) => (
          <li className={activeIndex === index ? `${style.feature} ${style.active}` : `${style.feature}`} key={`${feature.posX}${feature.posY}`} index={index}>
            <button type="button" className={style.feature_heading} onClick={handleFeatureChange}>
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

FeaturesDetails.defaultProps = {
  header: null,
  features: null,
  updateActive: null,
  activeIndex: 0,
};

FeaturesDetails.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      posX: PropTypes.number,
      posY: PropTypes.number,
    }),
  ),
  header: PropTypes.string,
  updateActive: PropTypes.func,
  activeIndex: PropTypes.number,
};
