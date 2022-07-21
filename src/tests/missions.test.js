import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../Redux/store';
import Missions from '../components/Missions';

test('renders correctly', () => {
  const mission = renderer.create(
    <Provider store={configureStore}>
      <Missions />
    </Provider>,
  );
  expect(mission).toMatchSnapshot();
});
