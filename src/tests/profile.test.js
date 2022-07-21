import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../Redux/store';
import Profile from '../components/Profile';

describe('test if profile page works correctly', () => {
  test('renders correctly', () => {
    const profile = renderer.create(
      <Provider store={configureStore}>
        <Profile />
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
});
