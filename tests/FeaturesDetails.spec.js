import React from 'react';
import renderer from 'react-test-renderer';
import FeaturesDetails from '../client/src/components/FeaturesDetails/FeaturesDetails';

describe('FeaturesDetails', () => {
  describe('Have props', () => {
    let component;

    beforeEach(() => {
      const { features, header, activeIndex } = {
        features: [{
          heading: 'heading for 1', description: 'description string for feature 1', posX: 60, posY: 62,
        }, {
          heading: 'heading for 2', description: 'description string for feature 2', posX: 70, posY: 32,
        }, {
          heading: 'heading for 3', description: 'description string for feature 3', posX: 20, posY: 83,
        }],
        header: 'THIS IS THE HEADER',
        activeIndex: 0,
      };

      component = renderer.create(
        <FeaturesDetails features={features} header={header} activeIndex={activeIndex} />,
      );
    });

    test('snapshot renders', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
