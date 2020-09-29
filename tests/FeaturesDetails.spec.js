import React from 'react';
import renderer from 'react-test-renderer';
import FeaturesDetails from '../client/src/components/FeaturesDetails';

describe('FeaturesDetails', () => {
  it('snapshot renders', () => {
    const component = renderer.create(<FeaturesDetails features={[{ value: '1' }, { value: '2' }, { value: '3' }]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});