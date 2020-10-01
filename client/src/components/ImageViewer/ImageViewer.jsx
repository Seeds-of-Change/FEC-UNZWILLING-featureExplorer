import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';

export default function ImageViewer(props) {
  const {
    features, activeIndex, updateActive, productImage,
  } = props;

  const handleFeatureChange = (e) => {
    e.preventDefault();
    const newActiveIndex = Number(e.target.attributes.index.value);

    updateActive(newActiveIndex);
  };

  return (
    <div className={style.wrapper}>
      <img className={style.image} alt="main product" src={productImage} />
      {features.map((feature, index) => (
        <button
          className={activeIndex === index ? `${style.button} ${style.active}` : `${style.button}`}
          type="button"
          key={`${feature.posX}${feature.posY}`}
          index={index}
          style={{ top: `${feature.posY}%`, left: `${feature.posX}%` }}
          onClick={handleFeatureChange}
        >
          +
        </button>
      ))}
    </div>
  );
}

ImageViewer.defaultProps = {
  features: null,
  updateActive: null,
  activeIndex: 0,
  productImage: undefined,
};

ImageViewer.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      posX: PropTypes.number,
      posY: PropTypes.number,
    }),
  ),
  updateActive: PropTypes.func,
  activeIndex: PropTypes.number,
  productImage: PropTypes.string,
};
