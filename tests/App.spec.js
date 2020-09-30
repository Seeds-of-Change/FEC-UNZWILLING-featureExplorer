import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App';
import FeaturesDetails from '../client/src/components/FeaturesDetails/FeaturesDetails';
import ImageViewer from '../client/src/components/ImageViewer/ImageViewer';

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the Features Details Component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(FeaturesDetails).length).toEqual(1);
  });

  test('renders the Image Viewer Component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(ImageViewer).length).toEqual(1);
  });
});

describe('My Test Suite', () => {
  test('My Test Case', () => {
    expect(true).toEqual(true);
  });
});