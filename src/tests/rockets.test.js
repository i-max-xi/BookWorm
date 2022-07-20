import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../Redux/store';
import Rockets from '../components/Rockets';

describe('test if rockets page works correctly', () => {
  test('renders correctly', () => {
    const rocket = renderer.create(
      <Provider store={configureStore}>
        <Rockets />
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });
});
