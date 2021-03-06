import React from 'react';
import renderer from 'react-test-renderer';
import ImageViewer from '../client/src/components/ImageViewer/ImageViewer';

describe('ImageViewer', () => {
  describe('Have props', () => {
    let component;

    beforeEach(() => {
      const { features, activeIndex, productImage } = {
        features: [{
          heading: 'heading for 1', description: 'description string for feature 1', posX: 60, posY: 62,
        }, {
          heading: 'heading for 2', description: 'description string for feature 2', posX: 70, posY: 32,
        }, {
          heading: 'heading for 3', description: 'description string for feature 3', posX: 20, posY: 83,
        }],
        activeIndex: 0,
        productImage: 'https://unzwilling.s3-us-west-1.amazonaws.com/1.jpg',
      };

      component = renderer.create(
        <ImageViewer features={features} activeIndex={activeIndex} productImage={productImage} />,
      );
    });

    test('snapshot renders', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
