import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from '../client/src/components/App';
import FeaturesDetails from '../client/src/components/FeaturesDetails';

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the Features Details Component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(FeaturesDetails).length).toEqual(1);
  });
});

describe('My Test Suite', () => {
  test('My Test Case', () => {
    expect(true).toEqual(true);
  });
});